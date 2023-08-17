import Link from 'next/link'
import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

export const Navbar = () => {
    const {user, googleSignIn, logOut} = useContext(AuthContext);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }

    console.log(user);


    return (
        <div className='h-20 w-full bg-cyan-600 border-b-2-cyan-700
         flex items-center justify-between p-2'>

         {(!user) ? (
            <ul className='flex'>
                <li className='p-2 cursor-pointer'>
                    <Link href='/'>Home</Link>
                </li>

                <li className='p-2 cursor-pointer'>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
         ) : (
            <ul className='flex'>
                <li className='p-2 cursor-pointer'>
                    <Link href='/profile'>Profile</Link>
                </li>
            </ul>
         )}

            {(!user) ? (
            <ul className='flex'>
                <li
                    onClick={handleSignIn} 
                    className='p-2 cursor-pointer'>
                    Login
                </li>

                <li className='p-2 cursor-pointer'>
                    Sign up
                </li>
            </ul>

            ): (
                <ul className='flex'>
                <li
                    onClick={handleSignOut} 
                    className='p-2 cursor-pointer'>
                    Sign out
                </li>
            </ul>
            )}
        </div>
    )
}
