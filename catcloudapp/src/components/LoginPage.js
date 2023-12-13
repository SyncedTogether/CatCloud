import React from 'react';
import { signInWithGoogle } from '../auth';


const LoginPage = () => {
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default LoginPage;
