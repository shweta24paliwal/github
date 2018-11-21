import React, {Component} from 'react';
import './Profile.css';

import User from '../User/User.js';
import Repo from '../Repo/Repo.js';

class Profile extends Component{
    render(){
        return(
            <div className='main-container'>
                <User/>
                <Repo/>
            </div>
        )
    }
}
export default Profile