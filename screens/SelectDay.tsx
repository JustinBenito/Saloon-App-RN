import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SelectDayModal from "../components/SelectDayModal";
import { Color } from "../GlobalStyles";

const SelectDay = () => {
  return (
    <View style={[styles.selectDay, styles.iconLayout]}>
      <SelectDayModal />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#000",
  },
  iconLayout: {
    overflow: "hidden",
  },
  selectDay: {
    backgroundColor: Color.textColorLight,
    flex: 1,
    alignItems: "center",
  },
});

export default SelectDay;
