import React from 'react'
/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'

import { Work } from '../../interfaces/Work'

interface WorkItemProps {
  item: Work
}

const getYear = (dateString: string): number | null => {
  if (!dateString) return null
  const date = new Date(dateString)
  return date.getFullYear()
}

const getMonth = (dateString: string): string | null => {
  if (!dateString) return null
  const date = new Date(dateString)
  const monthMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return monthMap[date.getUTCMonth()]
}

const WorkItem: React.FC<WorkItemProps> = ({ item }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Text>
        {item.frontmatter.position} @&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.frontmatter.website}
          sx={{
            fontWeight: 'bold',
            color: 'white',
            transition: 'ease-in-out 0.3s',
            '&:hover': {
              color: 'primary'
            },
            '&:visited': {
              color: 'white'
            }
          }}
        >
          {item.frontmatter.companyName}
        </a>
      </Text>
      {/* <Text sx={{ fontSize: 0 }}>
        {getMonth(item.frontmatter.startDate)}&nbsp;
        {getYear(item.frontmatter.startDate)}
        {item.frontmatter.endDate !== '' ? (
          <React.Fragment>
            &nbsp;-&nbsp;{getMonth(item.frontmatter.endDate)}&nbsp;
            {getYear(item.frontmatter.endDate)}
          </React.Fragment>
        ) : null}
      </Text> */}
    </Box>
  )
}

export default WorkItem