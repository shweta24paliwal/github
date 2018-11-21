import React, {Component} from 'react';
import './Repo.css';
import {get} from "lodash";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

class RepoList extends Component{
    constructor(props) {
        super(props);   
    }

    render(){
      console.log('props', this.props);
      let allRepos = this.props.userRepos;

      if (this.props.selectedType !== 'All') {
        allRepos = allRepos.filter((item) => {
            if (this.props.selectedType === "Sources") {
                return !item['fork']
            }
            return item[this.props.selectedType.toLowerCase()]
        });
      }

      if (this.props.selectedLang !== 'All') {
        allRepos = allRepos.filter((item) => {
            let lang = item.language;
            if (lang) {
                lang = lang.toLowerCase();
                return lang === this.props.selectedLang.toLowerCase();
            } else {
                return false;
            }
        });
      }


      if (this.props.searchQuery) {
        allRepos = allRepos.filter((item) => {
            const name = item.name.toLowerCase();
            const q = this.props.searchQuery.toLowerCase();
            return name.search(q) >=0;
        });
      }

      
      const list = allRepos.map((item, i) => {
        const lang = get(item, 'language');  
        const updatedDate = new Date(get(item, 'updated_at'));
        const license = get(item, 'license.name');
        const forks = get(item, 'forks_count');
        const description = get(item, 'description');
        
        return (
            <li>
                <a target="_blank" href={get(item, 'svn_url')}>{get(item, 'name')}</a>
                {description && (<p>{description}</p>)}

                <div className="meta">
                    {lang && (<span><span className={`${lang} dot`}></span>{lang}</span>)}
                    {forks > 0 && (<span><i class="fas fa-code-branch"></i> {forks}</span>)}
                    {license && (<span><i class="fas fa-balance-scale"></i> {license}</span>)}
                    <span>Updated on {months[updatedDate.getMonth()-1]} {updatedDate.getDate()}</span>
                </div>
                
            </li>
        );
      });
      return (
        <div className='repo-data-container'>
            {allRepos.length === 0 ? (
               <div class='not-found'>
                   No Repository found :(
                </div>     
            ): (
                <ul class='repo'>
                     {list}
                </ul>
            )}
         </div>
      );
    }
 }

 export default RepoList;