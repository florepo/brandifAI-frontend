import React, { Component } from 'react';
import Cheerio from "cheerio"
import Request from "request"
import { handleRef } from '@stardust-ui/react-component-ref';

const API = "https://www.instagram.com/barackobama/?hl=en"

const scrape = ()=> {
console.log("scrape")


Request(API, (error, response, body)=>{
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const $ = Cheerio.load(body)
    const result = $('meta[property=og:image]')
    // const result = result1("og:image")
    //  'meta property="og:image"..</meta>')
    
    // const result = $.root().html()

    console.log(result)

  })
  

}

const handleClick = (e) =>{
    console.log("clicked")
    scrape()
}

class Scraper extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return (  
            <button onClick={(event)=> handleClick(event)} >
                Scrape
            </button>
        );
    }
}
 
export default Scraper;