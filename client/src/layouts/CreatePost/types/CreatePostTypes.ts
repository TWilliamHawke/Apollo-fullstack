export type CreatePostFormType = {
  title: string,
  content: string
}

export type CreatePostNamesType = keyof CreatePostFormType