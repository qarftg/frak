import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-full h-[90px] border-b dorder-grau-300 flex'>
        <nav>
            <ul>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О нас</Link>
                <Link to={'/todo'}>Туду листик</Link>
            </ul>
        </nav>
    </div>
  )
}
