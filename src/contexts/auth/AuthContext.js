import { createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            setMessage(user, token, credential);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            setMessage(errorCode, errorMessage, credential);
        })
    }

    const githubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            setMessage(user, token, credential);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
            setMessage(errorCode, errorMessage, credential);
        });
    }
    const anonymousSignIn = () => {
        signInAnonymously(auth)
        .then(() => {
            // Signed in..
            // ...
            setMessage("");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            setMessage(errorCode, errorMessage);
        });
    }
    const emailAndPasswordSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            setMessage(user);
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            setMessage(errorCode, errorMessage);
            });
    };

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider
        value={{
            user,
            googleSignIn,
            githubSignIn,
            anonymousSignIn,
            emailAndPasswordSignIn,
            logOut,
            message,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
}


