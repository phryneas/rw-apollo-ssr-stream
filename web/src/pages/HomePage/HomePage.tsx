import { setVerbosity } from 'ts-invariant'

import { useServerInsertedHTML } from '@redwoodjs/web'

import BlogPostsCell from 'src/components/BlogPostsCell'

// const doSomething = () => {
//   console.log(PrismaClient)
// }
setVerbosity('debug')

const HomePage = () => {
  // useServerInsertedHTML(() => {
  //   console.log('XXXX ServerInsertedHTML')
  //   console.log('Running function injected from HomePage')
  //   return (
  //     <script
  //       dangerouslySetInnerHTML={{
  //         __html: `alert('bazinga this was set by useServerInsertHtml');`,
  //       }}
  //     />
  //   )
  // })
  // doSomething()
  return <BlogPostsCell />
}

export default HomePage
