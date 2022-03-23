import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  console.log(props);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 40,
        marginLeft: -30,
        padding: 5,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg",
        }}
        style={{ width: 40, height: 40, borderRadius: 25, marginBottom: 10 }}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          marginLeft: -35,
          marginBottom: 5,
        }}
      >
        {props.children}
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10, marginLeft: 50 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};

export default ChatRoomHeader;
