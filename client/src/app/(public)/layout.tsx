

export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="min-h-screen">
            <div className="px-0 sm:px-10">
                {children}
            </div>
        </main>
    );
}