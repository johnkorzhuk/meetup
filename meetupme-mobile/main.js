import Exponent from 'exponent'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native'

import { fetchMeetups } from './constants/api'

class App extends React.Component {
  static defaultProps = {
    fetchMeetups
  }

  state = {
    loading: false,
    meetups: []
  }

  async componentDidMount () {
    this.setState({ loading: true })
    const data = await this.props.fetchMeetups()
    this.setState({ loading: false, meetups: data.meetups })
  }

  render () {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Meetup app</Text>
        {
          this.state.meetups.map(({ title }, i) =>
            <Text key={i}>{title}</Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Exponent.registerRootComponent(App)
