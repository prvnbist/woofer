import styled from 'styled-components'

export const StyledWrapper = styled.div`
   padding: 16px;
   display: inline-flex;
   border-top: 1px solid #e9e9e9;
   border-bottom: 1px solid #e9e9e9;
   > a[data-type='avatar'] {
      margin-right: 16px;
   }
   footer {
      margin-top: 8px;
   }
`

export const StyledHeader = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   > div {
      display: flex;
      align-items: center;
   }
`

export const StyledName = styled.h3`
   color: #1b2c38;
   font-size: 16px;
   font-weight: 600;
   margin-right: 4px;
`

export const StyledSpan = styled.span`
   color: #a3bed1;
   font-weight: 400;
`

export const StyledContent = styled.p`
   color: #1b2c38;
   font-size: 16px;
   margin-top: 4px;
   line-height: 24px;
`
