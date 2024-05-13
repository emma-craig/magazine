import React from "react"
import { SOCIAL_USERNAMES } from "../../constants"
import { Link } from "react-router-dom"
import Instagram from "../icons/Instagram"
import Facebook from "../icons/Facebook"
import Youtube from "../icons/Youtube"
import Linkedin from "../icons/Linkedin"
import { Box } from "@mui/system"
import { List, ListItem } from "@mui/material"

const SocialUrls = () => {
    const {instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES
  
    return (
      <Box display = 'flex' flexDirection='row'  justifyContent='flex-end'>
             <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }} component = 'ul'>

        {instagram && (
          <ListItem >
            <Link
              to={`https://instagram.com/${instagram}`}
            >
              <Instagram width="20" height="20" />
            </Link>
          </ListItem>
        )}
        {facebook && (
          <ListItem >
            <Link
              to={`https://facebook.com/${facebook}`}
            >
              <Facebook width="20" height="20" />
            </Link>
          </ListItem>
        )}
        {youtube && (
          <ListItem >
            <Link
              to={`https://youtube.com/user/${youtube}`}
            >
              <Youtube width="20" height="20" />
            </Link>
          </ListItem>
        )}
        {linkedin && (
          <ListItem >
            <Link
              to={`https://linkedin.com/in/${linkedin}`}
            >
              <Linkedin width="20" height="20" />
            </Link>
          </ListItem>
        )}
      </List></Box>
    )
  }
  
  export default SocialUrls