import React from 'react'

import { StyledHeader, StyledLogo } from './styled'

const Header = () => {
   return (
      <StyledHeader>
         <StyledLogo>
            <img src="/static/svgs/logo.svg" alt="Woofer" />
         </StyledLogo>
      </StyledHeader>
   )
}

export default Header
