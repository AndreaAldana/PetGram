import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button, likeIcon } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  // llamamos el id que recibimos como props de listOfPhotocards
  const key = `like-${id}`

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (e) {
      console.log('error!!', e)
    }
  })

  useEffect( function () {
    Promise.resolve(
    typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver :
    import('intersection-observer')).then(() => {
      const observer = new window.IntersectionObserver(function(entries) {
        // Propiedad de observer
        const { isIntersecting } = entries[0]
        if(isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      })
      observer.observe(element.current)
    })
    
  }, [element])

  const Icon = liked ? likeIcon : MdFavoriteBorder
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button onClick = {() => setLocalStorage(!liked)}>
        <Icon size='28px' /> {likes} likes!
      </Button>
        </Fragment>
      }
      
    </Article>
  )
}
