import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const EmpButton = ({name}) => {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={() => {/* Add your onPress logic here */}}>
      <View style={styles.nameBtnFlexBox}>
        <View style={[styles.nameBtn, styles.nameBtnFlexBox]}>
          <Text style={styles.empName}>{name}</Text>
        </View>
        <View style={styles.empImg}>
          <Image
            style={styles.empImgUrl}
            resizeMode="cover"
            source={require("../assets/emp-img-url1.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nameBtnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  empName: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  nameBtn: {
    borderRadius: Border.br_26xl,
    borderColor: "rgba(0,0,0,0.15)",
    borderWidth: 1,
    backgroundColor: "#ffffff",
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
  },
  empImgUrl: {
    marginTop: 2,
    borderRadius: Border.br_6xl,
    width: 66,
    height: 66,
    overflow: "hidden",
  },
  empImg: {
    marginLeft: -28,
    marginTop: 2,
    flexDirection: "row",
  },
});

export default EmpButton;
