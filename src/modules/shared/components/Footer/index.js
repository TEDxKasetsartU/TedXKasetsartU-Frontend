import React from 'react'
import styled from 'styled-components'
import IconLink from '../IconLink'
import TEDLogo from '../../../../common/images/TEDxKasetsartU_logo-white-trim.png'

const Footer = styled.footer`
  margin-top: 4em;
  border-top: 2px solid red;
`

const Content = styled.div`
  max-width: 1124px;
  margin: auto;
  padding: 1.5em 0;
`

const Grid = styled.div`
  display: grid;
  grid-gap: .5em;
  justify-content: center;

  > a {
    color: black;
    text-decoration: none;
    transition: all 300ms;
  }

  > a:hover {
    color: red;
  }
`

const Quote = styled.p`
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
  font-family: sans-serif;
  font-size: 19px;
`

const CopyRight = styled.small`
  background-color: rgb(35, 35, 35);
  color: lightgray;
  padding: 8px;
`

export default () => (
  <Footer>
    <Content>
      <div className='row align-items-center no-gutters'>
        <div className='col-md text-center'>
          <img src={TEDLogo} className='img-fluid' width='300' alt='tedxku' />
        </div>
        <div className='col-md'>
          <blockquote className='blockquote pt-0 pt-md-4 px-4 text-center text-md-left'>
            <Quote className='mb-1'>
               “We believe passionately in the power of ideas to change
              attitudes, lives and, ultimately, the world.”
            </Quote>
            <footer className='blockquote-footer'>
              <cite>TED</cite>
            </footer>
          </blockquote>
        </div>
        <div className='col-md'>
          <Grid>
            <IconLink
              href='https://facebook.com/TEDxKasetsartU'
              name='globe'
              text='TEDxKasetsartU'
            />
            <IconLink
              href='http://tedxkasetsartu.net'
              name='facebook-official'
              text='tedxkasetsartu.net'
            />
            <IconLink
              href='https://facebook.com/TEDxKasetsartU'
              name='twitter'
              text='TEDxKasetsartU'
            />
            <IconLink
              href='https://www.linkedin.com/company/tedxkasetsartu'
              name='linkedin'
              text='tedxkasetsartu'
            />
          </Grid>
        </div>
      </div>
    </Content>
    <CopyRight className='text-center text-md-right mt-4 mt-md-0 px-4 d-block'>
      Copyright © TEDxKasetsartU. All rights reserved.
    </CopyRight>
  </Footer>
)
