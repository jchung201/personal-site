import React from 'react'
import { Box, Label } from 'theme-ui'

import HCaptcha from '@hcaptcha/react-hcaptcha'

import { Error } from './elements/Form/Error'

interface CaptchaProps {
  id: string
  onChange: Function
  errors: object
  name: string
}

export const Captcha = React.forwardRef<{}, CaptchaProps>(({ id, onChange, errors, name }, ref) => {
  // const context = useThemeUI()
  // const hasError = errors[name]
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Label
        sx={{
          marginBottom: 1
          // color: hasError ? 'red' : undefined
        }}
      >
        Are you human?
      </Label>
      <HCaptcha
        id={id}
        size="normal"
        ref={ref}
        sitekey={process.env.GATSBY_HCAPTCHA_SITE_ID}
        onVerify={onChange}
        onExpire={() => onChange(null)}
      // theme={context.colorMode}
      />
      <Error errors={errors} name={name} />
    </Box>
  )
})
