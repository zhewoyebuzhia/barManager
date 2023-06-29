// In App.js in a new project

import * as React from "react";
import { Button, View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewOne } from "./view/ViewOne";
import { SignView } from "./view/Sign";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MainView } from "./view/Main";
import { NavigationBar } from "./components/NavigationBar";
import  BossMainPage  from "./view/BossMainPage";
import  FinancialsScreen  from "./view/FinancialsScreen";
import { View, StyleSheet, ScrollView } from 'react-native';
import ShoppingCartView from './views/ShoppingCartView';
import SubmitOrderView from './views/SubmitOrderView';
import MyOrderView from './views/MyOrderView';
import MineView from './views/MineView';
import SuggestView from './views/SuggestView';
import HandleEvaluationView from './views/HandleEvaluationView';
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <Text>Home Screen</Text>

        <Pressable
          style={(styles.button, { backgroundColor: "#faf2de" })}
          onPress={() => navigation.push("test")}
        >
          <FontAwesome name="home" size={26} style={{ paddingRight: 8 }} />
          <Text>go to detail</Text>
        </Pressable>

        <Button
          title="Go to Sign"
          onPress={() => navigation.navigate("sign")}
        />

        {/* TODO: this button will be deleted later, and navigation will be achived through sign in as boss*/}
        <Button
          title="Boss Main Page"
          onPress={() => navigation.navigate("Boss")}
        />

        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  );
}
const BossStack = createNativeStackNavigator();

function BossStackScreen() {
  return (
    <BossStack.Navigator initialRouteName="BossMain">
      <BossStack.Screen 
        name="BossMain" 
        component={BossMainPage}
        options={{ title: 'Bar Manager' }}
      />
      <BossStack.Screen 
        name="Financials" 
        component={FinancialsScreen} 
        options={{ title: 'Financial Management' }}
      /> 
      {/* {/* Other Boss related screens */}
    </BossStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Overview", backgroundColor: "transparent" }}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="test" component={ViewOne} />
        <Stack.Screen
          name="sign"
          component={SignView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Boss"
          component={BossStackScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    //    alignItems: 'center',
  },
  linearGradient: {
    height: 740,
  },
  button: {
    borderRadius: 10,
    width: 300,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  mainlinearGradient: {
    height: 825,
  },
  bar: {
    width: 380,
    height: 65,
    backgroundColor: "#C8BFDB",
    marginTop: 674,
    flexDirection: "row",
  },
});
