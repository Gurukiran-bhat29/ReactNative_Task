import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import TumbNail from "./TumbNailPage";
import Footer from "./Footer";

const MainPage = ({ refresh, showContent, info }) => {
  return (
    <ScrollView>
      <TumbNail
        refresh={() => refresh()}
        showContent={() => showContent()}
        info={info}
      />
      <View style={styles.detailsContainer}>
        {info.paragraphs.map((paragraph, index) => {
          return (
            <Text
              style={styles.details}
              key={index}
            >
              {paragraph}
            </Text>
          )
        })}
        <Image
          style={styles.mainImage}
          source={{
            uri: info?.mainImage
          }}
        />
      </View>
      <Footer
        refresh={() => refresh()}
        customLabelStyle={styles.customLabelStyle}
        customStyle={styles.customStyle}
        info={info}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 500
  },
  detailsContainer: {
    borderTopWidth: 1,
    padding: 20,
    borderColor: '#cccccc'
  },
  details: {
    paddingBottom: 15,
    fontSize: 15
  },
  customStyle: {
    flexDirection: 'column',
    backgroundColor: '#bfbfbf',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customLabelStyle: {
    marginTop: 3,
    textAlign: 'center'
  }
});

export default MainPage;