import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmployeeSelectBtn from "../components/EmployeeSelectBtn";
import DadyDispButton from "../components/DadyDispButton";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Appointmentdispvariant = () => {
  return (
    <ScrollView
      style={[styles.appointmentdispvariant, styles.iconLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.appointmentdispvariantScrollViewContent}
    >
      <ScrollView
        style={[styles.bookingVariants, styles.clickHereBtnSpaceBlock]}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.bookingVariantsScrollViewContent}
      >
        <View style={[styles.pickAnEmployeeWrapper, styles.viewFlexBox]}>
          <Text style={styles.pickAnEmployee}>Pick an employee</Text>
        </View>
        <View
          style={[styles.pickAnEmployeeWrapper, styles.viewFlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <View style={styles.empImg}>
            <Image
              style={styles.empImgUrl}
              // resizeMode="cover"
              source={require("../assets/emp-img-url.png")}
            />
          </View>
          <View style={[styles.nameBtn, styles.nameShadowBox]}>
            <Text style={[styles.empName, styles.loremTypo]}>Yativ</Text>
          </View>
        </View>
        <View style={[styles.pickAnEmployeeWrapper, styles.viewFlexBox]}>
          <Text style={styles.pickAnEmployee}>Pick an employee</Text>
        </View>
        <EmployeeSelectBtn />
        <View style={[styles.pickAnEmployeeWrapper, styles.viewFlexBox]}>
          <Text style={styles.pickAnEmployee}>Pick an employee</Text>
        </View>
        <View style={styles.dayComponentParent}>
          <DadyDispButton onDayComponentPress={() => {}} />
          <Pressable style={styles.dayShadowBox}>
            <Text style={[styles.text, styles.textFlexBox]}>03/09/23</Text>
            <Text style={[styles.sunday, styles.textFlexBox]}>Sunday</Text>
          </Pressable>
          <Pressable style={styles.dayShadowBox}>
            <Text style={[styles.text, styles.textFlexBox]}>03/09/23</Text>
            <Text style={[styles.sunday, styles.textFlexBox]}>Sunday</Text>
          </Pressable>
          <Pressable style={styles.dayShadowBox}>
            <Text style={[styles.text, styles.textFlexBox]}>03/09/23</Text>
            <Text style={[styles.sunday, styles.textFlexBox]}>Sunday</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={[styles.endComponent, styles.alertTextFlexBox]}>
        <Text style={[styles.lorem, styles.loremTypo]}>lorem</Text>
        <View style={styles.endComponentChild} />
      </View>
      <View style={[styles.alertText, styles.alertTextFlexBox]}>
        <Text
          style={[styles.noAppointmentsLeft, styles.loremTypo]}
        >{`No appointments left for Yativ, To enter the waiting list
and receive an alert when an appointment becomes
available`}</Text>
      </View>
      <View style={[styles.clickHereBtn, styles.clickHereBtnSpaceBlock]}>
        <Pressable style={[styles.empNameWrapper, styles.nameShadowBox]}>
          <Text style={[styles.empName, styles.loremTypo]}>Click here</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#e3e3e3",
  },
  bookingVariantsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  appointmentdispvariantScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    
  },
  clickHereBtnSpaceBlock: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  nameShadowBox: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 40,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  loremTypo: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  textFlexBox: {
    lineHeight: 10,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  alertTextFlexBox: {
    paddingVertical: 0,
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  pickAnEmployee: {
    color: Color.colorBlack,
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  pickAnEmployeeWrapper: {
    alignSelf: "stretch",
  },
  empImgUrl: {
    // borderRadius: Border.br_6xl,
    width: 56,
    height: 56,
    overflow: "hidden",
  },
  empImg: {
    zIndex: 1,
    flexDirection: "row",
  },
  empName: {
    color: Color.colorDarkslategray_100,
  },
  nameBtn: {
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_6xs,
    zIndex: 0,

    marginLeft: -25,
    justifyContent: "center",
    borderRadius: Border.br_26xl,
  },
  text: {
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.interRegular,
    lineHeight: 10,
  },
  sunday: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    marginTop: 3,
  },
  dayShadowBox: {
    marginLeft: 10,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_4xs,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.textColorLight,
  },
  dayComponentParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bookingVariants: {
    height: 306,
    padding: Padding.p_3xs,
    maxHeight: 306,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.textColorLight,
  },
  lorem: {
    color: Color.colorBlack,
  },
  endComponentChild: {
    backgroundColor: Color.colorTomato_100,
    height: 4,
    marginLeft: 6,
    width: 25,
    overflow: "hidden",
  },
  endComponent: {
    paddingHorizontal: Padding.p_xs,
  },
  noAppointmentsLeft: {
    color: Color.colorGray,
    flex: 1,
  },
  alertText: {
    paddingHorizontal: Padding.p_26xl,
    justifyContent: "center",
  },
  empNameWrapper: {
    borderRadius: Border.br_8xl,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
  },
  clickHereBtn: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    borderRadius: Border.br_26xl,
    alignItems: "center",
    flexDirection: "row",
  },
  appointmentdispvariant: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.textColorLight,
    width: "100%",
  },
});

export default Appointmentdispvariant;
