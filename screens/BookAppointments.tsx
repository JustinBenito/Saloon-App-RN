import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Easing,
  SafeAreaView,
  Modal,
} from "react-native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";
import SelectTreatment from "../components/SelectTreatment";

const BookAppointments = ({ treatment }) => {
 
 
  const [visible, setVisible]=useState(true)
  const show=()=>setVisible(true)
  const hide=()=>{setVisible(false);setTimeout(()=>setModalVisible(false),500)}
  const [modalVisible, setModalVisible]=useState(true)


  const translate=useRef(new Animated.Value(300)).current

  const translateScroll=useRef(new Animated.Value(300)).current

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
        duration: 1000,
        delay: 300,
        easing: Easing.out(Easing.quad)
      }).start()
      
      Animated.timing(translateScroll,{
        toValue: 500,
        useNativeDriver: true,
        duration: 1000,
        delay: 100,
        easing: Easing.out(Easing.quad)
      }).start()
    }
      },[visible])
    
    console.log(translate, translateScroll)

 
  return (
    <SafeAreaView style={[styles.bookappointments, styles.iconLayout]}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => hide()}
        transparent
      >
         <Animated.View style={[styles.modalContainer,{transform: [{translateY: translate}]}]}>
          <View style={styles.modalContent}>
          <Animated.ScrollView
              style={[styles.scrollView,{transform: [{translateY: translateScroll}]}]}
              contentContainerStyle={styles.scrollViewContent}
            >
            <View style={styles.close}>
              <TouchableOpacity onPress={() => hide()}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.heading, styles.headingFlexBox]}>
              <Text style={[styles.empHeading, styles.empTypo]} numberOfLines={1}>
                Choose a treatment
              </Text>
            </View>

            <SelectTreatment treatment={"HairCut"} />
            <SelectTreatment treatment={"Saloon"} />
            <SelectTreatment treatment={"Cuts"} />
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
    maxHeight: "50%",
    borderTopRightRadius: 30,
  },
  scrollView: {
    maxHeight: 400, // Set a max height for the scroll view
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1, // Allow the content to grow within the scroll view
  },
  navbar: {
    backgroundColor: "#000",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",

  },
  bookappointments: {

    alignItems: "center",
  },
  selectEmployeeModalContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    height:"50%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  empTypo: {
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
  },
  nameFlexBox: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 11,
    height: 11,
  },
  close: {
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  empHeading: {
    fontSize: FontSize.size_lgi_5,
    lineHeight: 20,
    color: Color.colorBlack,
    textAlign: "right",
    fontFamily: FontFamily.interRegular,
  },
  heading: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameChild: {
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.bgColorPrimaryDark,
    width: 1,
    height: 3,
    top: -1,
    right: 102.5,
  },
  treatmentBtnInner: {
    top: 8,
    left: 102,
    zIndex: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  empName: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    zIndex: 0,
    fontFamily: FontFamily.interRegular,
  },
  textHere: {
    fontSize: FontSize.size_7xs,
    lineHeight: 11,
    justifyContent: "center",
    color: Color.textColorLight,
    textAlign: "left",
    display: "flex",
    flex: 1,
    fontFamily: FontFamily.interRegular,
    height: 11,
    alignItems: "center",
  },
  content: {
    top: -3,
    left: -1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    backgroundColor: Color.colorSandybrown,
    paddingHorizontal: Padding.p_6xs,
    position: "absolute",
    height: 11,
    paddingVertical: 0,
  },
  nameBtn: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_14xl,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_26xl,
    zIndex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    backgroundColor: Color.textColorLight,
  },
  nameBtn1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_14xl,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_26xl,
    zIndex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    backgroundColor: Color.textColorLight,
  },
  nameBtn2: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_14xl,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_26xl,
    zIndex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    backgroundColor: Color.textColorLight,
  },
  nameBtn3: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_14xl,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_26xl,
    zIndex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    backgroundColor: Color.textColorLight,
  },
  selectEmployeeModal: {
    borderTopLeftRadius: Border.br_10xl,
    borderTopRightRadius: Border.br_10xl,
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    height: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
});

export default BookAppointments;
