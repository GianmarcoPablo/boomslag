

export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main  >
            <div className="px-0 sm:px-32">
                {children}
            </div>
        </main>
    );
}