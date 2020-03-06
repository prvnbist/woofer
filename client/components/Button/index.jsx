import React from 'react'

// Styles
import { StyledIconButton, StyledButtonGroup } from './styled'

export const IconButton = ({ startIcon, endIcon, children, ...props }) => {
   return (
      <StyledIconButton
         position={typeof startIcon === 'object' ? 'left' : 'right'}
         {...props}>
         {typeof startIcon === 'object' && <span>{startIcon}</span>}
         {children}
         {typeof endIcon === 'object' && <span>{endIcon}</span>}
      </StyledIconButton>
   )
}

export const ButtonGroup = ({ align, children, ...props }) => {
   return (
      <StyledButtonGroup align={align} {...props}>
         {children}
      </StyledButtonGroup>
   )
}
