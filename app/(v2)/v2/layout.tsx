import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import SocialLinks from "@/components/SocialLinks";
import { V2_BASE } from "@/lib/paths";
import "./v2.css";

export const metadata: Metadata = {
  title: {
    absolute: "Philia Inc. | No woman has to walk alone. (Draft 2)",
    template: "%s | Philia Inc. (Draft 2)",
  },
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return (
    <div className="v2">
      <Header base={V2_BASE} />
      <main id="main">{children}</main>
      <Footer
        base={V2_BASE}
        aside={<NewsletterForm />}
        exploreExtra={
          <li>
            <Link href="/v2/team#board">Board of directors</Link>
          </li>
        }
        contactExtra={<SocialLinks />}
      />
    </div>
  );
}
