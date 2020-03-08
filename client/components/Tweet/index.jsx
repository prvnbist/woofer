import React from 'react'
import { useRouter } from 'next/router'

// Components
import { ButtonGroup, IconButton } from '../Button'
import Avatar from '../Avatar'

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
   const goToProfile = () => router.push(`/profile/${user.username}`)
   return (
      <StyledWrapper>
         <Avatar username={user.username} title={user.name} url={user.image} />
         <div>
            <StyledHeader>
               <div
                  tabIndex="0"
                  role="button"
                  onClick={goToProfile}
                  onKeyPress={e => e.charCode === 32 && goToProfile()}>
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
