import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const EmpDispButton = () => {
  return (
    <TouchableOpacity
      style={[styles.empButton, styles.nameBtnFlexBox]}
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <View style={styles.empImg}>
        <Image
          style={styles.empImgUrl}
          resizeMode="cover"
          source={require("../assets/emp-img-url4.png")}
        />
      </View>
      <View style={[styles.nameBtn, styles.nameBtnFlexBox]}>
        <Text style={styles.empName}>Yativ</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nameBtnFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  empImgUrl: {
    borderRadius: Border.br_6xl,
    width: 66,
    height: 66,
    overflow: "hidden",
  },
  empImg: {
    zIndex: 1,
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
    paddingVertical: Padding.p_6xs,
    justifyContent: "center",
    zIndex: 0,
    marginLeft: -28,
  },
  empButton: {
    alignSelf: "stretch",
  },
});

export default EmpDispButton;
