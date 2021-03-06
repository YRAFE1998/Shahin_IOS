import { ApplicationProvider, Button, Card } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { Image, TouchableOpacity, View } from "react-native";

const Sound = require('react-native-sound');

const dan = require('../src/public/images/danger.png');

const data = 
    [
    {
        sound:new Sound('aud1.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log(error)
            }
          }),
        image:require('../src/public/images/flowers.jpg')
    },
    {
        sound:new Sound('aud2.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log(error)
            }
          }),
        image:require('../src/public/images/mountain.jpg')
    },
    {
        sound:new Sound('aud1.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log(error)
            }
          }),
        image:require('../src/public/images/lovestory.jpg')
    }];

const MysteryBox = (props) =>{
    const [disabled, setDisabled] = useState(false);
    const [genratedMystery, setGeneratedMystery] = useState(0);
    const [dangerPressed, setDangerPressed] = useState(false);

    useEffect(()=>{
        const so = data[genratedMystery];
        so.sound.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          });
        setDisabled(true);
        window.setTimeout(()=>{
          setDisabled(false);
        },so.sound.getDuration()*1000);
    },[genratedMystery]);
    const handlePress = () =>{
        let rand = Math.floor(Math.random()*3);
        setDangerPressed(true);
        setGeneratedMystery(rand);
    }

    const button = dan;
    return(

        <View style={{height:'100%'}}>
            <Card style={{flex:1, alignItems:'center'}}>
                <Image source={data[genratedMystery].image} />
            </Card>
            <TouchableOpacity
                disabled={disabled}
                onPress={()=> handlePress()}
                style={{margin:10, flex:1}}
            >
                <Image
                source={button}
                style={{width:'100%', resizeMode:'contain'}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default MysteryBox