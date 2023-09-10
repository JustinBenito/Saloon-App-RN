import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding } from "../GlobalStyles";

type Navbar1Type = {
  style?: StyleProp<ViewStyle>;
};

const Navbar1 = ({ style }: Navbar1Type) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.navbar, style]}>
      <View style={styles.view}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/back-button1.png")}
          />
        </Pressable>
        <Text style={styles.heading}>Book an appointment</Text>
        <TouchableOpacity
          style={styles.navbutton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SelectDay")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/navbutton1.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: Color.colorBlack,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  backButton: {
    width: 25,
    height: 29,
  },
  heading: {
    fontSize: 19,
    letterSpacing: 1,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.textColorLight,
    textAlign: "left",
  },
  navbutton: {
    width: 29,
    height: 29,
  },
  view: {
    alignSelf: "stretch",
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    flexDirection: "row",
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Navbar1;
