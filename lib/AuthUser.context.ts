import { createContext } from 'react';

export const AuthUserContext = createContext({ user: null, loading: false, error: null });
