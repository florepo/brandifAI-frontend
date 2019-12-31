import React, { Component } from 'react';
import Cheerio from "cheerio"
import {Image} from "semantic-ui-react"

// const Scrape = (props) => {

//     const url = `https://www.instagram.com/${props.profileName}?hl=en`

//         const profileImgUrl = Request(url, (error, response, body) => {
//             // console.log('error:', error); // Print the error if one occurred
//             // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//             // console.log('body:', body); // Print the HTML for the Google homepage.
//             // catch errors???

//             const $ = Cheerio.load(body)
//             const result = $('meta[property="og:image"]')
//             console.log(url)
//             console.log('-')
//             console.log(result)
//             console.log('--')
//             console.log(result[0].attribs.content)
//             return result[0].attribs.content
            
//         })
  
//     return (
//        <img />
//     )
// }

// export default Scrape

class Scrape extends Component {
    constructor(props) {
        super(props);
        this.image = React.createRef()
        this.state = {  }
    }

    url = `https://www.instagram.com/${this.props.profileName}?hl=en`

    profileImgUrl = () => fetch(this.url)
        .then(res => res.text())
        .then(body => {
                const $ = Cheerio.load(body)
                const result = $('meta[property="og:image"]')
                return result[0].attribs.content
        })


    // profileImgUrl = () => new Promise((resolve, reject) => {
    //     Request(this.url, (error, response, body) => {
    //         if (error) return reject(error)
    //         // console.log('error:', error); // Print the error if one occurred
    //         // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //         // console.log('body:', body); // Print the HTML for the Google homepage.
    //         // catch errors???
    
    //         const $ = Cheerio.load(body)
    //         const result = $('meta[property="og:image"]')
    
    
    //         console.log("the actual result",result[0].attribs.content)
    //         resolve(result[0].attribs.content)
            
    //     })
    // })

    componentDidMount() {
        this.profileImgUrl()
            .then(src => {
                this.image.current.src = src
            })
    }

    render() { 
        return (
           <img  style={{borderRadius: "50%"}} ref={this.image}/>
         );
    }
}
 
export default Scrape;