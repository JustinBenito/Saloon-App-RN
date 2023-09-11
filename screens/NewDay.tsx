import React, {useState, useEffect} from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ModalComponent = () => {

    const [visible, setVisible]=useState(false)
    const show=()=>setVisible(true)
    const hide=()=>setVisible(false)

    useEffect(()=>{
show();
    },[])


  return (
    <SafeAreaView style={styles.bg}>

    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
     onRequestClose={() => hide()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
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
            <Text>Placeholder Text</Text>
            <View style={styles.flexContainer}>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
              <Image
          resizeMode="cover"
          source={require("../assets/mrng.jpeg")}
                style={styles.image}
              />
              </TouchableOpacity>
              <Text>Morning</Text>
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
              <Image
          resizeMode="cover"
          source={require("../assets/eve.jpeg")}
                style={styles.image}
              />
              </TouchableOpacity>
              <Text>Evening</Text>
            </View>
            <View style={styles.imageContainer}>
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
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    maxHeight: '50%', // Make the modal take up half of the screen
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
    marginRight: 20,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginBottom: 5,
  },
});

export default ModalComponent;
