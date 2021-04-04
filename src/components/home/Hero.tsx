import React from 'react'
import { Flex } from 'theme-ui'

const Hero = ({ children }) => {
  return (
    <Flex
      sx={{
        position: 'relative',
        // backgroundColor: 'primary',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: ['70% 50%', '50% 50%'],
        minHeight: `calc(80vh - ${90}px)`,
        flex: '1 0 auto'
        // filter: ' hue-rotate(100deg)'
        // filter: 'grayscale(1)'
      }}
    >
      {/* <video
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="https://estepanov.s3.amazonaws.com/fallMini.webm" type="video/webm" />
        <source src="https://estepanov.s3.amazonaws.com/fallMini.mp4" type="video/mp4" />
      </video> */}
      {children}
    </Flex>
  )
}

export default Hero
