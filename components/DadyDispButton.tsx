import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

type DadyDispButtonType = {
  /** Action props */
  onDayComponentPress?: () => void;
};

const DadyDispButton = ({ onDayComponentPress }: DadyDispButtonType) => {
  return (
    <TouchableOpacity
      style={styles.dayComponent}
      activeOpacity={0.2}
      onPress={onDayComponentPress}
    >
      <Text style={[styles.text, styles.textFlexBox]}>03/09/23</Text>
      <Text style={[styles.sunday, styles.textFlexBox]}>Sunday</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 10,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.interRegular,
  },
  sunday: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    marginTop: 3,
  },
  dayComponent: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.textColorLight,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
  },
});

export default DadyDispButton;
