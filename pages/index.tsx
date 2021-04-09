import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { AuthUserContext } from '../lib/AuthUser.context';
import { SignOutButton } from '../components/SignOutButton';

export default function Root() {
    const router = useRouter();
    const { user, loading } = useContext(AuthUserContext);

    useEffect(() => {
        if (!(user || loading)) {
            router.push('/login');
        }
    }, [user, loading]);

    return (
        <div className="h-screen">
            <Head>
                <title>XP Man</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="w-full h-16 shadow-lg flex justify-between items-center">
                    <div className="w-full mx-20 text-3xl">XP Man</div>
                    <div className="mx-10"><SignOutButton /></div>
                </div>
                <div className="mx-auto w-full sm:w-5/6 md:w-2/3 lg:w-4/5 xl:w-2/3" />
            </main>
        </div>
    );
}
