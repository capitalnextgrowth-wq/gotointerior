import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fcfbef] px-5 text-[#171715]">
      {/* Oversized background 404 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <span
          className="translate-y-[-1%] bg-gradient-to-b from-[#a6a39d] via-[#c4c1ba] to-[#f2eee6] bg-clip-text font-sans text-[58vw] font-medium leading-[0.85] tracking-[-0.09em] text-transparent sm:text-[52vw] md:text-[42vw] lg:text-[38vw]"
          style={{ letterSpacing: "-0.105em" }}
        >
          404
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 -mt-8 flex w-full max-w-5xl flex-col items-center text-center sm:-mt-10">
        <div className="relative">
          <h1 className="whitespace-nowrap text-[clamp(1.8rem,4.15vw,4.5rem)] font-medium leading-tight tracking-[-0.065em]">
            This Space Doesn’t Exist.
          </h1>

          <span className="absolute -right-7 top-0 text-xs font-normal tracking-tight sm:-right-8 sm:text-sm">
            [01]
          </span>
        </div>

        <p className="mt-2 max-w-[370px] text-sm leading-[1.45] tracking-[-0.025em] text-[#817d74] sm:mt-2 sm:text-lg">
          The page you’re looking for may have
          <br className="hidden sm:block" /> moved, been removed, or never existed.
        </p>

        <Link
          href="/"
          className="group mt-6 inline-flex items-center gap-2 border-b border-[#24231f] pb-1 text-sm font-medium tracking-[-0.025em] transition-opacity hover:opacity-50 sm:mt-6"
        >
          <span>Back To Home</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
            ◦
          </span>
        </Link>
      </div>
    </main>
  );
}
