import Landing from "@/app/(nondashboard)/landing/page";
import { Footer } from "@/components/Footer";
import NonDashboardNavbar from "@/components/NonDasboardNavbar";

export default function Layout( { children} : { children: React.ReactNode }) {
    return (
        <div className="nondashboard-layout">
            <NonDashboardNavbar />
            <main className="nondashboard-layout__main">
                {children}
            </main>
            <Footer />
        </div>
    );
}
