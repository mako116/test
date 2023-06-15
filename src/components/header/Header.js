import React, { useEffect, useRef } from 'react'
import {Row, Container} from "reactstrap"
import { NavLink } from 'react-router-dom'
import './header.css'
const nav__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/jobs', 
        display:'Jobs'
    },
    {
        path:'/company',
        display:'Companies'
    },
    {
        path:'/testimonials',
        display:'Testimonials'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
   
]
const Header = () => {
    const menuRef = useRef(null)

    const headerRef = useRef(null)

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    const stickyHeaderFunc = ()=>{
        window.addEventListener("scroll",()=>{
            if(window.HTMLBodyElement.scrollTop>80 || document.documentElement.scrollTop > 80 ){
                headerRef.current.classList.add("sticky__header")
            }else{
                headerRef.current.classList.remove("sticky__header")
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return window.removeEventListener("scroll",stickyHeaderFunc)
    })
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
            <div className='nav_wrapper'>
                <div className='logo'>
               <h1>Tjtek</h1>
                 </div>
                 <div className="navigation" ref={menuRef} onClick={menuToggle}>
                   <ul className="menu">
                 {
                nav__links.map((item, index )=>(
                    <li className='nav__item' key={index}>
                    <NavLink to={item.path} 
                    className={(navClass)=> navClass.isActive ? 'nav__active' : ''}>
                    {item.display}</NavLink>
                    </li>
                )) }
        </ul>
    </div>
    <div className="mobile__menu">
        <span onClick={menuToggle}>
        Hamburger
        </span>
        </div>
            </div>
         </Row>
      </Container>
    </header>
  )
}

export default Header
