import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, Touchable, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const AppointmentDispBtn = () => {
  return (
    <View style={[styles.empButton, styles.iconFlexBox]}>
      <View style={[styles.employeeWrapper, styles.empNameParentFlexBox]}>
        <Text style={[styles.employee, styles.empNameTypo]}>Employee</Text>
      </View>
      <TouchableOpacity style={[styles.nameBtnWrapper, styles.iconFlexBox]}>
        <View style={styles.nameBtn}>
          <View style={[styles.icon, styles.iconFlexBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={styles.empNameParentFlexBox}>
            <Text style={[styles.empName, styles.empNameTypo]}>Yativ</Text>
            <Pressable style={styles.empImg}>
              <Image
                style={styles.empImgUrl}
                resizeMode="cover"
                source={require("../assets/emp-img-url2.png")}
              />
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  empNameParentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  empNameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    lineHeight: 23,
    letterSpacing: 0,
  },
  employee: {
    fontSize: FontSize.size_3xs,
    color: Color.colorSandybrown,
  },
  employeeWrapper: {
    paddingHorizontal: Padding.p_51xl,
    paddingVertical: 0,
    zIndex: 1,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 9,
    height: 10,
  },
  icon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  empName: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
  },
  empImgUrl: {
    borderRadius: Border.br_6xl,
    width: 47,
    height: 47,
    overflow: "hidden",
  },
  empImg: {
    marginLeft: 12,
    flexDirection: "row",
  },
  nameBtn: {
    flex: 1,
    borderRadius: Border.br_26xl,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    height: 51,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_6xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  nameBtnWrapper: {
    zIndex: 0,
    marginTop: -10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  empButton: {
    alignSelf: "stretch",
  },
});

export default AppointmentDispBtn;
