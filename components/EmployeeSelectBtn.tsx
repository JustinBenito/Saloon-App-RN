import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const EmployeeSelectBtn = () => {
  return (
    <View style={styles.bttn}>
      <TouchableOpacity>
      <View style={styles.frameParent}>
        <View style={[styles.textHereWrapper, styles.textFlexBox]}>
          <Text style={[styles.textHere, styles.empNameTypo]}>Text here</Text>
        </View>
        <View style={styles.nameBtnWrapper}>
          <View style={[styles.nameBtn, styles.textFlexBox]}>
            <Text style={[styles.empName, styles.empNameTypo]}>Yativ</Text>
          </View>
        </View>
      </View>
      <View style={styles.bttnChild} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  empNameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  textHere: {
    fontSize: FontSize.size_9xs,
    lineHeight: 16,
    color: Color.textColorLight,
    display: "flex",
    width: 18,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  textHereWrapper: {
    
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    width: 37,
    height: 11,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorBlack,
    zIndex: 1,
  },
  empName: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    lineHeight: 23,
    color: Color.colorDarkslategray_100,
  },
  nameBtn: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.textColorLight,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  nameBtnWrapper: {
    marginTop: -4,
    zIndex: 0,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    zIndex: 1,
    alignSelf: "stretch",
  },
  bttnChild: {
    position: "absolute",
    top: 11,
    left: 0,
    borderBottomLeftRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 7,
    height: 6,
    zIndex: 0,
    backgroundColor: Color.colorBlack,
  },
  bttn: {
    width: 96,
  },
});

export default EmployeeSelectBtn;
