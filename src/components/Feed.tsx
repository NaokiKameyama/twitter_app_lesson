import React from 'react'
import {auth} from "../firebase"
import TweetInput from './TweetInput'
import styles from "./Feed.module.css"

function Feed() {
  return (
    <div className={styles.feed}>
      Feed
      <TweetInput/>
      <button onClick={()=>auth.signOut()}>Logout</button>
    </div>
  )
}

export default Feed