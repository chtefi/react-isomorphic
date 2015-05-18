import React from 'react';

export default class Person extends React.Component {
	constructor() {
		super();
		this.state = { selected: false };
	}
	onClick() {
		this.setState({ selected: !this.state.selected })
	}
	render() {
		var style = {
			backgroundColor: (this.state.selected ? 'orange' : 'transparent')
		};
		return <li onClick={this.onClick.bind(this)} style={style}>{ this.props.name }</li>;
	}
}
Person.propTypes = {
	name: React.PropTypes.string
};