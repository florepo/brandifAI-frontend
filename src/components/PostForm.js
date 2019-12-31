import React from 'react';
import {Button, Grid} from "semantic-ui-react"
import Scrape from "../components/Scraper"


const PostForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    console.log("click")
    props.handleSubmit(event)
  }


  return (
    <form onSubmit={event => handleSubmit(event)}>
    <div >
      <Scrape profileName={props.profileName} />
      <br></br>
      <Button type="submit"> Yes </Button>
    </div>
    </form>
  )
}

export default PostForm