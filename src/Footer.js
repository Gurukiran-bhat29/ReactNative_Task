import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Footer = ({ refresh, info, customStyle, customLabelStyle }) => {
  return (
    <View style={[styles.subHeader, styles.paddingStyle, customStyle]}>
      <View style={[styles.logoContainer, customStyle]}>
        <Image
          style={styles.tumbNail}
          source={{
            uri: info?.logo
          }}
        />
        <View style={styles.paddingStyle}>
          <Text style={[styles.fontBold, customLabelStyle]}>{info.userName}</Text>
          <Text style={customLabelStyle}>{info.title}</Text>
        </View>
      </View>
      <View style={styles.refreshContainer}>
        <TouchableOpacity
          onPress={() => refresh()}
        >
          <Text style={styles.refresh}>REFRESH</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%'
  },
  tumbNail: {
    width: 50,
    height: 50
  },
  refreshContainer: {
    padding: '1%',
    paddingHorizontal: '2%',
    backgroundColor: '#99c2ff',
    borderRadius: 15,
  },
  refresh: {
    color: '#0066ff',
    fontWeight: 'bold'
  },
  paddingStyle: {
    padding: '3.5%',
  },
  fontBold: {
    fontWeight: 'bold',
    color: 'black'
  }
});

export default Footer;