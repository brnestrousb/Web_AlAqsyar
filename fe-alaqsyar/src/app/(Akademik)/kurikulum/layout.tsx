import Footer from "../../components/fragments/Footer/page";
import Navbar from "../../components/fragments/Navbar/page";

export default function KurikulumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
