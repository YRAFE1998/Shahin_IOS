import { Input, Layout, Text } from "@ui-kitten/components";
import React, { useEffect, useRef, useState } from "react"
import { SafeAreaView, StyleSheet, TextInput, TouchableHighlight } from "react-native"

const realText = " This is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real textThis is the fucking real text";
const CopyBook = (props) => {

    const [writtenText, setWrittenText] = useState("");
    const [index,setindex] = useState(0)
    const [text, setText] = useState('');
    const x = useRef(null);
    useEffect(()=>{
        console.log(x);
    },[x]);
    return(
        <>
        <Layout style={styles.container} level='4'>
          <Text>
            What's on your mind?
            </Text>
            <Input
                    ref={x}
                    style={styles.input}
                    onChangeText={text => {console.log("in");setText(realText.slice(0,index));setindex(index+1);}}
                    value={text}
                    placeholder="Write here..."
                    multiline={true}
                    numberOfLines={5}

            />
          </Layout>
            
        </>
  );
};
/*<TouchableHighlight onPress={()=> x.current.focus()}>
            <SafeAreaView style={{height:'100%'}}>

                <Text>
                    {text}
                </Text>
            </SafeAreaView>
            </TouchableHighlight>*/


const styles = StyleSheet.create({
  container:{
    borderRadius:20,
    padding:20,
    marginTop:10,
    height:300,
    marginHorizontal:10

  },
  input: {
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical:'top',
    alignItems:'flex-start',
    justifyContent:'flex-start'
    //transform: [{ translateY: -800 }]
  },
});

export default CopyBook;
