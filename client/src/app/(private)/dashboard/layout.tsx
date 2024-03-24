import Image from "next/image";
import { NavbarDashboard, SidebarDashboard } from "@/components/my";

export default function DashBoardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className="grid grid-cols-6">
                <aside className="col-span-1">
                    <SidebarDashboard />
                </aside>
                <div className="col-span-5">
                    <NavbarDashboard />
                    <main className="p-16">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}