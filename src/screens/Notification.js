import React from "react";

function Notification(props) {
  return <View>Notifications</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    marginTop: 60,
  },
  text1: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 16,
    position: "absolute",
  },
  back: {
    alignSelf: "flex-start",

    position: "absolute",

    left: 16,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 50,
  },
  filebox: {
    display: "flex",
    width: "90%",
    height: 70,
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 16,
    marginTop: 10,

    justifyContent: "center",
  },
  text2: {
    fontSize: 14,
    fontFamily: "CircularStd",
    color: colors.grey,
    marginTop: 10,
    left: 16,
  },
  colorbox: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: colors.lightyellow,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 10,
  },
  text4: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 10,
    color: colors.green,
  },
  text5: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: "CircularStd",
    marginLeft: 10,
  },
  text6: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 10,
    color: "red",
  },
});
