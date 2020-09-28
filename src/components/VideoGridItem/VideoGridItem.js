import React from 'react'
import Style from "./VideoGridItem.module.scss"
import { Link } from "react-router-dom"

const VideoGridItem = ({ id, src, title }) => {
  return (
    <div>
      <Link to={{pathname:'watch',search:`?v=${id}`}} className={Style.item}>
        <img src={src} alt={title} />
        <span>{title}</span>
      </Link>
    </div>

  )
}

export default VideoGridItem
