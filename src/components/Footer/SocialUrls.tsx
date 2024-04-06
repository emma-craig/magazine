import React from "react"
import { SOCIAL_USERNAMES } from "../../constants"
import { Link } from "react-router-dom"
import Instagram from "../icons/Instagram"
import Facebook from "../icons/Facebook"
import Youtube from "../icons/Youtube"
import Linkedin from "../icons/Linkedin"
import './Footer.css'

const SocialUrls = () => {
    const {instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES
  
    return (
      <ul >
        {instagram && (
          <li className="px-4">
            <Link
              to={`https://instagram.com/${instagram}`}
            >
              <Instagram width="20" height="20" />
            </Link>
          </li>
        )}
        {facebook && (
          <li className="px-4">
            <Link
              to={`https://facebook.com/${facebook}`}
            >
              <Facebook width="20" height="20" />
            </Link>
          </li>
        )}
        {youtube && (
          <li className="px-4">
            <Link
              to={`https://youtube.com/user/${youtube}`}
            >
              <Youtube width="20" height="20" />
            </Link>
          </li>
        )}
        {linkedin && (
          <li className="px-4">
            <Link
              to={`https://linkedin.com/in/${linkedin}`}
            >
              <Linkedin width="20" height="20" />
            </Link>
          </li>
        )}
      </ul>
    )
  }
  
  export default SocialUrls