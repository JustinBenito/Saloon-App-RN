import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const TreatmentBtn = () => {
  return (
    <View style={[styles.treatmentBtn, styles.btnFlexBox]}>
      <View style={[styles.treatmentBtnInner, styles.btnPosition]}>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.nameBtn, styles.btnPosition]}>
        <Text style={styles.empName}>Yativ</Text>
      </View>
      <View style={[styles.content, styles.contentLayout]}>
        <Text style={[styles.textHere, styles.contentLayout]}>Text here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnPosition: {
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  contentLayout: {
    height: 11,
    alignItems: "center",
  },
  frameChild: {
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.bgColorPrimaryDark,
    width: 3,
    height: 3,
  },
  treatmentBtnInner: {
    top: 11,
    zIndex: 0,
  },
  empName: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 23,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  nameBtn: {
    top: 6,
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
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHere: {
    fontSize: FontSize.size_9xs,
    lineHeight: 16,
    color: Color.textColorLight,
    textAlign: "left",
    display: "flex",
    width: 18,
    fontFamily: FontFamily.interRegular,
  },
  content: {
    top: 0,
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    backgroundColor: Color.colorSandybrown,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    zIndex: 2,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    justifyContent: "center",
  },
  treatmentBtn: {
    justifyContent: "center",
  },
});

export default TreatmentBtn;
