import IconLink from 'modules/shared/components/IconLink'
import React from 'react'
import TEDLogo from 'images/common/TED2lineWhite.png'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const Footer = styled.footer`
  border-top: 2px solid red;
  background-color: ${colors.black};
`

const Content = styled.div`
  max-width: 1124px;
  margin: auto;
  padding: 1.5em 0;
  color: white;
`

const Grid = styled.div`
  display: grid;
  grid-gap: .5em;
  justify-content: center;
`

const Quote = styled.p`
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
  font-family: sans-serif;
  font-size: 16px;
`

const CopyRight = styled.small.attrs({
  className: 'text-center text-md-right mt-2 mt-md-0 px-4 d-block'
})`
  background-color: rgb(35, 35, 35);
  color: lightgray;
  padding: 8px;
`

export default () => (
  <Footer>
    <Content>
      <div className='row align-items-center no-gutters container'>
        <div className='col-md text-center'>
          <img src={TEDLogo} className='img-fluid' width='300' alt='tedxku' />
        </div>
        <div className='col-md'>
          <blockquote className='pt-0 pl-0 px-4 text-center pt-md-4 pl-md-4 px-md-0 text-md-left'>
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
    <CopyRight>Copyright © TEDxKasetsartU. All rights reserved.</CopyRight>
  </Footer>
)
