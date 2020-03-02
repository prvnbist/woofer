import React from 'react'

import { Header, Main } from '../'

import { StyledLayout } from './styled'

const Layout = ({ children }) => (
   <StyledLayout>
      <Header />
      <Main>{children}</Main>
   </StyledLayout>
)

export default Layout
