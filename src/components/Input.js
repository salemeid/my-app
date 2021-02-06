import React from 'react';


class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:'', beta:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

 
    handleChange(event) {    
        this.setState({value: event.target.value}); 
    }

    handleSubmit(event) {
        
        console.log(this.state.value);
        event.preventDefault(0);
    }

    handleClick() {
        this.setState({beta: this.state.value})
    }

    
    render() {
        
    return(
        <div>
        <form onSubmit= {this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={this.handleClick}/>
        </form>

        <p>The name is {this.state.beta}</p>
        </div>       
        
    )}
    

}

export default InputNumber;