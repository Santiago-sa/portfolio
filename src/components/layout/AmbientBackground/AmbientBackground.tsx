export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Cyan glow */}
      <div
        className="
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan/10
          blur-[120px]
        "
      />

      {/* Violet glow */}
      <div
        className="
          absolute
          -right-40
          top-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet/10
          blur-[120px]
        "
      />

      {/* Background grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />
    </div>
  )
}