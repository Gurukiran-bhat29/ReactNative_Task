import React, { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import HomePage from "./HomePage";
import MainPage from "./MainPage";
const { fetchData } = require('../src/utils/api');

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [fullContent, setFullContent] = useState(false);

  useEffect(() => {

    getContent();

  }, [])

  const getContent = async () => {
    const contentResponse = await fetchData();
    const content = contentResponse.content;
    const response = content.text;

    // Extract the text from Paragraph tag
    const matches = response.match(/<p>(.*?)<\/p>/gs);
    const paragraphs = matches ? matches.map(match => match.replace(/<\/?p>/g, '').trim()) : [];

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