import { ApplicationProvider, Button , Input, Layout} from "@ui-kitten/components";
import React, {  useRef, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight } from "react-native"
import {Calendar} from 'react-native-calendars';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import moment from "moment";
const months = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const Notes = (props) => {

    const [markedDay, setMarkedDay] = useState({});
    const [showView, setShowView] = useState(0);
    const [writtenText, setWrittenText] = useState('');
    const x = useRef(null);

    const getSelectedDayEvents = date => {
        let markedDates = {};
        markedDates[date] = { selected: true, color: '#00B0BF', textColor: '#FFFFFF' };
        let serviceDate = moment(date);
        serviceDate = serviceDate.format("DD.MM.YYYY");
        setMarkedDay(markedDates)
    };

    const view = () => {
        if(showView == 0){
            return(
                <ScrollView>
        <Calendar

            style={styles.cal}
            // Initially visible month. Default = now
            current={'2022-01-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2030-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
                getSelectedDayEvents(day.dateString);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            markedDates={markedDay}
            scrollEnabled={true}

            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={direction => {
                if(direction == 'left')
                    return (<IonIcons name="arrow-back-circle-outline" size={40} color="black"></IonIcons>);
                else
                    return(<IonIcons name="arrow-forward-circle-outline" size={40} color="black"></IonIcons>);
            }}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={7}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={false}
            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={date => {
              return <Text style={styles.cal}>{ `${date.getFullYear()} ${months[date.getMonth()]}`}</Text>
        }}
        // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
        />

        <Button
            onPress={() => {setShowView(1)}}
            style={{margin:30}}
        >
            Ok
        </Button>

        </ScrollView>
            );
        }
        else
        return(

            <ScrollView>
            <Layout style={styles.container} level='4'>
            <Text>
              What's on your mind?
              </Text>
              <Input
                      style={styles.input}
                      placeholder="Write here..."
                      onChangeText={(text)=> setWrittenText(text)}
              />
              
            </Layout>
            <Text style={styles.textStyled}>
                  {writtenText}
              </Text>     
            </ScrollView>
    
        );
    }

    return(
        <>
        {view()}
        </>
    );
    
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        padding:20,
        marginTop:10,
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
  cal:{
      fontSize:20,
      color:'black',
      paddingTop:20
  },
  text:{
      paddingHorizontal:10,
      color:'black'
  },
  textStyled:{
      paddingHorizontal:10,
      color:'black',
      fontSize:30,
      fontFamily:'TheNautigal-Bold'
  }
});

export default Notes;
