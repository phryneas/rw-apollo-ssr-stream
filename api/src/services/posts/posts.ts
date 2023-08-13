import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const posts: QueryResolvers['posts'] = async () => {
  // Simulate delay to debug streaming
  // if (firstCall) {
  //   firstCall = false
  //   await wait(5000)
  // } else {
  //   await wait(1000)
  // }
  // await wait(5000)

  return db.post.findMany()
}

export const post: QueryResolvers['post'] = async ({ id }) => {
  await wait(5000)

  return db.post.findUnique({
    where: { id },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post: PostRelationResolvers = {
  author: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).author()
  },
}
