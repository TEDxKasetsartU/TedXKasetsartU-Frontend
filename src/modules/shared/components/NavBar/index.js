import Icon from 'react-fontawesome'
import PropTypes from 'prop-types'
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
  @media (max-width: 991px) {
    position: relative;
    display: inline-block;
    &:hover {
      display: block;
    }
  }
`

const MenuContainer = styled.div`
  display: flex;
  @media (max-width: 991px) {
    display: ${props => props.showMenu ? 'block' : 'none'};
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    min-width: 120px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
    z-index: 1300;
    right: 0;
  }
`

class NavBar extends React.PureComponent {
  state = {
    showMenu: false
  }

  showMenu = (e) => {
    this.setState({ showMenu: true })
    e.preventDefault()
  }

  componentDidMount () {
    const self = this
    window.onclick = e => {
      if (!e.target.matches('#menu-btn')) self.setState({ showMenu: false })
    }
  }

  render () {
    const { showMenu } = this.state
    const { isLive } = this.props
    return (
      <Nav className='navbar sticky-top'>
        <a href='# ' className='navbar-brand'>
          <div className='container'>
            <img src={TEDLogo} height='35' alt='' />
          </div>
        </a>
        <NavItem className='nav-item'>
          <NavLink id='menu-btn' href='' className='nav-link d-block d-lg-none' onClick={(e) => this.showMenu(e)} ><Icon name='bars' size='lg' /></NavLink>
          <MenuContainer showMenu={showMenu}>
            <NavLink href='#event' className='nav-link'>EVENT</NavLink>
            { isLive && <NavLink href='#live' className='nav-link'><Icon name='circle' size='md' /> LIVE</NavLink>}
            <NavLink href='#speakers' className='nav-link'>SPEAKERS</NavLink>
            <NavLink href='#partners' className='nav-link'>PARTNERS</NavLink>
            <NavLink href='#volunteers' className='nav-link'>VOLUNTEERS</NavLink>
          </MenuContainer>
        </NavItem>
      </Nav>
    )
  }
}

NavBar.propTypes = {
  isLive: PropTypes.bool
}

export default NavBar
