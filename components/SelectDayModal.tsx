import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import {Calendar,CalendarList,Agenda} from 'react-native-calendars';
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SelectDayModal = () => {
  return (
<View style={styles.selectEmployeeModal}>
      <View style={styles.close}>
        <TouchableOpacity
          style={styles.vector}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.heading, styles.headingSpaceBlock]}>
        <Text style={styles.empHeading}>Pick a day</Text>
      </View>
      <View style={[styles.smallCalendar, styles.headingSpaceBlock]}>
      <Calendar
  onDayPress={day => {
    console.log('selected day', day);
  }}
/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingSpaceBlock: {
    borderRadius:100, 
    marginTop: 16,
    padding: Padding.p_3xs,
  },
  calendarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  typographyWrapperSpaceBlock: {
    padding: Padding.p_8xs,
    flexDirection: "row",
  },
  typographyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  headingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  calendarSpaceBlock: {
    padding: Padding.p_9xs,
    flexDirection: "row",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    width: 11,
    height: 11,
  },
  close: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  empHeading: {
    fontSize: FontSize.size_lgi_5,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "right",
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  typography1: {
    color: Color.text,
  },
  typography: {
    flexDirection: "row",
  },
  typographyWrapper: {
    width: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarDaySmallParent: {
    opacity: 0.7,
  },
  typographyWrapper4: {
    width: 22,
  },
  calendarDaySmall8: {
    borderRadius: Border.br_19xl,
    backgroundColor: Color.colorDeepskyblue,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
  },
  typography19: {
    color: Color.colorTomato_200,
  },
  calendarDaySmallGroup: {
    alignItems: "center",
  },
  calendarDaySmall38: {
    opacity: 0.3,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  smallCalendar: {
    alignSelf: "stretch",
    borderRadius:100, 
  },
  selectEmployeeModal: {
    borderTopLeftRadius: Border.br_10xl,
    borderTopRightRadius: Border.br_10xl,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    height: "100%",
    width: "100%",
    shadowOffset: {
      width: 1,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginTop: 100,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SelectDayModal;
