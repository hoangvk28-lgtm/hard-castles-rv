import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockup: HardcastlesRV badge + text wordmark (the text stays the primary
 * element). The whole lockup links home.
 */
export function Wordmark({ size = "md" }: { size?: "md" | "sm" }) {
  const md = size === "md";
  return (
    <Link prefetch={false} href="/" aria-label="HardcastlesRV — home" className="group inline-flex items-center gap-2.5 focus-ring sm:gap-3">
      <Image
        src="/images/brand/mark.png"
        alt=""
        width={96}
        height={96}
        priority={md}
        unoptimized
        className={md ? "h-10 w-10 shrink-0 rounded-[9px] shadow-sm sm:h-11 sm:w-11 xl:h-12 xl:w-12" : "h-8 w-8 shrink-0 rounded-[7px]"}
      />
      <span className="flex flex-col">
        <span
          className={`font-[family-name:var(--font-display)] whitespace-nowrap font-semibold leading-none tracking-[-0.01em] text-ink ${
            md ? "text-[1.0625rem] min-[360px]:text-[1.25rem] sm:text-[1.5rem] lg:text-[1.3125rem] xl:text-[1.625rem]" : "text-lg"
          }`}
        >
          Hardcastles<span className="text-brand">RV</span>
        </span>
        {md && (
          <span className="mt-1.5 hidden whitespace-nowrap text-[0.5625rem] font-medium uppercase leading-none tracking-[0.32em] text-ink-secondary sm:block lg:hidden xl:block">
            Gear up. Roll out.
          </span>
        )}
      </span>
    </Link>
  );
}
