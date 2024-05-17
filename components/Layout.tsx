import { ReactNode } from "react";
import Navbar from "./Navbar"

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="p-4">{children}</main>
        </div>
    )
}

export default Layout