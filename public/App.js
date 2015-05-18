import React from 'react';
import List from './List';

export default class App extends React.Component {
	render() {
		return <div>
				<h2>{this.props.name}</h2>
				<List items={this.props.people} />
			</div>;
	}
}

App.propTypes = {
	name: React.PropTypes.string,
	people: React.PropTypes.arrayOf(
		React.PropTypes.shape({
      		name: React.PropTypes.string,
		})
	)
};