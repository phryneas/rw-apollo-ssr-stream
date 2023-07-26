import { useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogPostCell from 'src/components/BlogPostCell'
import { useServerInsertedHTML } from 'src/ServerHtmlContext'

type BlogPostPageProps = {
  id: number
}

const BlogPostPage = ({ id }: BlogPostPageProps) => {
  return (
    <>
      {/* <MetaTags title={`Post ${id}`} description={`Description ${id}`} /> */}

      <BlogPostCell id={id} />
    </>
  )
}

export default BlogPostPage
