import { auth, googleAuthProvider } from '../lib/firebase';

export const GoogleSignInButton = () => {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                onClick={signInWithGoogle}
                className="min-w-max shadow-lg bg-transparent rounded-md overflow-hidden flex items-center justify-center"
            >
                <div className="h-12 w-12 p-2 bg-gray-100 border border-r-0 border-gray-300 rounded-md rounded-r-none">
                    <img src="/google.png" alt="Google Logo" />
                </div>
                <div className="h-12 px-4 bg-blue-500 border border-l-0 border-blue-400 rounded-md rounded-l-none flex items-center">
                    <span className="text-white text-xl">Sign in with Google</span>
                </div>
            </button>
        </div>
    );
};
