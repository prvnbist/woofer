import styled, { css } from 'styled-components'

const selectType = type => {
   switch (type) {
      case 'primary':
         return css`
            color: #fff;
            border: none;
            background: #4eadf0;
         `
      case 'secondary':
         return css`
            border: none;
            color: #1b2c38;
            background: #e8f6ff;
         `
      case 'ghost':
         return css`
            border: none;
            color: #1b2c38;
            background: transparent;
            :hover {
               background: #e8f6ff;
            }
         `
      default:
         return css`
            color: #fff;
            border: none;
            background: #4eadf0;
         `
   }
}

export const StyledIconButton = styled.button(
   ({ type, position }) => css`
      height: 32px;
      cursor: pointer;
      font-weight: 500;
      border-radius: 4px;
      align-items: center;
      display: inline-flex;
      vertical-align: middle;
      ${selectType(type)}
      padding: ${position === 'left' ? '0 12px 0 0' : '0 0 0 12px'};
      span {
         width: 32px;
         height: 32px;
         align-items: center;
         display: inline-flex;
         justify-content: center;
      }
   `
)

export const StyledButtonGroup = styled.div(
   ({ align }) => css`
      width: 100%;
      display: inline-flex;
      justify-content: ${align === 'left' ? 'flex-start' : 'flex-end'};
      button {
         ${align === 'left' && 'margin-right: 16px'};
         ${align === 'right' && 'margin-left: 16px'};
      }
   `
)
