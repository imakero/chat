import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Message } from "../lib/types";

type Props = {
  message: Message;
  userId: number;
};

const MessageBox = ({ message, userId }: Props) => {
  const timeStamp = new Date(message.postedAt).toLocaleString();
  const isUser = message.user.id === userId;
  return (
    <VStack
      bg={isUser ? "teal.600" : "pink.600"}
      borderRadius={8}
      px={3}
      py={2}
      maxW="90%"
      alignItems="start"
      color="white"
      alignSelf={isUser ? "end" : "start"}
    >
      <HStack spacing={2}>
        <Heading fontSize="lg">{message.user.username}</Heading>
        <Text fontSize="xs" color="gray.200">
          {timeStamp}
        </Text>
      </HStack>
      <Text>{message.text}</Text>
    </VStack>
  );
};

export default MessageBox;
