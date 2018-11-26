import React, { Component } from 'react';
import { Notifications, Permissions } from 'expo';
import { Button, Text } from 'react-native';
import { Container } from './Layout';

class NotificationsExample extends Component {
  async componentDidMount() {
    const res = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    console.log(res);
  }

  notify = async (time = 1) => {
    const localNotification = {
      title: 'Notification!',
      body: 'Notification body!'
    }
    const schedulingOptions = {
      time: (new Date().getTime()) + time,
    }

    Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
  }

  notifyNow = async () => {
    Notifications.presentLocalNotificationAsync({
      title: 'Notification Now!',
      body: 'Notification Body'
    })
  }

  render() {
    return (
      <Container>
        <Button title="Notify Me Immediately" onPress={this.notifyNow} />
        <Button title="Notify Me in 5 Seconds" onPress={() => this.notify(2000)} />
      </Container>
    );
  }
}

export default NotificationsExample;