import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
} from "react-native";

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

export default function App() {
  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
      HEADER_MAX_HEIGHT + 5,
    ],
    extrapolate: "clamp",
  });
  const headerZindex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
    ],
    outputRange: [-20, -20, -20, 0],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "lightskyblue",
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            bottom: headerTitleBottom,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: 'white' }}>
            Oğuzhan Atasever
          </Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1, borderWidth: 1, width: "100%" }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor: "white",
            borderWidth: 3,
            overflow: "hidden",
            marginTop: profileImageMarginTop,
            marginLeft: 10,
          }}
        >
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
            }}
            source={require("./assets/pp.png")}
          />
        </Animated.View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 24, paddingLeft: 10 }}>
            Oğuzhan Atasever
          </Text>
        </View>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
        <Text style={{ height: 100 }}></Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
