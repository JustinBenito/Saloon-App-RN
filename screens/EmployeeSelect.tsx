import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";
import EmpButton from "../components/EmpButton";

const EmployeeSelect = () => {
  return (
    <View style={[styles.employeeSelect, styles.iconLayout]}>
      <ScrollView
        style={styles.selectEmployeeModal}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.selectEmployeeModalContent}
      >
        <View style={styles.close}>
          <TouchableOpacity>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          </TouchableOpacity>
        </View>
        <View style={[styles.heading1, styles.empBtnsSpaceBlock]}>
          <Text style={[styles.linkPick, styles.empNameTypo]} numberOfLines={1}>
            Pick an employee
          </Text>
        </View>

        <EmpButton name={"Yativ"}/>
        <EmpButton name={"Orange"}/>
        <EmpButton name={"Yellow"}/>
        <EmpButton name={"Yativ"}/>
        <EmpButton name={"Orange"}/>
        <EmpButton name={"Yellow"}/>
        <EmpButton name={"Yativ"}/>
        <EmpButton name={"Orange"}/>
        <EmpButton name={"Yellow"}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#000",
  },
  selectEmployeeModalContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Color.textColorLight,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  empBtnsSpaceBlock: {
  marginTop: 16,
  alignItems: "center",
  flex: 1,
},
empNameTypo: {
  letterSpacing: 0,
  fontFamily: FontFamily.interRegular,
},
heading1FlexBox: {
  flexDirection: "row",
  alignItems: "center",
},
  vectorIcon: {
    width: 11,
    height: 11,
  },
  close: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
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
    alignSelf: "stretch",
  },
  empName: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  nameShadowBox: {
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 2,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_14xl,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_26xl,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -3,
    },
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.textColorLight,
  },
  empImgUrl: {
    borderRadius: Border.br_6xl,
    width: 66,
    height: 66,
    overflow: "hidden",
  },
  empImg: {
    marginLeft: -28,
    flexDirection: "row",
  },
  empButton: {
    alignItems: "center",
  },
  selectEmployeeModal: {
    borderTopLeftRadius: Border.br_10xl,
    borderTopRightRadius: Border.br_10xl,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 4,
    elevation: 4,
    marginTop: 250,
    shadowOpacity: 1,
    // shadowOffset: {
    //   width: 1,
    //   height: -5,
    // },
    height: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  employeeSelect: {
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#e3e3e3",
    width: "100%",
  },
});

export default EmployeeSelect;
