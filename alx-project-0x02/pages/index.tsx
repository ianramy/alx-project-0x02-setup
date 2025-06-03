// alx-project-0x02/pages/index.tsx

import Head from 'next/head';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Welcome</title>
            </Head>
            <h1 className="text-4xl font-bold">Welcome to the Next.js Project!</h1>
        </div>
    );
}