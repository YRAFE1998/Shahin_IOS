import { Card } from "@ui-kitten/components";
import React from "react";
import { FlatList, SafeAreaView, ScrollView, View, Text } from "react-native";
import VideoPlayer from "react-native-video-player";

const PlayVideo = (props) =>{
const data = [
{id:1,
name:"",
name_1:"Video",
time:"5"
},

];

return(
        <SafeAreaView>
            <FlatList data={data}
            keyExtractor={(item,index) =>`${index} ${item.time}` }
            renderItem={(item,index) => {
                return(
                    <ScrollView style={{marginTop:10}}>
                        <Card header={() => {
                            return(                        <View>
                            <Text>{item.name}</Text>
                        </View>);
                        }}>
                            <VideoPlayer 
                            video ={require('../src/public/images/video.mp4')}
                            videoWidth={1500}
                            videoHeight={1000}
                            thumbnail={require('../src/public/images/1.png')}
                            disableFullscreen={true}
                            ></VideoPlayer>
                        </Card>
                    </ScrollView>
                )
            }}
            />
        </SafeAreaView>
    );

}

export default PlayVideo;