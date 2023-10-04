import { Suspense, useState, use, useRef } from 'react'

import { setVerbosity } from 'ts-invariant'

import BlogPostCell from 'src/components/BlogPostCell'
import { useServerInsertedHTML } from '@redwoodjs/web'

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

function DelayedComponent({
  time,
  delays,
}: {
  time: number
  delays: Map<number, Promise<void>>
}) {
  const logged = useRef(false)
  if (typeof window === 'undefined') {
    const delay =
      delays.get(time) ??
      new Promise<void>((resolve) => setTimeout(resolve, time * 1000))
    delays.set(time, delay)
    use(delay)
    // eslint-disable-next-line react-hooks/rules-of-hooks

    useServerInsertedHTML(() => {
      if (!logged.current) {
        logged.current = true
        return (
          <script
            dangerouslySetInnerHTML={{
              __html: `console.log("delayed by ${time} seconds")`,
            }}
          />
        )
      }
      return <></>
    })
  }
  return <>Delayed by {time} seconds</>
}

const HomePage = () => {
  // @NOTE: for reproduction, I've made the queries respond slowly.
  // 1 responds in 1a, 2 in 2, 3 in 3s
  const [delays] = useState(new Map<number, Promise<void>>())
  return (
    <>
      <Suspense>
        <DelayedComponent time={1} delays={delays} />
      </Suspense>
      <Suspense>
        <DelayedComponent time={2} delays={delays} />
      </Suspense>
      <Suspense>
        <DelayedComponent time={3} delays={delays} />
      </Suspense>
      <Suspense>
        <DelayedComponent time={4} delays={delays} />
      </Suspense>
    </>
  )
}

export default HomePage
