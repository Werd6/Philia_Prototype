import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function V1Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
