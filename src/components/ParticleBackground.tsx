export default function ParticleBackground() {
  return (
    <div
      className="particle-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.3,
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 30%),
          radial-gradient(circle at 90% 10%, rgba(59, 130, 246, 0.05) 0%, transparent 30%),
          radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.05) 0%, transparent 30%)
        `
      }}
      aria-hidden="true"
    />
  );
}