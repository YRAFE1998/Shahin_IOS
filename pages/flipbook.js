import React from 'react';
import FlipPage,{FlipPagePage} from 'react-native-flip-page';


import { StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { Text } from '@ui-kitten/components';

const FlipBook = (props) =>{
    
    return(
        <FlipPage >
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/1.png")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Page 1 kwerhj wek hwirehligrweh ugwelkr gioewrh gklergu ewruig hierghio werhgwergi werur vhuiwer gueiuo herio guiorpuihriohveriou hkjrehv jnefhuvg uiofg heifn kljsdfh nkjsfdng iuoehg jerng uyihreug heruog iurhtg iuerntg oury8 ghoueryhjienfyb jsfg shbdn lesgyusgbfkjeruig</Text>
            </ImageBackground>
          </FlipPagePage>
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/2.png")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Page 2</Text>
            </ImageBackground>
          </FlipPagePage>
          <FlipPagePage>
          <ImageBackground source={require("../src/public/images/3.jpg")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Page 3</Text>
            </ImageBackground>
          </FlipPagePage>
        </FlipPage>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      padding:10,
      color: "white",
      fontSize: 40,
      lineHeight: 50,
      textAlign: "center",
      height:'100%',
      backgroundColor: "#000000c0",
      fontFamily:'TheNautigal-Bold'

    },
    scrollview:{
        height:'100%',
        backgroundColor: "#000000c0",
    }
  });

export default FlipBook;