import { l } from "i18n-js"
import { useEffect } from "react";
import { useState } from "react"
import { View } from "react-native-ui-lib";
import { Icon } from "react-native-vector-icons/icon";

export const Footer = (props) =>{
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() =>{

    },[currentPage]);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }  
    });

    return(
        <View styles={styles.container}>
            <Row columns="5">
            <Column width="1">
                <Icon name="heart"/>
            </Column>
            <Column width="1">
                <Icon name="" />
            </Column>
            <Column width="1">
            </Column>
            </Row>
        </View>
    );

    
}