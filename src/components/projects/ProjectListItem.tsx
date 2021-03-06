import React from 'react'

import { Project } from '../../interfaces/Project'
import SquareListItem from '../SquareListItem'

interface Props {
  project: Project
}

const ProjectListItem: React.FC<Props> = ({ project }) => {
  return (
    <SquareListItem
      linkTo={project.fields.slug}
      size={project.frontmatter.size}
      images={project.frontmatter.images}
      tech={project.frontmatter.tech}
      date={project.frontmatter.date ? new Date(project.frontmatter.date).getFullYear() : undefined}
      excerpt={project.excerpt}
      banners={project.frontmatter.banners}
      title={project.frontmatter.title}
    />
  )
}

export default ProjectListItem
