import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <Link style={{marginRight: '16px'}} to='/'>Home</Link>
        <Link to='/like'>LikePage</Link>
    </div>
  )
};
