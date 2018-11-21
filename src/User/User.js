import React, {Component} from 'react';
import './User.css';
import {connect} from 'react-redux';
import mapStateToProps from './mapStateToProps.js';
import mapDispatchToProps from './mapDispatchToProps.js';
import {get} from "lodash";

class User extends Component{
   componentDidMount() {
        // this.props.getProfileData();
   } 
   render(){
       console.log('info---0', get.toString());
       console.log('user profile', this.props.userProfile);
       console.log('user profile api call', this.props.userProfileFetchInProgress);
       const {userProfile} = this.props;
    return(
        <div className='profile-container'>
            {this.props.userProfileFetchInProgress ? (
                <div>
                    Loading Profile...
                </div>    
            ): (
                <div>
                    <img src={get(userProfile,'avatar_url')}/>
                    <h2 className='user-name'>{get(userProfile, 'name')}</h2>
                    <h4 className='user-id'>{get(userProfile, 'login')}</h4>
                    <p className='bio'>{get(userProfile, 'bio')}</p>
                    <button className='btn edit-btn'>Edit Bio</button>
                    <ul className='info'>
                        <li><i class="icon fas fa-users"></i>{get(userProfile, 'company')}</li>
                        <li><i class="icon fas fa-map-marker-alt"></i>{get(userProfile, 'location')}</li>
                        <li><i class="icon far fa-envelope"></i><span className='email-id'>{get(userProfile, 'email') || "supreetsingh.247@gmail.com"}</span></li>
                    </ul>
                </div>
            )}
        </div>
    )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);