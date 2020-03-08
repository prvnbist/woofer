import React from 'react'
import { useRouter } from 'next/router'

// Components
import { ButtonGroup, IconButton, Avatar } from '../'

// Icons
import { CommentIcon, HeartIcon } from '../../icons'

// Styles
import {
   StyledWrapper,
   StyledHeader,
   StyledName,
   StyledSpan,
   StyledContent
} from './styled'

const Tweet = ({ user, woof }) => {
   const router = useRouter()
   const showComments = () => {
      router.push(`/woof/${woof.id}`)
   }
   const handleLike = () => {}
   return (
      <StyledWrapper>
         <Avatar username={user.username} title={user.name} url={user.image} />
         <div>
            <StyledHeader>
               <div onClick={() => router.push(`/profile/${user.username}`)}>
                  <StyledName>{user.name}</StyledName>
                  <StyledSpan>@{user.username}</StyledSpan>
               </div>
               <StyledSpan data-type="timestamp">
                  {new Intl.DateTimeFormat('en-US', {
                     year: 'numeric',
                     month: 'short',
                     day: 'numeric',
                     hour: 'numeric',
                     minute: 'numeric'
                  }).format(new Date(woof.createdAt))}
               </StyledSpan>
            </StyledHeader>
            <main>
               <StyledContent>{woof.message}</StyledContent>
            </main>
            <footer>
               <ButtonGroup align="left">
                  <IconButton
                     type="ghost"
                     startIcon={<CommentIcon />}
                     onClick={showComments}>
                     {woof.repliesCount}
                  </IconButton>
                  <IconButton
                     type="ghost"
                     startIcon={<HeartIcon />}
                     onClick={handleLike}>
                     {woof.likesCount}
                  </IconButton>
               </ButtonGroup>
            </footer>
         </div>
      </StyledWrapper>
   )
}

export default Tweet
