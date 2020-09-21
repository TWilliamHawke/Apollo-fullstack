type mockType = {
  loading: boolean
  posts: Record<string, unknown>[]
}


export const useGetAllPostsQuery = (): mockType => {
  return {
    loading: false,
    posts: [
      {_id: '1'}, {_id: '2'}
    ]
  }
}