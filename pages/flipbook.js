import React from 'react';
import FlipPage,{FlipPagePage} from 'react-native-flip-page';


import { StyleSheet, ImageBackground, Image, View} from 'react-native';
import { Text } from '@ui-kitten/components';

const FlipBook = (props) =>{
    
    return(
        <FlipPage >
          
          <FlipPagePage>
          <Image source={require("../src/public/images/mountain.jpg")} resizeMode="cover" style={styles.plainImage}>
            </Image>
          </FlipPagePage>
          <FlipPagePage >
            <View style={styles.container}>
          <ImageBackground source={require("../src/public/images/mountain.jpg")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Page 1 kwerhj wek hwirehligrweh ugwelkr gioewrh gklergu ewruig hierghio werhgwergi werur vhuiwer gueiuo herio guiorpuihriohveriou hkjrehv jnefhuvg uiofg heifn kljsdfh nkjsfdng iuoehg jerng uyihreug heruog iurhtg iuerntg oury8 ghoueryhjienfyb jsfg shbdn lesgyusgbfkjeruig</Text>
            </ImageBackground>
            </View>
          </FlipPagePage>
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/lovestory.jpg")} resizeMode="cover" style={styles.image}>
            </ImageBackground>
          </FlipPagePage>
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/lovestory.jpg")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Page 2</Text>
            </ImageBackground>
          </FlipPagePage>
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/flowers.jpg")} resizeMode="cover" style={styles.image}>
            </ImageBackground>
          </FlipPagePage>
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/flowers.jpg")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Page 3</Text>
            </ImageBackground>
          </FlipPagePage>
        </FlipPage>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:'center',
      alignItems:'center'
    },
    plainImage:{
      flex: 1,
      width:'100%',
      height:'100%',

    },  
    image: {
      width:'100%',
      flex: 1,
      justifyContent: "center",
      alignItems:'center',
      alignContent:'center',
      alignSelf:'center'
    },
    text: {
      flex:1,
      width:'100%',
      padding:10,
      color: "white",
      fontSize: 40,
      lineHeight: 50,
      textAlign: "center",
      height:'100%',
      alignItems:'center',
      alignContent:'center',
      alignSelf:'center',
      textAlignVertical:'center',
      backgroundColor: "#000000c0",
      fontFamily:'TheNautigal-Bold'

    },
    scrollview:{
        height:'100%',
        backgroundColor: "#000000c0",
    }
  });

export default FlipBook;