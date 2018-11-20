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
    selectValue(value){
        this.setState({
            selected:value
        });

    }
    render(){
        const optionClass = ['drpdown-opts'];
        if(this.state.show){
            optionClass.push('drpdown-shown');
        }
        const options = this.props.values.map((item, index) => {
            return (
                <ul>
                    <li key={index} onClick={() => this.selectValue(item)}>
                        {item}
                    </li>
                </ul>
                
            );
        });

        return(
            <div className='dropdown'>
                <button onClick={this.showValues} className='btn dropdown-btn'>{this.props.name}<strong>All</strong></button>
                <div className={optionClass.join(" ")}>
                    <div className='title'>Select {this.props.name}</div>
                    <ul>
                        {options}
                    </ul>
                </div>
                
            </div>
        );
    }
}
export default Dropdown