import { Navbar } from "@/components/my";


export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main  >
            <Navbar />
            <div className="px-0 sm:px-32">
                {children}
            </div>
        </main>
    );
}