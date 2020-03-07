import styled, { css } from 'styled-components'

export const StyledAvatar = styled.a(
   () => css`
      color: #fff;
      width: 36px;
      height: 36px;
      display: inline-flex;
      flex-shrink: 0;
      overflow: hidden;
      background: #e6c02a;
      border: 1px solid #fff;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      img {
         width: 100%;
      }
   `
)
