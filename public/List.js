import React from 'react';
import Person from './Person';

export default class List extends React.Component {
	render() {
		return <ul>
				{ this.props.items.map(item => <Person key={item.name} {...item} />) }
			</ul>;
	}
}
List.propTypes = {
	items: React.PropTypes.arrayOf(
		React.PropTypes.shape({
      		name: React.PropTypes.string,
		})
	)
};