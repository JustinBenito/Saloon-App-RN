import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import AppointmentDispBtn from "../components/AppointmentDispBtn";
import ClickButton from "../components/ClickButton";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Appointmentdisp = () => {
  return (
    <ScrollView style={[styles.appointmentdisp, styles.iconLayout]}>

      <View style={[styles.empButtonParent, styles.alertTextSpaceBlock]}>
        <AppointmentDispBtn />
        <TouchableOpacity style={[styles.empButton, styles.icon2FlexBox]}>
      
          <View style={[styles.treatmentWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.treatment}>Treatment</Text>
          </View>
          <View style={[styles.nameBtnWrapper, styles.icon2FlexBox]}>
            <View style={styles.nameShadowBox}>
              <View style={[styles.icon2, styles.icon2FlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <View style={styles.wrapperFlexBox}>
                <Text style={[styles.empName, styles.empNameTypo]}>
                  Haircut
                </Text>
              </View>
            </View>
          </View>
  
        </TouchableOpacity>
        <TouchableOpacity style={[styles.empButton, styles.icon2FlexBox]}>
          <View style={[styles.treatmentWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.treatment}>Day</Text>
          </View>
          <View style={[styles.nameBtnWrapper, styles.icon2FlexBox]}>
            <View style={styles.nameShadowBox}>
              <View style={[styles.icon2, styles.icon2FlexBox]}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <View style={styles.wrapperFlexBox}>
                <Text style={[styles.empName, styles.empNameTypo]}>
                  04/09, 2023
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.alertText, styles.icon2FlexBox]}>
        <Text
          style={[styles.noAppointmentsLeft, styles.empNameTypo]}
        >{`No appointments left for Yativ, To enter the waiting list
and receive an alert when an appointment becomes
available`}</Text>
      </View>
      <ClickButton />
 
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  navbar: {
    backgroundColor: "#000",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  alertTextSpaceBlock: {
    marginTop: 40,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  icon2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  empNameTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 23,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
  },
  treatment: {
    fontSize: FontSize.size_3xs,
    color: Color.colorSandybrown,
    textAlign: "center",
    lineHeight: 23,
    letterSpacing: 0,
    fontFamily: FontFamily.interRegular,
  },
  treatmentWrapper: {
    paddingHorizontal: Padding.p_51xl,
    zIndex: 1,
    paddingVertical: 0,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 9,
    height: 10,
  },
  icon2: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  empName: {
    color: Color.colorDarkslategray_100,
  },
  nameShadowBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_xs,
    height: 50,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_26xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  nameBtnWrapper: {
    zIndex: 0,
    marginTop: -10,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  empButton: {
    marginTop: 31,
    alignSelf: "stretch",
  },
  empButtonParent: {
    paddingHorizontal: 50,
    alignItems: "center",
  },
  noAppointmentsLeft: {
    color: Color.colorGray,
    flex: 1,
  },
  alertText: {
    paddingHorizontal: Padding.p_26xl,
    marginTop: 40,
    paddingVertical: 0,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  appointmentdisp: {
    height: "100%",
    // alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
  },
});

export default Appointmentdisp;
