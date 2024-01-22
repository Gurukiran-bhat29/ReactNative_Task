import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Footer from "./Footer";

const TumbNailPage = ({ showContent, refresh, flag, info }) => {

  const tumbNail = () => {
    return (
      <Image
        style={flag ? styles.mainImage : styles.mainImage2}
        source={{
          uri: info?.tumbnail
        }}
      />
    )
  }

  return (
    <View
      style={
        flag
          ? styles.borderShadow
          : null
      }
    >
      {!flag ? (
        tumbNail()
      ) : (
        <TouchableOpacity onPress={() => showContent()}>
          {tumbNail()}
        </TouchableOpacity>
      )}
      <Footer info={info} refresh={() => refresh()} />

      {!flag && (
        <View style={styles.subTitle}>
          <Text style={styles.update}>MAJOR UPDATE</Text>
          <Text style={styles.subTitleText}>
            {info.subTitle}
          </Text>
        </View>
      )}
      {!flag && (
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => showContent()}>
            <Text style={styles.close}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 400
  },
  mainImage2: {
    width: '100%',
    height: 450
  },
  tumbNail: {
    width: 50,
    height: 50
  },
  paddingStyle: {
    padding: '3.5%',
  },
  borderShadow: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#4d4d4d',
    elevation: 20,
    marginTop: '2%',
    backgroundColor: 'white'
  },
  subTitle: {
    width: '80%',
    position: 'absolute',
    top: 40,
    left: 10,
  },
  subTitleText: {
    color: '#f2f2f2',
    fontSize: 30,
    fontWeight: 'bold'
  },
  update: {
    color: '#cccccc'
  },
  closeContainer: {
    position: 'absolute',
    right: 15,
    top: 40,
  },
  close: {
    color: 'black',
    fontSize: 20,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#bfbfbf',
  }
});

export default TumbNailPage;