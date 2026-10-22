import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { CtaBand, PageHero } from "@/components/Blocks";
import { LOREM, LOREM_SHORT } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments <em>worth keeping.</em></>}
        intro={LOREM}
        scene="celebration"
        tone="pink"
        label="Galentines celebration"
      />

      <section className="section">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand
        title="Be in the next photo."
        text={LOREM_SHORT}
        actions={[
          { href: "/v2/programs#upcoming", label: "Attend an event", primary: true },
          { href: "/v2/get-involved#attend", label: "Join our community" },
        ]}
      />
    </>
  );
}
