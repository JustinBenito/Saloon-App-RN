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
  const translateY = useRef(new Animated.Value(200)).current;
  const [modalVisible, setModalVisible] = useState(false);

  const [visible, setVisible]=useState(false)
  const show=()=>setVisible(true)
  const hide=()=>setVisible(false)

  useEffect(()=>{
show();
  },[])


  // useEffect(() => {
  //   if (modalVisible) {
  //     // Animate the modal to come from the bottom
  //     Animated.timing(translateY, {
  //       toValue: 500,
  //       duration: 1000,
  //       easing: Easing.ease,
  //       useNativeDriver: false,
  //     }).start();
  //   } else {
  //     // Animate the modal to go back to the bottom
  //     Animated.timing(translateY, {
  //       toValue: 50, // Adjust the value to hide it at the bottom
  //       duration: 1000,
  //       easing: Easing.ease,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  // }, [modalVisible]);

  // return (
  //   <SafeAreaView style={[styles.selectDay, styles.iconLayout]}>
  //     <Modal
  //     visible={visible}
  //     transparent={true}
  //     animationType="slide"
  //    onRequestClose={() => hide()}
  //     >
  //     <View
  //       style={[
  //         styles.selectEmployeeModal,
  //         // { transform: [{ translateY }] },
  //       ]}
  //       contentContainerStyle={styles.modal}
  //     >
  //       <View style={styles.modalContainer}>
        
  //       </View>
  //     </View>
  //     </Modal>
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView style={[styles.iconLayout]}>
      <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => hide()}
      transparent
      >
     <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          
          <ScrollView style={styles.calendarContainer}>
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
        </ScrollView>

          </View>
        </View>
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
    paddingVertical: 10,
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
