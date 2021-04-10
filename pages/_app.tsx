import { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AuthUserContext } from '../lib/AuthUser.context';
import { auth } from '../lib/firebase';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    const [user, loading, error] = useAuthState(auth);

    return (
        <AuthUserContext.Provider value={{ user, loading, error }}>
            <Component {...pageProps} />
        </AuthUserContext.Provider>
    );
}

export default App;
