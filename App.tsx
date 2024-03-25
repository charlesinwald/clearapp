import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from './svgs/BackButton';
import {DateTime} from 'luxon';
import ApprovingIcon from './svgs/Approving';
import YouExchangedIcon from './svgs/YouExchanged';
import TransferCompleteIcon from './svgs/TransferComplete';

type ActivityItemProps = {
  iconName: string;
  status: string;
  amount: string;
  time: string;
};

const activitiesJSON: ActivityItemProps[] = [
  {
    iconName: 'approving',
    status: 'Approving',
    amount: '$100',
    time: '2023-03-24T10:00:00',
  },
  {
    iconName: 'exchanged',
    status: 'You Exchanged',
    amount: '$250',
    time: '2023-03-24T11:00:00',
  },
  {
    iconName: 'transfer_complete',
    status: 'Transfer Complete',
    amount: '$500',
    time: '2024-03-24T12:00:00',
  },
  {
    iconName: 'approving',
    status: 'Approving',
    amount: '$75',
    time: '2024-03-24T13:00:00',
  },
  {
    iconName: 'exchanged',
    status: 'You Exchanged',
    amount: '$200',
    time: '2024-03-24T14:00:00',
  },
  {
    iconName: 'transfer_complete',
    status: 'Transfer Complete',
    amount: '$350',
    time: '2024-03-24T15:00:00',
  },
];
const ActivityItem: React.FC<ActivityItemProps> = ({
  iconName,
  status,
  amount,
  time,
}) => {
  // Determine the text color based on the status
  const statusStyle = {
    ...styles.activityStatus,
    color:
      status === 'Approving' || status === 'Transfer Complete'
        ? '#02B134'
        : '#000',
  };

  const icon = (() => {
    switch (iconName) {
      case 'approving':
        return <ApprovingIcon />;
      case 'exchanged':
        return <YouExchangedIcon />;
      case 'transfer_complete':
        return <TransferCompleteIcon />;
      default:
        return <View />;
    }
  })();

  return (
    <View style={styles.activityItem}>
      {icon}
      <View style={styles.activityContent}>
        <Text style={statusStyle}>{status}</Text>
        <Text>{amount}</Text>
      </View>
      <Text style={styles.activityTime}>
        {DateTime.fromISO(time).toRelative()}
      </Text>
    </View>
  );
};

const ActivityScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8F79F0', '#333CFF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.header}>
        <TouchableOpacity>
          <BackButton />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My activity</Text>
        <View></View>
      </LinearGradient>
      <Text style={styles.myActivityText}>My Activity</Text>
      <ScrollView style={styles.activityList}>
        {activitiesJSON.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </ScrollView>
      <View style={styles.navBar}>{/* Navigation bar icons */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.09,
    textAlign: 'center',
  },
  headerLink: {
    color: 'blue',
  },
  myActivityText: {
    padding: 15,
    fontSize: 16,
    fontWeight: '700',
  },
  activityList: {
    // add your styles here
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  activityContent: {
    marginLeft: 10,
    flex: 1,
  },
  activityStatus: {
    fontWeight: 'bold',
  },
  activityTime: {
    color: 'grey',
  },
  navBar: {
    // add your styles for the navigation bar
  },
  // ... any other styles you need
});

export default ActivityScreen;
