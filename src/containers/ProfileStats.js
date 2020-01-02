import React, { Component } from 'react';
import TabBar from './TabsContainer';
import {API_STATS} from '../adapters/api'



class ProfileStats extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    getStatsData = () => {

       const url = API_STATS + this.props.selectedProfile.stat.id
        console.log(url)
    }

    render() { 
        return ( <div className="nav2000">
            {this.getStatsData()}
                    <TabBar contentOne={this.contentOne}/>
                </div> 
            
            
        );
    }
}
 
export default ProfileStats;