import Footer from "@/app/components/fragments/Footer/page";
import Navbar from "@/app/components/fragments/Navbar/page";

export default function PrestasiLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}