import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />

      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 50,
          fontWeight: "bold",
        }}
      >
        JoinUp
      </Text>

      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />

      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 20 }}
      />
    </View>
  );
};

export default HomeHeader;