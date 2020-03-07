import React from 'react'
import Link from 'next/link'

// Styled
import { StyledAvatar } from './styled'

const Avatar = ({ title, url, username, ...props }) => {
   const getInitials = title => {
      const length = title.split(' ').length
      const first = title.split(' ')[0][0]
      const last = length > 1 ? title.split(' ')[length - 1][0] : ''
      return `${first}${last}`
   }
   return (
      <Link href={`/profile/${username}`}>
         <StyledAvatar title={title} {...props} data-type="avatar">
            {url ? <img src={url} alt={title} /> : `${getInitials(title)}`}
         </StyledAvatar>
      </Link>
   )
}

export default Avatar
