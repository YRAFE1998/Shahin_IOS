import React, { useState } from "react";
import { SafeAreaView, ScrollView,View, Text } from "react-native";
import { Gallery } from 'react-native-gallery-view';
import ImageView from "react-native-image-viewing";

const images = [
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpGmKrfBFE90_MyomlXre9OJhLyjMvfGm5w&usqp=CAU"
  }, {
    uri: "https://st.depositphotos.com/1007995/1274/i/600/depositphotos_12746726-stock-photo-fashion-man-wearing- sunglasses-thinking.jpg"
  }, {
    uri: "https://i.pinimg.com/736x/36/fc/e9/36fce9ed325c3303d858b01257bd76c3.jpg"
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpGmKrfBFE90_MyomlXre9OJhLyjMvfGm5w&usqp=CAU"
  }, {
    uri: "https://st.depositphotos.com/1007995/1274/i/600/depositphotos_12746726-stock-photo-fashion-man-wearing- sunglasses-thinking.jpg"
  }, {
    uri: "https://i.pinimg.com/736x/36/fc/e9/36fce9ed325c3303d858b01257bd76c3.jpg"
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpGmKrfBFE90_MyomlXre9OJhLyjMvfGm5w&usqp=CAU"
  }, {
    uri: "https://st.depositphotos.com/1007995/1274/i/600/depositphotos_12746726-stock-photo-fashion-man-wearing- sunglasses-thinking.jpg"
  }, {
    uri: "https://i.pinimg.com/736x/36/fc/e9/36fce9ed325c3303d858b01257bd76c3.jpg"
  },
{
    uri:'../src/public/images/video.mp4'
}
];



const MemoryImages = ({ navigation, route, navigator }) =>{


  const [visible, setIsVisible] = useState(true);

    
    return(
        <SafeAreaView
      style={{
        flex: 1, padding:10
      }
    }>
      <ImageView
        images={[images[Math.floor(Math.random()*9)]]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => {navigation.goBack() ;setIsVisible(false);}}
      />
    </SafeAreaView>
    );
}

export default MemoryImages;