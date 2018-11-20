import React, {Component} from 'react';
import './Profile.css';
import Dropdown from '../Dropdown/Dropdown';

class Profile extends Component{
   
    render(){
        const typeValues = ["All","Sources","Forks","Archived","Mirrors"];
        const LanguageValues = ["All", "HTML", "JavaScript","CSS"];
        return(
            <div className='main-container'>
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
                <div className='repo-container'>
                    <div className='nav-bar-container'>
                        <nav className='nav-bar'>
                            <a href='#'>Overview</a>
                            <a href='#' className='active'>Repositories <span className='count'>11</span></a>
                            <a href='#'>Stars <span className='count'>5</span></a>
                            <a href='#'>Followers <span className='count'>2</span></a>
                            <a href='#'>Following <span className='count'>2</span></a>
                        </nav>
                    </div>
                    <div className='search-bar-container'>
                        <input type='text' className='search-bar' placeholder='Search repositories'/>
                        <div className='dropdown-btn-container'>
                            <Dropdown name='Type:' values={typeValues}/>
                            <Dropdown name='Language:' values={LanguageValues}/>
                            <button className='btn new-btn'>New</button>
                        </div>
                    </div>
                    <div className='repo-data-container'>
                        <ul class='repo'>
                            <li>
                                <a>React-Redux-Boilerplate</a>
                                <span>Javascript</span>
                                <span>Updated on 29 Jul</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Profile