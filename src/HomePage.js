import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import TumbNail from './TumbNailPage';
import { getCurrentDate } from './utils/helperUtils';

const HomePage = ({ refresh, showContent, info }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.date}>{getCurrentDate()}</Text>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderLabel}>Today</Text>
        <Text
          style={[
            styles.subHeaderLabel,
            styles.backgroundColor
          ]}
        >
          VS
        </Text>
      </View>
      <TumbNail
        flag={true}
        refresh={() => refresh()}
        showContent={() => showContent()}
        info={info}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: '10%',
    marginHorizontal: '7%'
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    fontSize: 13,
    fontWeight: '500',
    color: '#808080'
  },
  subHeaderLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  backgroundColor: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#bfbfbf'
  }
});

export default HomePage;