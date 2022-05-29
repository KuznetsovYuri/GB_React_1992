
//             Компоненты на классах

// import React from "react"; 
//  export class Form extends React.Component {    Второй пример возможной записи

//  }

// import React, { Component } from "react";
//  export class Form extends Component {

//         state = {
//             name: 'gb',
//         };


//     render() {
//         return <div>hello, {this.state.name}</div>
//     }

//  }
//////////////////////////////////////////////////////////
//  import React, { Component } from "react";
//  export class Form extends Component {

//         state = {
//             name: 'gb',
//             count: 0
//         };
//     handleClick = () => {
//         this.setState({ 
//             count: this.state.count + 1 })
//     }

//     render() {
//         return (
//             <>
//             <div>hello, {this.state.count}</div>
//            <button onClick={this.handleClick}>click</button>
//            </>);

//     }

//  }
////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
export class Form extends Component {

    state = {
        name: 'gb',
        count: 0
    };
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <>
                <div>hello, {this.state.count}</div>
                <button onClick={this.handleClick}>click</button>

                {/* <p> Name: {this.state.name} </p> */}
                <p> Name: {this.props.name} </p> {/* читаем пропс */}
                <input type="text" onChange={this.handleChange} value={this.state.name} />
            </>
        );
    }

}