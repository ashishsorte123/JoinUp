import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore, SortDirection } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import { ChatRoom } from "../src/models";
import { Message as MessageModal } from "../src/models";

export default function ChatRoomScreen() {
  const [messages, setMessages] = useState<MessageModal[]>([]);

  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);

  const route = useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    fetchChatRoom();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [chatRoom]);

  useEffect(() => {
    const subscription = DataStore.observe(MessageModal).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
      if (msg.model === MessageModal && msg.opType === "INSERT") {
        setMessages((existingMessage) => [msg.element, ...existingMessage]);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  console.log(chatRoom);

  const fetchChatRoom = async () => {
    if (!route.params?.id) {
      console.log("No chatroom id is provided");
      return;
    }
    const chatRoom = await DataStore.query(ChatRoom, route.params?.id);
    if (!chatRoom) {
      console.error("Couldn't find a chat room with this id");
    } else {
      setChatRoom(chatRoom);
    }
  };

  const fetchMessages = async () => {
    if (!chatRoom) {
      return;
    }
    const fetchedMessages = await DataStore.query(
      MessageModal,
      (message) => message.chatroomID("eq", chatRoom?.id),
      {
        sort: (message) => message.createdAt(SortDirection.DESCENDING),
      }
    );
    console.log(fetchedMessages);
    setMessages(fetchedMessages);
  };

  navigation.setOptions({ title: "Elon Musk" });

  if (!chatRoom) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput chatRoom={chatRoom} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
