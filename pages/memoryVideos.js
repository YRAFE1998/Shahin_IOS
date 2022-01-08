import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Video from 'react-native-video';
import PlayVideo from "../components/playVideo";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from "@ui-kitten/components";
import VideoPlayer from "react-native-video-player";

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});


const videos = [require('../android/app/src/main/assets/vid1.mp4'),require('../android/app/src/main/assets/vid2.mp4')]

const MemoryVideos = (props) =>{
    
    return(
      <ScrollView>
      <VideoPlayer 
      video ={videos[Math.floor(Math.random()*2)]}
      videoWidth={1500}
      videoHeight={2000}
      autoplay={true} 
      thumbnail={require('../src/public/images/1.png')}
      disableFullscreen={false}
      ></VideoPlayer>
      </ScrollView>
    );
}

export default MemoryVideos;