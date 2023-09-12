import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SelectDay = () => {

  const [visible, setVisible]=useState(true)
  const show=()=>setVisible(true)
  const hide=()=>{setVisible(false);setTimeout(()=>setModalVisible(false),500)}
  const [modalVisible, setModalVisible]=useState(true)



  let items=[{name:"Yativ"},{name:"Yativ"}]

  const translate=useRef(new Animated.Value(500)).current

  const translateScroll=useRef(new Animated.Value(500)).current

  useEffect(()=>{
if(visible){

Animated.timing(translate,{
  toValue: 0,
  useNativeDriver: true,
  duration: 1000,
  delay: 100,
  easing: Easing.out(Easing.quad)
}).start()

Animated.timing(translateScroll,{
  toValue: 0,
  useNativeDriver: true,
  duration: 1000,
  delay: 700,
  easing: Easing.out(Easing.quad)
}).start()

}
else{
  Animated.timing(translate,{
    toValue: 500,
    useNativeDriver: true,
    duration: 2300,
    delay: 300,
    easing: Easing.out(Easing.quad)
  }).start()
  
  Animated.timing(translateScroll,{
    toValue: 500,
    useNativeDriver: true,
    duration: 2000,
    delay: 100,
    easing: Easing.out(Easing.quad)
  }).start()
}
  },[visible])




  return (
    <SafeAreaView style={[styles.iconLayout]}>
     <Modal
      visible={modalVisible}
      transparent
      onRequestClose={() => hide()}
      >
     <Animated.View style={[styles.modalContainer,{transform: [{translateY: translate}]}]}>
          <View style={styles.modalContent}>
          <Animated.ScrollView style={[styles.calendarContainer,,{transform: [{translateY: translateScroll}]}]}>
        <View style={styles.close}>
          <TouchableOpacity
            style={styles.vector}
            activeOpacity={0.2}
            onPress={() => {
              hide(); // Close the modal when the close button is pressed
            }}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.heading, styles.headingSpaceBlock]}>
            <Text style={styles.empHeading}>Pick a day</Text>
        </View>
        <View style={[styles.smallCalendar, styles.headingSpaceBlock]}>
          <Calendar
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
          />
        </View>
        </Animated.ScrollView>

          </View>
        </Animated.View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    
    justifyContent: "flex-end", // Align the modal at the bottom
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxHeight: "50%",
  },
  calendarContainer:{
    width: "100%",
    paddingVertical: 20,

  },
  modal:{
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  iconLayout: {
    overflow: "hidden",
  },
  selectDay: {
    backgroundColor: "#e3e3e3",
    flex: 1,
    alignItems: "center",
  },
  headingSpaceBlock: {
    borderRadius: 100,
    marginTop: 16,
    padding: Padding.p_3xs,
  },
  calendarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  typographyWrapperSpaceBlock: {
    padding: Padding.p_8xs,
    flexDirection: "row",
  },
  typographyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  calendarSpaceBlock: {
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    width: 11,
    height: 11,
  },
  close: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  empHeading: {
    fontSize: FontSize.size_lgi_5,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "right",
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  typography1: {
    color: Color.text,
  },
  typography: {
    flexDirection: "row",
  },
  typographyWrapper: {
    width: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarDaySmallParent: {
    opacity: 0.7,
  },
  typographyWrapper4: {
    width: 22,
  },
  calendarDaySmall8: {
    borderRadius: Border.br_19xl,
    backgroundColor: Color.colorDeepskyblue,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
  },
  typography19: {
    color: Color.colorTomato_200,
  },
  calendarDaySmallGroup: {
    alignItems: "center",
  },
  calendarDaySmall38: {
    opacity: 0.3,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  smallCalendar: {
    alignSelf: "stretch",
    borderRadius: 100,
  },
  selectEmployeeModal: {
    borderTopLeftRadius: Border.br_10xl,
    borderTopRightRadius: Border.br_10xl,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.8)",
height:"100%",
    width: "100%",
    shadowOffset: {
      width: 1,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: 0,
   
  },
});

export default SelectDay;
