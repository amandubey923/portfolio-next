export default function CyberGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--cyber-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--cyber-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
