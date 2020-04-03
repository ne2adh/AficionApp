import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
    ActivityIndicator
} from 'react-native';
import {containers} from '../config/styles';
import PeopleList from '../components/PeopleList';
import { connect } from 'react-redux';
import { fetchPeople } from '../redux/actions/peopleActions';

class MainScreen extends Component {
 
      componentDidMount() {
		  console.log('ingreso fetchpeo');        
        this.props.fetchPeople();
      }
    
      render() {
        let content = <PeopleList people={this.props.randomPeople.people} />;
        if (this.props.randomPeople.isFetching) {
          content = <ActivityIndicator size="large" />;
        }
        return (
			<View style={containers.container}>
				<Text>HOLAS</Text>
				{content}
			</View>
		);
      }
}

MainScreen.propTypes ={
    fetchPeople: PropTypes.func.isRequired,
	randomPeople: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        randomPeople: state
    };
}

export default connect(mapStateToProps, { fetchPeople })(MainScreen);