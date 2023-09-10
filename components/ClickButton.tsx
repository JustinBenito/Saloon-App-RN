import * as React from "react";
import { Pressable, Text, StyleSheet, View, Touchable, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ClickButton = () => {
  return (
    <View style={[styles.clickHereBtn, styles.clickHereBtnFlexBox]}>
      <TouchableOpacity style={[styles.empNameWrapper, styles.clickHereBtnFlexBox]}>
        <Text style={styles.empName}>Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  clickHereBtnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  empName: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 23,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  empNameWrapper: {
    borderRadius: Border.br_8xl,
    backgroundColor: Color.textColorLight,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
  },
  clickHereBtn: {
    alignSelf: "stretch",
    borderRadius: Border.br_26xl,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_10xs,
    marginTop: 40,
  },
});

export default ClickButton;
