import React,{useEffect, useRef,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  View,
  Modal,
} from "react-native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";
import EmpButton from "../components/EmpButton";

const EmployeeSelect = () => {

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


console.log("transform",translate)

  return (
    <SafeAreaView style={[styles.employeeSelect, styles.iconLayout]}>
      <Modal
      visible={modalVisible}
      transparent
      onRequestClose={() => hide()}
      >

      <Animated.View style={[styles.modalContainer,{transform: [{translateY: translate}]}]}>
          <View style={styles.modalContent}>
          <Animated.ScrollView
              style={[styles.scrollView,{transform: [{translateY: translateScroll}]}]}
              contentContainerStyle={styles.scrollViewContent}
            >
            <View style={styles.header}>
              <TouchableOpacity onPress={() => hide()}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </TouchableOpacity>
              
            </View>
            <View style={styles.text}>
            <Text style={styles.heading}>Pick an employee</Text>
            </View>
              {items.map((item, index) => (
                <EmpButton name={item.name} key={index}/>
              ))}
            </Animated.ScrollView>
          </View>
      </Animated.View>

      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text:{
    alignItems: "center",
  },
  modal:{
justifyContent: "flex-end",
  },
  selectEmployeeModalContent: {

    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  empBtnsSpaceBlock: {
    marginTop: 20,
  },
  empNameTypo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  close:{
flexDirection: "row",
justifyContent: 'flex-end',
  },
  closebtn: {
    top: 20,
    right: 20,
  },
  vectorIcon: {
    width: 10,
    height: 10,
  },
  selectEmployeeModal: {
    height: "100%",

  },
  empButton: {
    marginBottom: 10,
  },
  empImgUrl: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },
  empImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  employeeSelect: {

  },
  linkPick: {
    fontSize: FontSize.size_lgi_5,
    lineHeight: 20,
    color: Color.colorBlack,
    textAlign: "right",
  },
  heading1: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",

  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
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
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  heading: {
    fontSize: FontSize.size_lgi_5,
    color: Color.colorBlack,
    fontWeight: "bold",
    marginLeft: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  scrollView: {
    maxHeight: 400, // Set a max height for the scroll view
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1, // Allow the content to grow within the scroll view
  },
});

export default EmployeeSelect;
