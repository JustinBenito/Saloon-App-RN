const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";


import Navbar4 from "./components/Navbar4";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Navbar3 from "./components/Navbar3";
import Appointmentdispvariant from "./screens/Appointmentdispvariant";
import EmpButton from "./components/EmpButton";
import TreatmentBtn from "./components/TreatmentBtn";
import EmpButton1 from "./components/EmpButton1";
import Appointmentdisp from "./screens/Appointmentdisp";
import ModalComponent from "./screens/NewDay";
import SelectDay from "./screens/SelectDay";
import BookAppointments from "./screens/BookAppointments";
import EmployeeSelect from "./screens/EmployeeSelect";
import Navbar5 from "./components/Navbar5";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="EmployeeSelect"
              component={EmployeeSelect}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"ModalComponent"}/>, //3
              })}
            />
            <Stack.Screen
              name="ModalComponent"
              component={ModalComponent}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"BookAppointments"}/>, //3
              })}
            />
            <Stack.Screen
              name="Appointmentdispvariant"
              component={Appointmentdispvariant}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"EmployeeSelect"}/>, //4
              })}
            />
            <Stack.Screen
              name="Appointmentdisp"
              component={Appointmentdisp}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"Appointmentdispvariant"}/>, //og
              })}
            />
            <Stack.Screen
              name="SelectDay"
              component={SelectDay}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"Appointmentdisp"}/>, //1
              })}
            />
            <Stack.Screen
              name="BookAppointments"
              component={BookAppointments}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"SelectDay"}/>, //2
              })}
            />

            
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

{/* <Stack.Screen
              name="Navbar4"
              component={Navbar4}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"Screen"}/>, //4
              })}
            /> */}
            {/* <Stack.Screen
              name="Navbar"
              component={Navbar}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"EmployeeSelect"}/>, //original
              })}
            /> */}
            {/* <Stack.Screen
              name="Navbar1"
              component={Navbar1}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"Screen"}/>, //1
              })}
            />
            <Stack.Screen
              name="Navbar2"
              component={Navbar2}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"Screen"}/>, //2
              })}
            /> */}
            {/* <Stack.Screen
              name="Navbar3"
              component={Navbar3}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Navbar goto={"Screen"}/>, //3
              })}
            /> */}