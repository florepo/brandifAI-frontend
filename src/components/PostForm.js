import React from 'react';
import {Button} from "semantic-ui-react"



const PostForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    console.log("click")
    props.handleSubmit(event)
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <p>[frontend scraped image of profile fron insta]</p>
      <Button type="submit"> Yes </Button>
    </form>
  )
}

export default PostForm