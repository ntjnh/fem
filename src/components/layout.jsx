export default function Layout({ pageTitle = 'Frontend Mentor', children }) {
    return (
        <div>
            <header className="p-12 text-center">
                <h1 className="font-semibold text-5xl text-gray-900 tracking-tight">
                    {pageTitle}
                </h1>
                <p className="mt-2 text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </header>

            <main>
                <div className="container mx-auto">
                    {children}
                </div>
            </main>

            <footer className="bg-sky-700 mt-16 px-6 py-4 self-end text-center text-xs text-white w-full">
                <a
                    className="text-white underline hover:no-underline"
                    href="https://nate-dev.com?utm_source=codebynate&utm_medium=web&utm_campaign=fem"
                    target="_blank"
                    rel="noreferrer">Nate</a> built this.
            </footer>
        </div>
    )
}