import Footer from "../fragments/Footer/page"
import NavbarPpdb from "../fragments/NavbarPpdb/page"

const PpdbLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <NavbarPpdb />
        {children}
        <Footer />
        </>
    )
}

export default PpdbLayout;               