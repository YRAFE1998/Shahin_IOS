import { ApplicationProvider, Button, Card, Icon } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {  View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import TrackPlayer from "react-native-track-player";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Sound = require('react-native-sound');


const data = 
    [
        new Sound('aud.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log(error)
            }
          }),
          
        new Sound('aud3.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log(error)
            }
          })
    ]

const MemoryVNs = (props) =>{    
    const [sound,setSound] = useState(null);
    const [iconStatus, setIconStatus] =useState('pause');
    useEffect(()=>{
        setSound(data[Math.floor(Math.random()*2)]);
        
    },[]);
    useEffect(()=>{
        console.log(sound);
        if(!!sound){
            sound.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              });
            return () =>{
                sound.stop()
            }
        }
        
    },[sound]);


    const handlePause = () => {
        if(iconStatus == 'pause')
        {
            setIconStatus('play');
            sound.pause();
        }
        else{
            setIconStatus('pause');
            sound.play();
        }
    }
    return(
        <View style={styles.container}>

                <TouchableOpacity onPress={handlePause}>
                    <FontAwesome styles={styles.icon} name={iconStatus} color={'#538e8e'} size={80}/>    
                </TouchableOpacity>
                <Text>{!!sound && sound.getDuration()}</Text>
        </View>
        );

}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    icon:{
        textAlign:'center',
        paddingVertical:10,
        paddingHorizontal:10,
  }
});

export default MemoryVNs;