import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, likeIcon } from './styles'
import { FavButton } from '../FavButton/index'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLike, ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  
  const [show, element] = useNearScreen();
 
  // llamamos el id que recibimos como props de listOfPhotocards
  const key = `like-${id}`
  // Llamando custom hook
  const [liked, setLiked] = useLocalStorage(key, false);
  
  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/?detail=${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <ToggleLikeMutation>
        {
          (toggleLike) => {
            const handleFavClick = () => {
              !liked && toggleLike({ variables: {
                input: { id }
              }})
              setLiked(!liked)
            }
  
            return  <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          }
        }
      </ToggleLikeMutation>
        </Fragment>
      }
      
    </Article>
  )
}
