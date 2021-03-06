import React from 'react'
/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { lighten } from '@theme-ui/color'
import Container from '../Container'

const BannerWrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        paddingY: 2,
        // backgroundImage: theme => `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})`,
        backgroundImage: t => `linear-gradient(to bottom right, ${lighten('primary', 0.1)(t)}, ${lighten('secondary', 0.1)(t)})`,
        color: 'white'
      }}
    >
      <Container>{children}</Container>
    </Box>
  )
}

export default BannerWrapper
