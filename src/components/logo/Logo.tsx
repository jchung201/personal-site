import React from 'react'
/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

interface LogoProps {
  alt?: string
}
const Logo: React.FC<LogoProps> = ({ alt, sx, ...props }) => (
  <Box sx={sx} {...props}>
    <svg alt={alt} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.12 69.16" height="100%">
      <path
        fill="currentColor"
        d="M73.54 0 62.94 10.6 81.2 28.86 86.92 34.58 90.49 38.14 93.96 41.61 73.54 62.04 70.06 58.56 87.01 41.61 83.45 38.05 62.94 58.56 73.54 69.16 97.52 45.17 97.52 45.17 101.08 41.61 101.08 41.61 97.52 38.05 94.05 34.58 94.05 34.58 70.06 10.6 73.54 7.12 104.55 38.14 108.12 34.58 73.54 0z"
      />
      <path
        fill="currentColor"
        d="M34.58 0 45.18 10.6 28.75 27.02 25.19 23.46 38.06 10.6 34.58 7.12 9.61 32.1 20.16 32.1 20.16 37.13 9.68 37.13 34.58 62.04 36.32 60.3 38.06 58.56 25.19 45.7 28.75 42.13 41.62 55 41.62 55 45.18 58.56 34.58 69.16 0 34.58 34.58 0z"
      />
    </svg>
  </Box>
)

export default Logo
