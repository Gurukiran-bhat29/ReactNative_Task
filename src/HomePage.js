import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TumbNail from './TumbNailPage';

const HomePage = ({ refresh, showContent, info }) => {
  return (
    <View style={styles.Container}>
      <Text>MONDAY 21 NOVEMBER</Text>
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