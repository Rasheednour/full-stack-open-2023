import { useState } from 'react'

const Blog = ({ blog, updateBlog, removeBlog, username }) => {
  const [isHidden, setIsHidden] = useState(true)

  const toggleDisplay = () => {
    setIsHidden(!isHidden)
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }
  const updateLikes = () => {
    const updatedBlog = {
      author: blog.author,
      title: blog.title,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    }
    updateBlog(blog.id, updatedBlog, blog.user)
  }

  const handleRemove = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      removeBlog(blog.id)
    }
  }
  return (
    <div style={blogStyle} className='blog'>
      <span className='blog-title-author'>
        {blog.title} {blog.author}
      </span>
      <button onClick={toggleDisplay} id={isHidden ? 'view-button' : 'hide-button'}>{isHidden ? 'view' : 'hide'}</button>
      {!isHidden && (
        <div className='blog-info'>
          <div>{blog.url}</div>
          <div className='likes'>
            likes {blog.likes}
            <button onClick={updateLikes} id='like-button'>like</button>
          </div>
          <div>{blog.user.name}</div>
          {username === blog.user.username &&  <button onClick={handleRemove} id='remove-button'>remove</button>}
        </div>
      )}
    </div>
  )
}

export default Blog
