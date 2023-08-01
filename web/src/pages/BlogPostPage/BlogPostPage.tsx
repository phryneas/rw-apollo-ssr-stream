import { useServerInsertedHTML } from '@redwoodjs/web'

import BlogPostCell from 'src/components/BlogPostCell'

type BlogPostPageProps = {
  id: number
}

const BlogPostPage = ({ id }: BlogPostPageProps) => {
  useServerInsertedHTML(() => {
    console.log('Running from BlogPostPage')

    return <meta name="bazinga" content="FIND ME AFTER INJECTION" />
  })

  return (
    <>
      {/* <MetaTags title={`Post ${id}`} description={`Description ${id}`} /> */}

      <BlogPostCell id={id} />
    </>
  )
}

export default BlogPostPage
