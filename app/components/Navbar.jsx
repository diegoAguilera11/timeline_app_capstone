import Link from 'next/link'
import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

export const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
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
                
                <li className='p-2 cursor-pointer'>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
         )}
            {(!user) ? (
            <ul className='flex'>
                <li
                    className='p-2 cursor-pointer'>
                    <Link href='/login'>Login</Link>
                </li>
                <li className='p-2 cursor-pointer'>
                    <Link href='/login'>Sign up</Link>
                </li>
            </ul>

            ): (
                <ul className='flex'>
                <li
                    onClick={logOut} 
                    className='p-2 cursor-pointer'>
                    Sign out
                </li>
            </ul>
            )}
        </div>
    )
}
