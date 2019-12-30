import React from 'react';
import {Button} from "semantic-ui-react"

const PostForm = props => {
  return (
    <form onSubmit={event => props.handleSubmit(event)}>
    <p>[frontend scraped image of profile fron insta]</p>
      <Button type="submit">Yes</Button>
    </form>
  )
}

export default PostForm