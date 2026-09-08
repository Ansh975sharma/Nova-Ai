import React from 'react'
import NotionLogo from "../assets/NotionLogo.webp"
import SlackLogo from "../assets/SlackLogo.png"
import spotifyLogo from "../assets/spotifyLogo.webp"
import microsoftLogo from "../assets/microsoftLogo.avif"
import googleLogo from "../assets/googleLogo.webp"

function TrustedBy() {
  return (
    <div className=" flex flex-col items-center">
        <p>TRUSTED BY INNOVATIVE TEAMS AT</p>
        <div className="flex gap-5  ">
        {/* <img className="" src={googleLogo} alt="google Logo" />
        <img src={microsoftLogo} alt="microsoft Logo" />
          <img src={SlackLogo} alt="slack Logo" />
        <img src={NotionLogo} alt="Notion Logo" />
         <img src={spotifyLogo} alt="spotify Logo" /> */}
         <p>Google</p>
         <p>Microsoft</p>
         <p>Slack</p>
         <p>Notion</p>
         <p>Spotify</p>
        </div>
       
      
    </div>
  )
}

export default TrustedBy