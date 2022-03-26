import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import chatRoomsData from "../assets/dummy-data/Users";
import UserItem from "../components/UserItem";

export default function UsersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <UserItem user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
