import React from "react";
import { View, Text } from "react-native";



const pickupLines = [
    "Pickup Line 1","Pickup Line 2","Pickup Line 3"
];


const morningText = [
    "Morning Text 1", "Morning Text 2", "Morning Text 3"
]

const mission = [
    "Mission 1", "Mission 2", "Mission 3"
]
const TextPage = ({route}) =>{

    const text = ()=> {
        if(route.params.type==0){
            return morningText[route.params.id];
        }
        else if(route.params.type==1){
            return pickupLines[route.params.id];
        }
        else{
            return mission[route.params.id];
        }
    };


    return(
        <View>
            <Text>
                {text()}
            </Text>
        </View>
    )
}

export default TextPage;