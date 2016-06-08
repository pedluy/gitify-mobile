import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Constants from '../Utils/Constants';
import Routes from '../Navigation/Routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  }
});

class LoadingView extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loaded && nextProps.isLoggedIn) {
      this.props.navigator.replace(Routes.Notifications());
    } else if (nextProps.loaded && !nextProps.isLoggedIn) {
      this.props.navigator.replace(Routes.Dashboard());
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Setting up Gitify</Text>
        <Text style={styles.description}>GitHub Notifications{'\n'} in your pocket</Text>
      </View>
    );
  }
};


function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.get('token') !== null,
    loaded: state.settings.get('loaded'),
  };
};

export default connect(mapStateToProps, {})(LoadingView);
