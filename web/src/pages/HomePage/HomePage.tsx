import { Suspense } from 'react'

import { setVerbosity } from 'ts-invariant'

import BlogPostCell from 'src/components/BlogPostCell'

setVerbosity('debug')

const Loading = () => {
  return (
    <div className="mt-4">
      <div className="flex animate-pulse">
        <div className="h-4 w-1/5 rounded-full bg-gray-400"></div>
      </div>
      <div className="mt-5 animate-pulse">
        <div className="h-4 w-4/5 rounded-full bg-gray-400"></div>
        <div className="mt-2 h-4 w-3/4 rounded-full bg-gray-400"></div>
        <div className="mt-2 h-4 w-1/2 rounded-full bg-gray-400"></div>
        <div className="mt-2 h-4 w-full rounded-full bg-gray-400"></div>
      </div>
    </div>
  )
}

const HomePage = () => {
  // @NOTE: for reproduction, I've made the queries respond slowly.
  // 1 responds in 1a, 2 in 2, 3 in 3s
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BlogPostCell id={1} />
      </Suspense>

      {/* Wrap 2 and 3 in the same loading */}
      <Suspense fallback={<Loading />}>
        <BlogPostCell id={2} />
        <BlogPostCell id={3} />
      </Suspense>
    </>
  )
}

export default HomePage
