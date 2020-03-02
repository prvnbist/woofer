import React from 'react'

import { Header, Main } from '../'

const Layout = ({ children }) => (
   <div>
      <Header />
      <Main>{children}</Main>
   </div>
)

export default Layout
