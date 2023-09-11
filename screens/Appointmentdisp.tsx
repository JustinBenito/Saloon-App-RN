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
                source={require("../assets/emp-img-url.png")}
              />
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    </View>

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
    fontSize: FontSize.size_3xs,
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
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  empNameParentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },

  employee: {
    fontSize: FontSize.size_xs,
    color: Color.colorSandybrown,
  },
  employeeWrapper: {
    paddingHorizontal: Padding.p_51xl,
    paddingVertical: 0,
    zIndex: 1,
    alignSelf: "stretch",
  },

  icon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },

  empImgUrl: {
    borderRadius: Border.br_6xl,
    width: 32,
    height: 32,
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

});

export default Appointmentdisp;
