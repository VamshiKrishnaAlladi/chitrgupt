import { auth } from '../lib/firebase';

export const SignOutButton = () => {
    const signOut = async () => {
        await auth.signOut();
    };

    return (
        <div className="shadow-lg min-w-max">
            <button type="button" className="flex items-center bg-blue-500 rounded overflow-hidden " onClick={signOut}>
                <div className="h-12 text-xl text-white px-4 flex items-center space-x-4">
                    <span>Sign out</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                </div>
            </button>
        </div>
    );
};
