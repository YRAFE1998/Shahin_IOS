import { View } from "react-native-ui-lib";
import React from 'react';
import { View, StyleSheet } from 'react-native';


export const Row = (props) =>{

    const rowStyles = StyleSheet.create({ 
        row:{
            flex:props.columns
        }
    });

    return(
        <View styles={rowStyles.row}>
            {props.children}
        </View>
    );
}