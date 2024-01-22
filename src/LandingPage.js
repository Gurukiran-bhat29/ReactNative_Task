import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { generateTokenUrl, getContentUrl } from './utils/constant';
import HomePage from "./HomePage";
import MainPage from "./MainPage";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [fullContent, setFullContent] = useState(false);

  useEffect(() => {

    getContent();

  }, [])

  const getContent = async () => {
    try {
      const generateTokenData = {
        email: "gurukiranb92@gmail.com"
      };

      const generateTokenResponse = await fetch(generateTokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(generateTokenData)
      }).then(response => response.json());

      console.log("Generate Token Response", generateTokenResponse);

      // token needed for the next request
      const token = generateTokenResponse.token;

      // get content request
      const contentResponse = await fetch(getContentUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }).then(response => response.json());

      const content = contentResponse.content;
      const response = content.text;

      // Extract the text from Paragraph tag
      const matches = response.match(/<p>(.*?)<\/p>/gs);
      const paragraphs = matches ? matches.map(match => match.replace(/<\/?p>/g, '').trim()) : [];

      console.log("Get Anime Content Response:", title, paragraphs);

      const { thumbNailImage, mainImage, userName, title, subTitle, logo } = content;
      setInfo((prev) => ({
        ...prev,
        ['tumbnail']: thumbNailImage,
        ['mainImage']: mainImage,
        ['userName']: userName,
        ['title']: title,
        ['subTitle']: subTitle,
        ['paragraphs']: paragraphs,
        ['logo']: logo
      }))
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return null;
  }

  if (!fullContent) {
    return (
      <HomePage
        info={info}
        refresh={() => getContent()}
        showContent={() => setFullContent(!fullContent)}
      />
    )
  }

  return (
    <MainPage
      info={info}
      showContent={() => setFullContent(!fullContent)}
    />
  )
}

const styles = StyleSheet.create({
});

export default LandingPage;