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
                <li><i class="icon fas fa-users"></i>Target Coorporation</li>
                <li><i class="icon fas fa-map-marker-alt"></i>India</li>
                <li><i class="icon far fa-envelope"></i><span className='email-id'>supreetsingh.247@gmail.com</span></li>
            </ul>
        </div>
    )
   }
}
export default User