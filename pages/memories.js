import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Modal, ModalContent } from 'react-native-modals';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



const pickupLines = [
    "Pickup Line 1","Pickup Line 2","Pickup Line 3"
];


const morningTextList = [
    "Morning Text 1", "Morning Text 2", "Morning Text 3"
]

const mission = [
    "Mission 1", "Mission 2", "Mission 3"
]

const Memories = ({navigation}) =>{

    const [memoriesOpen, setMemoriesOpen] = useState(false);
    const [jarOpen, setJarOpen] = useState(false); 
    const [FrustratedOpen,setFrustratedOpen] = useState(false);
    const [MoodMessage, setMoodMessage] = useState("");
    const [moodModdal, setMoodModal] = useState(false);

    const [pickUpLinesOpen,setPickUpLinesOpen] = useState(false);
    const [pickUpLineText,setPickUpLineText] = useState("");



    useEffect(()=>{
        if(moodModdal)
            setJarOpen(false);  
            setFrustratedOpen(false);
    },[moodModdal])
    return(
        <>
        <View style={styles.row} >
            <TouchableOpacity onPress={() => setMemoriesOpen(true)}>
            <Image 
                resizeMode="contain"
                style={styles.tinyLogo}
                source={require('../src/public/images/Asset5.png')}  
            />
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => setJarOpen(true)}>
            <Image
            
                resizeMode="contain"
                style={styles.tinyLogo}
                source={require('../src/public/images/Asset4.png')}

            />
            </TouchableOpacity >
        </View>
        <View style={styles.row}>
            <TouchableOpacity onPress={()=>{setPickUpLinesOpen(true);setPickUpLineText(pickupLines[Math.floor(Math.random()*3)]);}}
            >

                <Image
                resizeMode="contain"
                style={styles.tinyLogo}
                source={require('../src/public/images/Asset7.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setPickUpLinesOpen(true);setPickUpLineText(morningTextList[Math.floor(Math.random()*3)]);}}

            >
            <Image
                resizeMode="contain"
                style={styles.tinyLogo}
                source={require('../src/public/images/Asset9.png')}
            />
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
        <TouchableOpacity onPress={()=>{setPickUpLinesOpen(true);setPickUpLineText(mission[Math.floor(Math.random()*3)]);}}
            >
                <Image
                resizeMode="contain"
            style={styles.tinyLogo}
            source={require('../src/public/images/Asset3.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("Write Your Thoughts")}}>
            <Image
                resizeMode="contain"
                style={styles.tinyLogo}
                source={require('../src/public/images/Asset8.png')}
            />
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Notes")}}>
        <Image                
            resizeMode="contain"
            style={styles.tinyLogo}
            source={require('../src/public/images/Asset10.png')}
        />
        </TouchableOpacity>
        <Image
            resizeMode="contain"
            style={styles.tinyLogo}
            source={require('../src/public/images/Asset6.png')}
        />
        </View>
        
    <Modal
        visible={memoriesOpen}
        onTouchOutside={() => {setMemoriesOpen(false)}}
    >
        <Text style={styles.title}>Memories</Text>
        <ModalContent style={{flexDirection:'row'}}>

        <TouchableOpacity onPress={()=>{setMemoriesOpen(false);navigation.navigate("MemoryImages")}}
        >
            <Image
                resizeMode="cover"
                style={styles.tinyLogo}
                source={require('../src/public/images/1.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setMemoriesOpen(false);navigation.navigate("MemoryVideos")}}>
            <Image
                resizeMode="cover"
                style={styles.tinyLogo}
                source={require('../src/public/images/2.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setMemoriesOpen(false);navigation.navigate("MemoryVNs")}}
        >
            <Image
                resizeMode="cover"
                style={styles.tinyLogo}
                source={require('../src/public/images/3.jpg')}
            />
        </TouchableOpacity>
        </ModalContent>
    </Modal>

    <Modal
            visible={jarOpen}
            onTouchOutside={() => {setJarOpen(false);}}
    >
        <ModalContent>
            <Text style={styles.title}>
                I am Feeling ______ right now
            </Text>
            <View style={{flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>    
                    <View style={styles.label, {flex:1}}>
                        <TouchableOpacity onPress={()=>{setMoodMessage("Happy Message");setMoodModal(true);}}>
                        <Entypo color="black" style={styles.icon} name="emoji-happy" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Happy</Text>
                    </View>

                    <View style={styles.label, {flex:1}}>
                        <TouchableOpacity onPress={()=>{setMoodMessage("Sad Message");setMoodModal(true);}}>
                            <Entypo color="black" style={styles.icon} name="emoji-sad" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Sad</Text>
                    </View>
                </View>

                <View  style={{flexDirection:'row'}}>
                    <View style={styles.label, {flex:1}}>
                        <TouchableOpacity
                        onPress={()=>{setJarOpen(false);setFrustratedOpen(true);}}
                        >
                        <MaterialCommunityIcons color="black" style={styles.icon} name="emoticon-angry-outline" size={40} />
                        </TouchableOpacity>
                            <Text style={styles.text}>Frustrated</Text>
                    </View>

                    <View style={styles.label,{flex:1}}>
                        
                        <TouchableOpacity onPress={()=>{setMoodMessage("Dismotivated Message");setMoodModal(true);}}>
                        <Entypo color="black" style={styles.icon} name="emoji-neutral" size={40} />
                        </TouchableOpacity>
                        <Text  style={styles.text}>Dismotivated</Text>
                    </View>
                </View>

                <View  style={{flexDirection:'row'}}>
                    <View style={styles.label, {flex:1}}>
                        
                        <TouchableOpacity onPress={()=>{setMoodMessage("Lonely Message");setMoodModal(true);}}>
                            <MaterialIcons color="black" style={styles.icon} name="emoji-people" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Lonely</Text>
                    </View>

                    <View style={styles.label, {flex:1}}>
                        <TouchableOpacity onPress={()=>{setMoodMessage("Excited Message");setMoodModal(true);}}>
                            <MaterialCommunityIcons color="black" style={styles.icon} name="emoticon-excited-outline" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Excited</Text>
                    </View>
                </View>
            </View>
        </ModalContent>
    </Modal>

    <Modal
    visible={FrustratedOpen}
    onTouchOutside={() => {setFrustratedOpen(false);}}
    >
        <ModalContent style={{flexDirection:'row'}}>
                    <View style={styles.label}>
                        <TouchableOpacity onPress={()=>{setMoodMessage("Frustrated Message");setMoodModal(true);}}>
                        <MaterialIcons color="black" style={styles.icon} name="emoji-people" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Frustrated</Text>
                    </View>

                    <View style={styles.label}>
                        <TouchableOpacity onPress={()=>{setMoodMessage("Frustrated Nek Message");setMoodModal(true);}}>
                        <MaterialCommunityIcons color="black" style={styles.icon} name="emoticon-excited-outline" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Frustrated Nek</Text>
                    </View>
        </ModalContent>
    </Modal>
    
    <Modal
    visible={moodModdal}
    onTouchOutside={() => {setMoodModal(false)}}
    >
        <ModalContent>
            <Text style={styles.textItalic}>
                {MoodMessage}
            </Text>
        </ModalContent>
    </Modal>

    <Modal
        visible={pickUpLinesOpen}
        onTouchOutside={()=>{setPickUpLinesOpen(false);}}
    >
        <ModalContent>
            <Text style={styles.textItalic}>
                {pickUpLineText}
            </Text>
        </ModalContent>
    </Modal>
    </>
    );
};
const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'black'
    },
    textItalic:{
        textAlign:'center',
        color:'black',
        fontFamily:'TheNautigal-Bold',
        fontSize:30
    },
    title:{
        marginHorizontal:'auto',
        textAlign:'center',
        margin:10,
        color:'black',
        fontSize:30
    },
    row:{
        
        padding:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        flex:1
    },
    tinyLogo: {
        marginHorizontal:5,
        width: 100,
        height:100,
        shadowColor: "#000",
        borderBottomWidth: 0,
        shadowOffset: {
	        width: 0,
	        height:10,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation:6
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
    	    width: 0,
    	    height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    icon:{
        textAlign:'center',
        paddingVertical:10,
        paddingHorizontal:10,
      },
      label:{
        textAlign:'center',
        marginHorizontal:10,
      }
  });



export default Memories;

