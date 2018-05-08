import React from 'react'
import TEDLogo from 'images/common/TEDWhiteLogo.png'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  border-top: medium solid red;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
`

const NavLink = styled.a`
  font-weight: 500;
  color: white;
  transition: all 300ms;

  &:hover {
    color: gray;
  }

  &:after {
    display:block;
    content: '';
    border-bottom: solid 2px red;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
`

export default () => (
  <Nav className='navbar sticky-top'>
    <a href='# ' className='navbar-brand'>
      <div className='container'>
        <img src={TEDLogo} height='35' alt='' />
      </div>
    </a>
    <NavItem className='nav-item'>
      <NavLink href='# ' className='nav-link'>EVENT</NavLink>
      <NavLink href='#speakers' className='nav-link'>SPEAKERS</NavLink>
      <NavLink href='#partners' className='nav-link'>PARTNERS</NavLink>
      <NavLink href='#volunteers' className='nav-link'>VOLUNTEERS</NavLink>
    </NavItem>
  </Nav>
)
