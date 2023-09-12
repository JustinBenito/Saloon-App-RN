import React, {useState, useEffect, useRef} from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const ModalComponent = () => {

    const [visible, setVisible]=useState(true)

    const hide=()=>{setVisible(false);setTimeout(()=>setModalVisible(false),1000)}
    const [modalVisible, setModalVisible]=useState(true)

    const translate=useRef(new Animated.Value(600)).current

    const translateScroll=useRef(new Animated.Value(600)).current
  
    useEffect(()=>{
  if(visible){
  Animated.timing(translate,{
    toValue: 0,
    useNativeDriver: true,
    duration: 500,
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
      toValue: 300,
      useNativeDriver: true,
      duration: 1000,
      delay: 500,
      easing: Easing.out(Easing.quad)
    }).start()
    
    Animated.timing(translateScroll,{
      toValue: 300,
      useNativeDriver: true,
      duration: 1000,
      delay: 100,
      easing: Easing.out(Easing.quad)
    }).start()
  }
    },[visible])


  return (
    <SafeAreaView style={styles.bg}>

    <Modal
      visible={modalVisible}
transparent
     onRequestClose={() => hide()}
    >
    <Animated.View style={[styles.modalContainer,{transform: [{translateY: translate}]}]}>
        <View style={styles.modalContent}>
        <Animated.ScrollView style={[styles.modal,{transform: [{translateY: translateScroll}]}]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => hide()} style={styles.closeButton}>
            <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.heading}>When is it ?</Text>
            <View style={styles.flexContainer}>
            <View style={[styles.imageContainer, {marginRight: 20}]}>
                <TouchableOpacity>
              <Image
          resizeMode="cover"
          source={require("../assets/mrng.jpeg")}
                style={styles.image}
              />
              </TouchableOpacity>
              <Text>Morning</Text>
            </View>
            <View style={[styles.imageContainer, {marginRight: 20}]}>
                <TouchableOpacity>
              <Image
          resizeMode="cover"
          source={require("../assets/eve.jpeg")}
                style={styles.image}
              />
              </TouchableOpacity>
              <Text>Evening</Text>
            </View>
            <View style={[styles.imageContainer]}>
                <TouchableOpacity>
              <Image
          resizeMode="cover"
          source={require("../assets/night.jpeg")}
                style={styles.image}
              />
              </TouchableOpacity>
              <Text>Night</Text>
            </View>
            </View>
          </View>
        </Animated.ScrollView>
        </View>
      </Animated.View>
    </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContent:{

      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      // maxHeight: "50%",
      borderTopRightRadius: 30,
 
  },
  heading:{
    fontSize: FontSize.size_lgi_5,
    color: Color.colorBlack,
    fontWeight: "bold",
    marginLeft: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
    vectorIcon: {
        width: 11,
        height: 11,
      },
    flexContainer:{
flexDirection: "row",
gap: 20,
alignItems:"stretch"
    },
    bg:{
backgroundColor: "#e3e3e3",
height: "100%"
    },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 20,
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
     // Make the modal take up half of the screen
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,

  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginBottom: 5,
  },
});

export default ModalComponent;
