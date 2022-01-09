import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, AppRegistry,Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Fontisto from "react-native-vector-icons/Fontisto";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './pages/home';
import Memories from './pages/memories';
import AntDesign from "react-native-vector-icons/AntDesign";
import { ModalPortal } from 'react-native-modals';
import MemoryVideos from "./pages/memoryVideos";
import MemoryImages from "./pages/memoryImages";
import MemoryVNs from "./pages/memoryVns";
import TextPage from "./pages/textpage";
import CopyBook from "./pages/copyBook";
import Notes from "./pages/notes";
import FlipBook from "./pages/flipbook";
import MysteryBox from "./pages/mysteryBox";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Divider, Icon, IconRegistry } from "@ui-kitten/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import {default as theme} from './custom-theme.json';

const App = () => {

  const [showBottomScreen, setShowBottomScreen] = useState(false);
  useEffect(
    ()=>{
      if(showBottomScreen == false){
        window.setTimeout(()=>{
          setShowBottomScreen(true);
        },5000);
      }
    }
    ,[]);
  


  const Stack = createNativeStackNavigator();
  return(
  <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />

        <ApplicationProvider 
          mapping={mapping}
          theme={{...lightTheme,...theme}}>


        {
          !showBottomScreen &&
          <View style={{flex:1}} style={{alignItems:"center", justifyContent:'center',height:'100%', width:'100%'}}>
          <Image resizeMode="contain" style={{flex:1, width:'80%', alignContent:'center',justifyContent:'center',alignSelf:'center'}} 
          source={require('./android/app/src/main/assets/LoadingImage.png')}
          >

          </Image>
          </View>
        }

        {showBottomScreen && 
        <>
          <View style={styles.page}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen options={{headerBackVisible:false}} name="Home" component={Home} />
              <Stack.Screen options={{headerBackVisible:false}} name="Memories" component={Memories} />
              <Stack.Screen name="MemoryVideos" component={MemoryVideos} />
              <Stack.Screen name="MemoryImages" component={MemoryImages} />
              <Stack.Screen name="MemoryVNs" component={MemoryVNs} />
              <Stack.Screen name="TextPage" component={TextPage} />
              <Stack.Screen name="Write Your Thoughts" component={CopyBook} />
              <Stack.Screen name="Notes" component={Notes} />
              <Stack.Screen options={{headerBackVisible:false}} name="FlipBook" component={FlipBook} />
              <Stack.Screen options={{headerBackVisible:false}} name="MysteryBox" component={MysteryBox} />
            </Stack.Navigator>
          </View>
          <View style={styles.columnEnd}>
            <BottomNav/>
          </View>
        </>
        }
      <ModalPortal />
    </ApplicationProvider>
  </NavigationContainer>

)};


const BottomNav = () =>{
  const [selectedIndex,setSelectedIndex] = useState(2);
  const navigation = useNavigation();

  const navList = ["Memories","Home","Home","MysteryBox","FlipBook"];
  return(
    <BottomNavigation
    selectedIndex={selectedIndex}
    onSelect={index => {console.log(index);setSelectedIndex(index);navigation.navigate(navList[index]);}}>

      <BottomNavigationTab 
        icon={           
        <Image resizeMode="contain" source={require('./src/public/images/Asset12.png')}></Image>
        }
        />
      

      <BottomNavigationTab 
        icon={
          <Image resizeMode="contain" source={require('./src/public/images/Asset15.png')}></Image>
        }    
      />

      <BottomNavigationTab 
        icon={
          <Image resizeMode="contain" source={require('./src/public/images/Asset13.png')}></Image>
        }    
      />      
      

      <BottomNavigationTab
        icon={
          <Image resizeMode="contain" source={require('./src/public/images/Asset14.png')}></Image>
        }
        />

      <BottomNavigationTab
        icon={          
        <Image resizeMode="contain" source={require('./src/public/images/Asset11.png')}></Image>
      }
      />
     </BottomNavigation>


  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  container:{
    flex:12,
    justifyContent:'flex-end',
    alignItems:'center'
  },  
  ViewRow:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center'
  },  
  page:{
    flex:10,
    paddingHorizontal:5
  },  
  row:{
    flex:1,
    display:'flex',
    flexDirection: 'row',
    alignItems:'flex-end'
  },
  text:{
    color:'white',
    fontSize:30,
    fontFamily:'Ubuntu-Bold'
  },
  columnEnd:{
    width:'100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
  },
  columnHeader:{
    width:'100%',
    flex:0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor:'blue'
  },
  icon:{
    textAlign:'center',
    paddingVertical:10,
    paddingHorizontal:10,
  },
  bottomNavigation: {
    marginVertical: 8,
  }
});

export default App;