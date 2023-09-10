import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const EmpButton1 = () => {
  return (
    <View style={styles.nameBtnFlexBox}>
      <View style={[styles.nameBtn, styles.nameBtnFlexBox]}>
        <View style={styles.icon}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Text style={[styles.empName, styles.empNameTypo]}>Yativ</Text>
        <View style={[styles.employeeWrapper, styles.nameBtnFlexBox]}>
          <Text style={[styles.employee, styles.empNameTypo]}>Employee</Text>
        </View>
      </View>
      <View style={styles.empImg}>
        <Image
          style={styles.empImgUrl}
          resizeMode="cover"
          source={require("../assets/emp-img-url1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameBtnFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  empNameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 23,
    letterSpacing: 0,
  },
  vectorIcon: {
    width: 14,
    height: 15,
  },
  icon: {
    width: 15,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 2,
    paddingBottom: 0,
    zIndex: 0,
    justifyContent: "center",
    overflow: "hidden",
    height: 15,
  },
  empName: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    zIndex: 1,
  },
  employee: {
    fontSize: FontSize.size_3xs,
    color: Color.colorSandybrown,
  },
  employeeWrapper: {
    position: "absolute",
    top: -11,
    left: 252,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    zIndex: 2,
    justifyContent: "center",
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
    width: 396,
    height: 58,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_6xs,
    justifyContent: "space-between",
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
});

export default EmpButton1;
