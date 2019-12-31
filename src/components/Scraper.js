import React, { Component } from 'react';
import Cheerio from "cheerio"


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

    componentDidMount() {
        this.profileImgUrl()
            .then(src => {
                this.image.current.src = src
                return src
            })
            .then(src => this.props.handleConfirm(src))
        
    }

    render() { 
        return (
           <img  style={{borderRadius: "50%"}} ref={this.image}/>
         );
    }
}
 
export default Scrape;