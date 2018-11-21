import React, {Component} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Repo.css';
import RepoList from './RepoList';
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

    componentDidMount() {
     // this.props.getRepoData();      
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

        console.log('repos', this.props.userRepos);
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
                {this.props.userReposFetchInProgress ? (
                    <div>Loading Repos...</div>
                ) : (
                    <div>
                        <div className='search-bar-container'>
                            <input value={query} onChange={(e) => {this.onInputChange(e.target.value)}} type='text' className='search-bar' placeholder='Search repositories'/>
                            <div className='dropdown-btn-container'>
                                <Dropdown onChange={this.onTypeChange} selected={this.props.selectedType} name='Type:' values={typeValues}/>
                                <Dropdown onChange={this.onLangChange} selected={this.props.selectedLang} name='Language:' values={LanguageValues}/>
                                <button className='btn new-btn'>New</button>
                            </div>
                        </div>
                        <RepoList userRepos={this.props.userRepos} />
                    </div>
                )}
            </div>
        )
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Repo);