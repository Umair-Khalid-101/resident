import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import Vector from "../Svgs/Vector";
import MunsTrashValet from "../Svgs/MunsTrashValet";
import { colors } from "../constans/colors";
import VectorMainPage from "../Svgs/VectorMainPage";
import MainPageMunsLogo from "../Svgs/MainPageMunsLogo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function WelcomePage(props) {
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parentcontainer}>
        <View style={styles.container1}>
          <ImageBackground
            source={require("../../assets/Dust.png")}
            style={styles.dust}
          >
            <View style={styles.logo}>
              <Vector />
              <View style={styles.logotext}>
                <MunsTrashValet />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View style={styles.bannertext}>
                <View style={styles.secondtext}>
                  {loaded ? <Text style={styles.hitext}>Hello There</Text> : ""}
                </View>
                {loaded ? (
                  <Text style={styles.welcometext}>Welcome to Munsapp!</Text>
                ) : (
                  ""
                )}
              </View>
              <Image
                source={require("../../assets/man.png")}
                style={styles.man}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container2}>
          <View style={styles.parent}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                backgroundColor: colors.lightgreen,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginRight: 15,
              }}
            >
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={24}
                color={colors.green}
              />
            </View>
            <Text style={styles.description} numberOfLines={3}>
              Munsapp help residents with daily notifications and reminders, so
              they don’t miss their scheduled pick up time from our valets
            </Text>
          </View>
        </View>
        {loaded ? (
          <Text style={styles.recentnoti}>Recent Notifications</Text>
        ) : (
          ""
        )}
      </View>
    </SafeAreaView>
  );
}

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    left: 40,
    top: 20,
  },
  logotext: {
    marginTop: 10,
  },
  bannertext: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  parentcontainer: {
    marginTop: 50,
  },
  container1: {
    width: "90%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
    elevation: 1,
  },
  container2: {
    width: "90%",
    height: 120,
    backgroundColor: "white",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    elevation: 1,
  },

  dust: {
    width: "100%",
    height: "100%",
  },

  man: {
    width: 70,
    height: 90,

    marginLeft: 60,
  },
  hitext: {
    fontSize: 24,
    fontFamily: "CircularStd-Bold",
    color: "black",
    marginTop: 15,
  },

  welcometext: {
    fontSize: 14,
    left: 10,
    fontFamily: "CircularStd",
    color: colors.grey,
  },

  parent: {
    display: "flex",
    left: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  description: {
    fontSize: 12,
    fontFamily: "CircularStd",
    flexWrap: "wrap",
    width: "80%",
    lineHeight: 15,
  },
  recentnoti: {
    fontSize: 18,
    fontFamily: "CircularStd-Bold",

    marginTop: 15,
    marginLeft: 10,
  },
});
