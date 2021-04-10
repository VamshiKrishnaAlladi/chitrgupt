import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { GoogleSignInButton } from '../components/GoogleSignInButton';
import { AuthUserContext } from '../lib/AuthUser.context';

export default function Login() {
    const router = useRouter();
    const { user, loading } = useContext(AuthUserContext);

    useEffect(() => {
        if (!loading && user) {
            router.push('/');
        }
    }, [user, loading]);

    return (
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-12 h-screen items-center justify-center">
            <Head>
                <title>Chitrgupt | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="min-w-max w-full flex flex-col my-4 p-4 text-center lg:text-right">
                <span className="text-4xl sm:text-6xl 2xl:text-7xl text-gray-800">Chitrgupt</span>
                <span className="my-4 text-lg sm:text-2xl 2xl:text-3xl text-gray-800">A next-gen expense manager</span>
            </section>

            <div className="hidden lg:block w-1 h-60 bg-gray-300" />

            <div className="w-full p-4 flex items-center justify-center lg:justify-start">
                <GoogleSignInButton />
            </div>
        </div>
    );
}
