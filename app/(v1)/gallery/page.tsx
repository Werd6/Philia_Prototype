import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { CtaBand, PageIntro } from "@/components/Blocks";
import { LOREM, LOREM_SHORT } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageIntro eyebrow="Gallery" title={<>Moments <em>worth keeping.</em></>} intro={LOREM} />

      <section className="section-tight">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand
        title="Be in the next photo."
        text={LOREM_SHORT}
        actions={[
          { href: "/programs#upcoming", label: "Attend an event", primary: true },
          { href: "/get-involved#attend", label: "Join our community" },
        ]}
      />
    </>
  );
}
