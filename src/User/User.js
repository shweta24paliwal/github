import React, {Component} from 'react';
import './User.css';

class User extends Component{
   render(){
    return(
        <div className='profile-container'>
            <img src='https://avatars3.githubusercontent.com/u/7427552?s=460&v=4'/>
            <h2 className='user-name'>Supreet Singh</h2>
            <h4 className='user-id'>supreetsingh247</h4>
            <p className='bio'>Front end developer since 1.5 yrs</p>
            <button className='btn edit-btn'>Edit Bio</button>
            <ul className='info'>
                <li>Target Coorporation</li>
                <li>India</li>
                <li><i class="fal fa-envelope"></i>supreetsingh.247@gmail.com</li>
            </ul>
        </div>
    )
   }
}
export default User