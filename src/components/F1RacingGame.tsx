import React, { useEffect, useRef, useState } from 'react';

const F1RacingGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStatus, setGameStatus] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // Game constants
  const WIDTH = 480;
  const HEIGHT = 400;
  const CAR_W = 40;
  const CAR_H = 70;
  const LANES = 4;
  const LANE_W = 80;
  const TRACK_LEFT = (WIDTH - LANES * LANE_W) / 2;
  const TRACK_RIGHT = TRACK_LEFT + LANES * LANE_W;
  
  // Refs for game state
  const carX = useRef(TRACK_LEFT + LANE_W * 1.5 - CAR_W / 2);
  const obstacles = useRef<{x: number; y: number; type: number; w: number; h: number}[]>([]);
  const scrollY = useRef(0);
  const frameCount = useRef(0);
  const currentScore = useRef(0);
  const gameRunning = useRef(false);
  const animFrame = useRef(0);
  const keys = useRef({left: false, right: false});

  // Draw F1 car - more detailed
  const drawF1Car = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.ellipse(x + CAR_W/2, y + CAR_H + 5, CAR_W/2 + 5, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Rear wing
    ctx.fillStyle = '#111';
    ctx.fillRect(x - 8, y + CAR_H - 8, CAR_W + 16, 8);
    ctx.fillStyle = '#DC0000';
    ctx.fillRect(x - 6, y + CAR_H - 12, CAR_W + 12, 5);
    
    // Rear wheels
    ctx.fillStyle = '#111';
    ctx.fillRect(x - 10, y + CAR_H - 25, 10, 22);
    ctx.fillRect(x + CAR_W, y + CAR_H - 25, 10, 22);
    // Wheel detail
    ctx.fillStyle = '#333';
    ctx.fillRect(x - 8, y + CAR_H - 20, 6, 3);
    ctx.fillRect(x + CAR_W + 2, y + CAR_H - 20, 6, 3);
    
    // Main body - red
    ctx.fillStyle = '#DC0000';
    ctx.beginPath();
    ctx.moveTo(x + CAR_W/2, y); // nose tip
    ctx.lineTo(x + CAR_W - 3, y + 20);
    ctx.lineTo(x + CAR_W, y + 25);
    ctx.lineTo(x + CAR_W, y + CAR_H - 12);
    ctx.lineTo(x, y + CAR_H - 12);
    ctx.lineTo(x, y + 25);
    ctx.lineTo(x + 3, y + 20);
    ctx.closePath();
    ctx.fill();
    
    // Side pods
    ctx.fillStyle = '#B00000';
    ctx.fillRect(x - 3, y + 28, 8, 25);
    ctx.fillRect(x + CAR_W - 5, y + 28, 8, 25);
    
    // Cockpit halo
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.ellipse(x + CAR_W/2, y + 32, 12, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Driver helmet
    ctx.fillStyle = '#DC0000';
    ctx.beginPath();
    ctx.arc(x + CAR_W/2, y + 30, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFD700'; // gold visor
    ctx.fillRect(x + CAR_W/2 - 5, y + 28, 10, 3);
    
    // Front wheels
    ctx.fillStyle = '#111';
    ctx.fillRect(x - 10, y + 12, 10, 20);
    ctx.fillRect(x + CAR_W, y + 12, 10, 20);
    // Wheel detail
    ctx.fillStyle = '#333';
    ctx.fillRect(x - 8, y + 18, 6, 3);
    ctx.fillRect(x + CAR_W + 2, y + 18, 6, 3);
    
    // Front wing
    ctx.fillStyle = '#DC0000';
    ctx.fillRect(x - 8, y + 3, 8, 4);
    ctx.fillRect(x + CAR_W, y + 3, 8, 4);
    ctx.fillStyle = '#111';
    ctx.fillRect(x - 10, y + 7, CAR_W + 20, 3);
    
    // White racing stripes
    ctx.fillStyle = '#FFF';
    ctx.fillRect(x + CAR_W/2 - 2, y + 8, 4, CAR_H - 25);
    
    // Number
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('16', x + CAR_W/2, y + 58);
  };

  // Draw obstacle
  const drawObstacle = (ctx: CanvasRenderingContext2D, x: number, y: number, type: number, w: number, h: number) => {
    if (type === 0) {
      // Tire
      ctx.fillStyle = '#1a1a1a';
      ctx.beginPath();
      ctx.arc(x + w/2, y + h/2, w/2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#444';
      ctx.beginPath();
      ctx.arc(x + w/2, y + h/2, w/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#222';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x + w/2, y + h/2, w/3, 0, Math.PI * 2);
      ctx.stroke();
    } else if (type === 1) {
      // Cone
      ctx.fillStyle = '#FF6600';
      ctx.beginPath();
      ctx.moveTo(x + w/2, y);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.fillRect(x + w*0.2, y + h*0.35, w*0.6, 5);
      ctx.fillRect(x + w*0.15, y + h*0.55, w*0.7, 5);
    } else {
      // Marshal
      ctx.fillStyle = '#FF8C00';
      ctx.fillRect(x + w*0.25, y + h*0.25, w*0.5, h*0.4);
      ctx.fillStyle = '#FFE0BD';
      ctx.beginPath();
      ctx.arc(x + w/2, y + h*0.15, w*0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(x + w*0.28, y + h*0.65, w*0.18, h*0.35);
      ctx.fillRect(x + w*0.54, y + h*0.65, w*0.18, h*0.35);
    }
  };

  // Draw track
  const drawTrack = (ctx: CanvasRenderingContext2D) => {
    // Background
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    
    // Grass
    ctx.fillStyle = '#1a4d1a';
    ctx.fillRect(0, 0, TRACK_LEFT - 12, HEIGHT);
    ctx.fillRect(TRACK_RIGHT + 12, 0, WIDTH - TRACK_RIGHT - 12, HEIGHT);
    
    // Kerbs
    const kerbW = 12;
    for (let y = -40 + (scrollY.current % 40); y < HEIGHT + 40; y += 40) {
      ctx.fillStyle = y % 80 < 40 ? '#DC0000' : '#FFF';
      ctx.fillRect(TRACK_LEFT - kerbW, y, kerbW, 40);
      ctx.fillStyle = y % 80 < 40 ? '#FFF' : '#DC0000';
      ctx.fillRect(TRACK_RIGHT, y, kerbW, 40);
    }
    
    // Lane lines
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.setLineDash([20, 20]);
    for (let i = 1; i < LANES; i++) {
      const lx = TRACK_LEFT + i * LANE_W;
      ctx.beginPath();
      ctx.moveTo(lx, -20 + (scrollY.current % 40));
      ctx.lineTo(lx, HEIGHT + 20);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // Checkered top
    const cs = 10;
    for (let cx = 0; cx < WIDTH; cx += cs) {
      for (let cy = 0; cy < cs * 2; cy += cs) {
        ctx.fillStyle = (Math.floor(cx/cs) + Math.floor(cy/cs)) % 2 === 0 ? '#FFF' : '#111';
        ctx.fillRect(cx, cy, cs, cs);
      }
    }
  };

  const startGame = () => {
    carX.current = TRACK_LEFT + LANE_W * 1.5 - CAR_W / 2;
    obstacles.current = [];
    scrollY.current = 0;
    frameCount.current = 0;
    currentScore.current = 0;
    gameRunning.current = true;
    keys.current = {left: false, right: false};
    setScore(0);
    setGameStatus('playing');
    
    // Start game loop
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    runGameLoop();
  };

  const runGameLoop = () => {
    if (!gameRunning.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    frameCount.current++;
    
    // Move car
    const speed = 6;
    if (keys.current.left) {
      carX.current = Math.max(TRACK_LEFT + 5, carX.current - speed);
    }
    if (keys.current.right) {
      carX.current = Math.min(TRACK_RIGHT - CAR_W - 5, carX.current + speed);
    }
    
    // Scroll track
    const gameSpeed = 4 + Math.floor(currentScore.current / 100) * 0.5;
    scrollY.current += gameSpeed;
    
    // Spawn obstacles
    const spawnRate = Math.max(50, 80 - Math.floor(currentScore.current / 50));
    if (frameCount.current % spawnRate === 0) {
      const type = Math.floor(Math.random() * 3);
      const lane = Math.floor(Math.random() * LANES);
      const w = type === 0 ? 30 : type === 1 ? 25 : 30;
      const h = type === 0 ? 30 : type === 1 ? 40 : 50;
      obstacles.current.push({
        x: TRACK_LEFT + lane * LANE_W + (LANE_W - w) / 2,
        y: -h - 10,
        type,
        w,
        h
      });
    }
    
    // Update obstacles
    const carY = HEIGHT - CAR_H - 30;
    let hit = false;
    
    obstacles.current = obstacles.current.filter(obs => {
      obs.y += gameSpeed;
      
      // Collision check
      const carL = carX.current + 8;
      const carR = carX.current + CAR_W - 8;
      const carT = carY + 10;
      const carB = carY + CAR_H - 10;
      
      if (carL < obs.x + obs.w - 5 && carR > obs.x + 5 && carT < obs.y + obs.h - 5 && carB > obs.y + 5) {
        hit = true;
      }
      
      // Score
      if (obs.y > carY + CAR_H && !('scored' in obs)) {
        (obs as any).scored = true;
        currentScore.current += 10;
        setScore(currentScore.current);
      }
      
      return obs.y < HEIGHT + 50;
    });
    
    if (hit) {
      gameRunning.current = false;
      setGameStatus('gameover');
      if (currentScore.current > highScore) {
        setHighScore(currentScore.current);
      }
      return;
    }
    
    // Draw
    drawTrack(ctx);
    obstacles.current.forEach(obs => drawObstacle(ctx, obs.x, obs.y, obs.type, obs.w, obs.h));
    drawF1Car(ctx, carX.current, carY);
    
    // Score display
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${currentScore.current}`, 15, 45);
    
    animFrame.current = requestAnimationFrame(runGameLoop);
  };

  // Initial draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    drawTrack(ctx);
    drawF1Car(ctx, TRACK_LEFT + LANE_W * 1.5 - CAR_W / 2, HEIGHT - CAR_H - 30);
    
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        keys.current.left = true;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        keys.current.right = true;
      }
      if (e.key === ' ') {
        e.preventDefault();
        if (gameStatus !== 'playing') {
          startGame();
        }
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        keys.current.left = false;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        keys.current.right = false;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStatus]);

  // Touch controls
  const handleTouch = (e: React.TouchEvent, isStart: boolean) => {
    if (!isStart) {
      keys.current.left = false;
      keys.current.right = false;
      return;
    }
    
    if (gameStatus !== 'playing') {
      startGame();
      return;
    }
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.touches[0].clientX - rect.left;
    
    if (x < rect.width / 2) {
      keys.current.left = true;
    } else {
      keys.current.right = true;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '40px 16px 60px',
      background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: 'repeating-linear-gradient(90deg, #DC0000 0px, #DC0000 15px, #FFF 15px, #FFF 30px)',
      }} />

      <h2 style={{
        fontSize: 'clamp(1.1rem, 4vw, 1.8rem)',
        fontWeight: '800',
        color: '#DC0000',
        textAlign: 'center',
        letterSpacing: '0.05em',
        fontFamily: 'system-ui, sans-serif',
        textShadow: '0 0 20px rgba(220,0,0,0.5)',
        padding: '0 10px',
        lineHeight: 1.3,
      }}>
        play my game if you're bored of this website
      </h2>

      <p style={{ color: '#888', fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', textAlign: 'center', padding: '0 10px' }}>
        <span className="desktop-controls">← → or A/D to move • SPACE to start</span>
        <span className="mobile-controls" style={{ display: 'none' }}>Tap left/right to steer • Tap to start</span>
      </p>
      
      <style>{`
        @media (max-width: 600px) {
          .desktop-controls { display: none !important; }
          .mobile-controls { display: inline !important; }
        }
      `}</style>

      <div style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 15px 50px rgba(220,0,0,0.3)',
        border: '3px solid #DC0000',
        maxWidth: '100%',
        width: 'min(480px, calc(100vw - 32px))',
      }}>
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          style={{ display: 'block', width: '100%', height: 'auto', touchAction: 'none' }}
          onTouchStart={(e) => handleTouch(e, true)}
          onTouchEnd={(e) => handleTouch(e, false)}
        />

        {gameStatus === 'idle' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <div style={{ fontSize: '3.5rem' }}>🏎️</div>
            <button
              onClick={startGame}
              style={{
                background: 'linear-gradient(135deg, #DC0000, #900)',
                color: '#FFF',
                border: 'none',
                padding: '14px 44px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                boxShadow: '0 8px 25px rgba(220,0,0,0.4)',
              }}
            >
              Start Race
            </button>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>or press SPACE</p>
          </div>
        )}

        {gameStatus === 'gameover' && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
          }}>
            <div style={{
              fontSize: 'clamp(1rem, 3.5vw, 1.4rem)',
              color: '#DC0000',
              fontWeight: '800',
              textAlign: 'center',
              lineHeight: 1.4,
              padding: '0 16px',
            }}>
              you lost... are you in a ferrari or something? 🏎️💨
            </div>
            <div style={{ fontSize: '1.3rem', color: '#FFF' }}>
              Score: <span style={{ color: '#DC0000', fontWeight: '700' }}>{score}</span>
            </div>
            {highScore > 0 && (
              <div style={{ fontSize: '0.9rem', color: '#777' }}>High Score: {highScore}</div>
            )}
            <button
              onClick={startGame}
              style={{
                background: 'linear-gradient(135deg, #DC0000, #900)',
                color: '#FFF',
                border: 'none',
                padding: '12px 36px',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '8px',
                boxShadow: '0 8px 25px rgba(220,0,0,0.4)',
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* Mobile touch controls - only visible on mobile when playing */}
      {gameStatus === 'playing' && (
        <div 
          className="mobile-touch-controls"
          style={{
            display: 'none',
            width: '100%',
            maxWidth: '400px',
            gap: '20px',
            marginTop: '12px',
          }}
        >
          <button
            onTouchStart={() => { keys.current.left = true; }}
            onTouchEnd={() => { keys.current.left = false; }}
            onMouseDown={() => { keys.current.left = true; }}
            onMouseUp={() => { keys.current.left = false; }}
            onMouseLeave={() => { keys.current.left = false; }}
            style={{
              flex: 1,
              height: '70px',
              background: 'linear-gradient(135deg, rgba(220, 0, 0, 0.3), rgba(139, 0, 0, 0.3))',
              border: '2px solid rgba(220, 0, 0, 0.5)',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              touchAction: 'manipulation',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            ←
          </button>
          <button
            onTouchStart={() => { keys.current.right = true; }}
            onTouchEnd={() => { keys.current.right = false; }}
            onMouseDown={() => { keys.current.right = true; }}
            onMouseUp={() => { keys.current.right = false; }}
            onMouseLeave={() => { keys.current.right = false; }}
            style={{
              flex: 1,
              height: '70px',
              background: 'linear-gradient(135deg, rgba(220, 0, 0, 0.3), rgba(139, 0, 0, 0.3))',
              border: '2px solid rgba(220, 0, 0, 0.5)',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              touchAction: 'manipulation',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            →
          </button>
        </div>
      )}
      
      <style>{`
        @media (max-width: 768px) {
          .mobile-touch-controls {
            display: flex !important;
          }
        }
      `}</style>

      <p className="mobile-hint" style={{ color: '#555', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', textAlign: 'center', display: 'none' }}>
        Use the buttons below to steer
      </p>
      
      <style>{`
        @media (max-width: 768px) {
          .mobile-hint {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default F1RacingGame;
