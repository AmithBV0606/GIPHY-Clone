import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube   } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className='faded-text pt-2'>
        <span>Follow on : </span>

        <div className='flex gap-4 pt-2'>
            <a href="https://www.youtube.com/results?search_query=gipfy+website"><FaYoutube size={20}/></a>
            <a href="https://www.instagram.com/giphy"><FaInstagram size={20}/></a>
            <a href="https://twitter.com/giphy"><FaTwitter size={20}/></a>
        </div>
    </div>
  )
}

export default FollowOn



