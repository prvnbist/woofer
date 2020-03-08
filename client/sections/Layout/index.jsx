import React from 'react'

import Header from '../Header'
import Main from '../Main'

import { StyledLayout } from './styled'

const Layout = ({ children }) => (
   <StyledLayout>
      <Header />
      <Main>{children}</Main>
   </StyledLayout>
)

export default Layout
