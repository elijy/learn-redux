// increment likes
export function increment(index) {
  return {
    type: "INCREMENT_LIKE",
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

// delete comment
export function deleteComment(postId, index) {
  type: "DELETE_COMMENT",
  postId,
  index
}
