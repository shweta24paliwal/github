import React, {Component} from 'react';
import './dropdown.css';

class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state ={
            selected:'All',
            show:false
        }
        this.showValues = this.showValues.bind(this);
    }
    showValues(){
        this.setState({
            show: !this.state.show
        });
    }
    render(){
        const optionClass = ['drpdown-opts'];
        if(this.state.show){
            optionClass.push('drpdown-shown');
        }
        const options = this.props.values.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                </li>
            );
        });

        return(
            <div className='dropdown'>
                <button onClick={this.showValues} className='btn dropdown-btn'>{this.props.name}<strong>All</strong></button>
                <ul className={optionClass.join(" ")}>
                    {options}
                </ul>
            </div>
        );
    }
}
export default Dropdown