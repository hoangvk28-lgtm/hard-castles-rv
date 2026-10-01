import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { silos } from "@/data/silos";

export const metadata: Metadata = buildMetadata({
  title: "About Hardcastle's RV",
  description:
    "Hardcastle’s RV publishes straight-talking RV and camping buying guides, comparing gear on published specs, fit and trade-offs so you can buy with confidence.",
  path: "/about",
});

const principles = [
  {
    title: "Start with the rig",
    body: "Every guide begins with the constraints that actually decide a purchase: rig size and weight limits, hookups, power budget, storage space and how you like to camp.",
  },
  {
    title: "Show the trade-offs",
    body: "Each pick comes with who it suits and when to skip it. We would rather tell you a cheaper option will do than sell you more than the job needs.",
  },
  {
    title: "Say where the facts come from",
    body: "Our comparisons use published specifications, included hardware, compatibility details and warranty terms. We do not claim hands-on testing unless a guide says so explicitly.",
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-[760px] px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 text-[2.25rem] leading-tight sm:text-[2.75rem]">Life on the road runs on the right gear.</h1>
      <p className="mt-4 text-[1.125rem] leading-relaxed">
        {SITE_NAME} publishes buying guides for the tools and gear that keep an RV running and a campsite comfortable, from power stations
        and generators to compact appliances and travel gear. Our aim is simple: help you choose the right thing the first time.
      </p>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">How we work</h2>
      <ol className="mt-4 divide-y divide-border">
        {principles.map((p, i) => (
          <li key={p.title} className="py-5">
            <h3 className="flex gap-3 text-[1.25rem]">
              <span aria-hidden className="text-brand">{String(i + 1).padStart(2, "0")}</span>
              {p.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed">{p.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">What we cover</h2>
      <ul className="mt-4 divide-y divide-border">
        {silos.map((s) => (
          <li key={s.slug} className="py-4">
            <Link prefetch={false} href={`/${s.slug}`} className="font-[family-name:var(--font-display)] text-[1.25rem] !text-ink hover:!text-brand">
              {s.name}
            </Link>
            <p className="mt-1 text-base">{s.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">How we make money</h2>
      <p className="mt-4 text-base leading-relaxed">
        {SITE_NAME} is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no
        extra cost to you. Commissions never decide which products we recommend or how they are ranked. Read our{" "}
        <Link prefetch={false} href="/affiliate-disclosure">affiliate disclosure</Link> and{" "}
        <Link prefetch={false} href="/how-we-review">how we review</Link> for details.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Questions or corrections? <Link prefetch={false} href="/contact">Get in touch</Link>.
      </p>
    </article>
  );
}
