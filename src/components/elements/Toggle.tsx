import React from 'react'
/** @jsx jsx */
import { css, jsx } from 'theme-ui'
import { lighten, darken, transparentize } from '@theme-ui/color'
import { Transition } from 'react-transition-group'
import { keyframes } from '@emotion/core'

const TIMEOUT = 500
const TRANSITION = 'ease'

const enteringSpinAnimation = (dir: number) => {
  return keyframes`
    0%   {
      transform: scale(0.6) rotate(${dir * 90}deg) translate3d(${dir * 30}px, 0px, 10px);
    }
    100% {
      transform: scale(1) rotate(0deg) translate3d(0px, 0px, 0);
    }
`
}

const transitionStyles = (dir: number) => ({
  entering: { opacity: 1, animation: `${enteringSpinAnimation(dir)} ${TIMEOUT}ms ${TRANSITION}` },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
  // entering: { opacity: 1, transform: 'scale(1.05) rotate(-90deg)' },
  // entered: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
  // exiting: { opacity: 0, transform: 'scale(0.8) rotate(90deg)' },
  // exited: { opacity: 0, transform: 'scale(0.8) rotate(-90deg)' }
})

const baseStyle = {
  display: 'inline-flex',
  transition: `all ${TRANSITION} 500ms`
}

interface ToggleProps {
  id: string
  checked: boolean
  onChange: () => {}
  CheckedIcon?: React.FC
  CheckedCircleIcon?: React.FC
  UncheckedIcon?: React.FC
  UncheckedCircleIcon?: React.FC
}

const Toggle: React.FC<ToggleProps> = ({ id, checked, UncheckedIcon, UncheckedCircleIcon, CheckedIcon, CheckedCircleIcon, onChange }) => {
  return (
    <label
      sx={{
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        paddingX: '0.5em',
        flexDirection: 'row',
        width: '3.75em',
        height: '2.125em',
        backgroundColor: t => lighten('listBgAlt', 0.1)(t),
        boxShadow: t => `0px 0px 0.3em ${darken('listBgAlt', 0.05)(t)} inset`,
        borderRadius: '1.5em',
        '&:focus-within': {
          boxShadow: t => `0px 0px 0px 3px ${lighten('secondary', 0.1)(t)}`
        },
        '&:focus-within > #slider': {
          backgroundColor: 'background'
        }
      }}
      htmlFor={id}
    >
      <input
        id={id}
        sx={{
          opacity: 0,
          width: 0,
          height: 0
        }}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Transition in={checked && !!CheckedIcon} timeout={TIMEOUT}>
          {state => {
            return (
              <span css={css({ ...transitionStyles(-1)[state], ...baseStyle })}>
                <CheckedIcon />
              </span>
            )
          }}
        </Transition>
        <Transition in={!checked && !!UncheckedIcon} timeout={TIMEOUT}>
          {state => {
            return (
              <span css={css({ ...transitionStyles(1)[state], ...baseStyle })}>
                <UncheckedIcon />
              </span>
            )
          }}
        </Transition>
      </div>
      <span
        id="slider"
        sx={{
          transform: checked ? 'translateX(1.625em)' : 'translateX(0px)',
          position: 'absolute',
          zIndex: 1,
          cursor: 'pointer',
          height: '1.625em',
          width: '1.625em',
          top: '0.25em',
          left: '0.25em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          right: 0,
          bottom: 0,
          backgroundColor: 'background',
          color: t => transparentize('text', 0.8),
          borderRadius: '1.5em',
          transition: `${TIMEOUT}ms ${TRANSITION}`,
          overflow: 'hidden'
          // boxShadow: t => `0px 0px 0px 1px ${transparentize('text', 0.6)(t)}`,
          // '::before': {
          //   position: 'absolute',
          //   content: '""',
          //   height: '1.625em',
          //   width: '1.625em',
          //   left: '0',
          //   bottom: '0',
          //   backgroundColor: 'background',
          //   borderRadius: '1.5em',
          //   transition: `${TIMEOUT}ms ${TRANSITION}`
          // }
        }}
      >
        {checked && CheckedCircleIcon && <CheckedCircleIcon />}
        {!checked && !!UncheckedCircleIcon && <UncheckedCircleIcon />}
      </span>
    </label>
  )
}

export default Toggle
