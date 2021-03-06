import React, { useMemo } from 'react'
import TechLogo from './TechLogo'

import TAG_MAP from '../logos/constants'

interface TechLogoListProps {
  tags: string[]
  renderItem?: React.ReactNode
  marginRight?: number
  marginBottom?: number
  fontSize?: number
  isLink?: boolean
}

const techSort = (a: string, b: string) => {
  const left = TAG_MAP[a] || {}
  const right = TAG_MAP[b] || {}
  if (left.order > right.order) return 1
  if (left.order < right.order) return -1
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

const TechLogoList: React.FC<TechLogoListProps> = ({ tags, renderItem, marginRight, marginBottom, fontSize, isLink }) => {
  const sorted = useMemo(() => tags.sort(techSort), [tags])
  const Render = renderItem || TechLogo
  return sorted.map(tag => {
    return <Render tag={tag} key={tag} marginRight={marginRight} marginBottom={marginBottom} fontSize={fontSize} isLink={isLink} />
  })
}

export default TechLogoList
