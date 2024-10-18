export const metadata = {
    title: 'KEYAuth - Authentication',
    description: 'Login, register, or reset your password.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            <header className="bg-primary text-secondary px-4 py-2 bg-white ">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-3xl font-bold">
                        <a href="/" className="text-secondary no-underline hover:underline">
                            KEYAuth
                        </a>
                    </h1>
                </div>
            </header>
            <main className="flex justify-center pt-8">
                {children}
            </main>
        </div>
    )
}