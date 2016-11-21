import React, { Component } from 'react'
import ReactDom from 'react-dom'

class Conetent extends Component {
	handleChange(e){
		e.preventDefault()
		this.setState({
			name:e.target.value
		})
	}
	constructor (props) {
	    super(props)
	    this.state = { name:this.props.name }
	}
	render(){
		return (
			<div className="content">
				<input type="text" onChange={this.handleChange.bind(this)}/>
                <span>{this.state.name}</span>
			</div>
		)
	}
}
export default Conetent