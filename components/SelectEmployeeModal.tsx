import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const SelectEmployeeModal = ({treatment}) => {
  return (
    <>
    

    <TouchableOpacity style={styles.headingFlexBox}>
        <View style={[styles.nameBtn, styles.nameFlexBox]}>
          <Text style={[styles.empName, styles.empTypo]}>{treatment}</Text>
          {/* Banner top left */}
           <View style={styles.treatmentBtnInner}>
          <View style={styles.frameChild} />
         </View>
          <View style={[styles.content, styles.nameFlexBox]}>
            <Text style={styles.textHere}>Text here</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
    // <ScrollView
    //   style={styles.selectEmployeeModal}
    //   showsVerticalScrollIndicator={true}
    //   showsHorizontalScrollIndicator={true}
    //   contentContainerStyle={styles.selectEmployeeModalContent}
    // >
    //   <View style={styles.close}>
    //     <Image
    //       style={styles.vectorIcon}
    //       resizeMode="cover"
    //       source={require("../assets/vector2.png")}
    //     />
    //   </View>
    //   <View style={[styles.heading, styles.headingFlexBox]}>
    //     <Text style={[styles.empHeading, styles.empTypo]} numberOfLines={1}>
    //       Choose a treatment
    //     </Text>
    //   </View>
    //   <Pressable style={styles.headingFlexBox}>
    //     <View style={styles.treatmentBtnInner}>
    //       <View style={styles.frameChild} />
    //     </View>
    //     <View style={[styles.nameBtn, styles.nameFlexBox]}>
    //       <Text style={[styles.empName, styles.empTypo]}>{treatment}</Text>
    //       {/* Banner top left */}
    //       <View style={[styles.content, styles.nameFlexBox]}>
    //         <Text style={styles.textHere}>Text here</Text>
    //       </View>
    //     </View>
    //   </Pressable>
    //   <Pressable style={styles.headingFlexBox}>
    //     <View style={styles.treatmentBtnInner}>
    //       <View style={styles.frameChild} />
    //     </View>
    //     <View style={[styles.nameBtn1, styles.nameFlexBox]}>
    //       <Text style={[styles.empName, styles.empTypo]}>Yativ</Text>
    //       <View style={[styles.content, styles.nameFlexBox]}>
    //         <Text style={styles.textHere}>Text here</Text>
    //       </View>
    //     </View>
    //   </Pressable>
    //   <Pressable style={styles.headingFlexBox}>
    //     <View style={styles.treatmentBtnInner}>
    //       <View style={styles.frameChild} />
    //     </View>
    //     <View style={[styles.nameBtn2, styles.nameFlexBox]}>
    //       <Text style={[styles.empName, styles.empTypo]}>Yativ</Text>
    //       <View style={[styles.content, styles.nameFlexBox]}>
    //         <Text style={styles.textHere}>Text here</Text>
    //       </View>
    //     </View>
    //   </Pressable>
    //   <Pressable style={styles.headingFlexBox}>
    //     <View style={styles.treatmentBtnInner}>
    //       <View style={styles.frameChild} />
    //     </View>
    //     <View style={[styles.nameBtn3, styles.nameFlexBox]}>
    //       <Text style={[styles.empName, styles.empTypo]}>Yativ</Text>
    //       <View style={[styles.content, styles.nameFlexBox]}>
    //         <Text style={styles.textHere}>Text here</Text>
    //       </View>
    //     </View>
    //   </Pressable>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectEmployeeModalContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headingFlexBox: {
    marginTop: 16,
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
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
  },
  selectEmployeeModal: {
    borderTopLeftRadius: Border.br_10xl,
    borderTopRightRadius: Border.br_10xl,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
    flex: 1,
    marginTop: 100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
  },
});

export default SelectEmployeeModal;
