import { PrismaClient } from '@prisma/client'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogPostsCell from 'src/components/BlogPostsCell'
import { useServerInsertedHTML } from 'src/ServerHtmlContext'

// const doSomething = () => {
//   console.log(PrismaClient)
// }

const HomePage = () => {
  console.log('HOMEPAGEEEE')
  useServerInsertedHTML(() => {
    console.log('XXXX ServerInsertedHTML')
    console.log('Running function injected from HomePage')
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `console.log('bazinga this was set by useServerInsertHtml');`,
        }}
      />
    )
  })
  // doSomething()
  return <BlogPostsCell />
}

export default HomePage
