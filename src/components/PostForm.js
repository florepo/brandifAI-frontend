import React from 'react';
import {Button} from "semantic-ui-react"

const PostForm = props => {
  return (
    <form>
    <p>[frontend scraped image of profile fron insta]</p>
      <Button onSubmit={event => props.handleSubmit(event)} type="submit">Yes</Button>
    </form>
  )
}

export default PostForm