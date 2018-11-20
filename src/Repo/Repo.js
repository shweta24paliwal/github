import React, {Component} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Repo.css';

class Repo extends Component{
    render(){
        const typeValues = ["All","Sources","Forks","Archived","Mirrors"];
        const LanguageValues = ["All", "HTML", "JavaScript","CSS"];
        return(
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
        )
    }
 }
 export default Repo