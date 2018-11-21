import React, {Component} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Repo.css';
import {connect} from 'react-redux';
import mapStateToProps from './mapStateToProps.js';
import mapDispatchToProps from './mapDispatchToProps.js';

class Repo extends Component{
    constructor(props) {
        super(props);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onLangChange = this.onLangChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);    
    }

    onTypeChange(value) {
        this.props.updateType ({value: value})
    }


    onLangChange(value) {
        this.props.updateLanguage ({value: value})
    }

    onInputChange(value) {
        this.props.updateSearchQuery({value: value})
    }

    render(){
        const typeValues = this.props.typeValues;
        const LanguageValues = this.props.LanguageValues;
        const query = this.props.searchQuery;
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
                    <input value={query} onChange={(e) => {this.onInputChange(e.target.value)}} type='text' className='search-bar' placeholder='Search repositories'/>
                    <div className='dropdown-btn-container'>
                        <Dropdown onChange={this.onTypeChange} selected={this.props.selectedType} name='Type:' values={typeValues}/>
                        <Dropdown onChange={this.onLangChange} selected={this.props.selectedLang} name='Language:' values={LanguageValues}/>
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

 export default connect(mapStateToProps, mapDispatchToProps)(Repo);