import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SingleLink({ to, Icon, title, menuIsOpen }) {
    return (
        <NavLink
            title={title}
            className={`flex ${!menuIsOpen ? 'justify-center' : 'justify-center lg:justify-start'} items-center text-md py-2 px-5  w-full text-gray-700 font-medium`}
            style={({ isActive }) => {
                return {
                    color: isActive ? '#fff' : 'rgb(55 65 81)',
                    background: isActive ? "#0D53FC" : "transparent",
                    borderBottom: isActive ? '5px solid #0044E9' : '5px solid transparent'
                };
            }}
            to={to} >
            <Icon
             className={`${menuIsOpen ? 'text-md mr-3' : 'text-xl mr-0'}`} />
            <span className='hidden md:block'>{menuIsOpen && title}</span>
        </NavLink>
    )
}
