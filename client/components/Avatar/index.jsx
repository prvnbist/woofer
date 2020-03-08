import React from 'react'
import Link from 'next/link'

// Styled
import { StyledAvatar } from './styled'

const Avatar = ({ title, url, username }) => {
   const getInitials = () => {
      const { length } = title.split(' ')
      const first = title.split(' ')[0][0]
      const last = length > 1 ? title.split(' ')[length - 1][0] : ''
      return `${first}${last}`
   }
   return (
      <Link href={`/profile/${username}`}>
         <StyledAvatar
            tabIndex="0"
            title={title}
            role="button"
            data-type="avatar">
            {url ? <img src={url} alt={title} /> : `${getInitials()}`}
         </StyledAvatar>
      </Link>
   )
}

export default Avatar
