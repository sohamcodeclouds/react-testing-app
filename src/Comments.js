import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Comments = () => {
  const [commentList, setCommentList] = useState(null)

  useEffect(() => {
    ;(async () => {
      const todos = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1/comments'
      )
      console.log('data', todos)
      setCommentList(todos.data)
    })()
  }, [])

  return commentList ? (
    <ul>
      {commentList.map((comment, index) => (
        <li key={index} data-testid='comment'>
          {comment.name}
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading...</p>
  )
}

export default Comments
