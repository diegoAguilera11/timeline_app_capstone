'use client'
import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

const page = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='p-4'>
      {user ? (
        <p>Profile Page</p>
      ) : (
        <p></p>
      )}
    </div>
  )

}
export default page