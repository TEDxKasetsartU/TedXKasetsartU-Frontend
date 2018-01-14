import { Link } from 'react-router-dom'
import React from 'react'
import TEDLogo from '../../../../common/images/TEDWhiteLogo.png'
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: rgba(0,0,0,0.5);
`

const NavLink = styled(Link)`
    font-weight: bold;
    color: white;
    &:hover {
        color: red;
    }
`

const NavItem = styled.div`
    display: flex;
    flex-direction: row;
`
export default () => (
  <Nav className='navbar fixed-top'>
    <Link to='/' className='navbar-brand'>
      <div className='container'>
        <img src={TEDLogo} alt='' />
      </div>
    </Link>
    <NavItem className='nav-item'>
      <NavLink to='/' className='nav-link'>EVENT</NavLink>
      <NavLink to='/' className='nav-link'>SPEAKER</NavLink>
      <NavLink to='/' className='nav-link'>ABOUT</NavLink>
    </NavItem>
  </Nav>
)
