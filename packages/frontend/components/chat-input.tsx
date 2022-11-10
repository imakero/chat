import { Button, HStack } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import AutosizeTextarea from "../components/form/autosize-textarea";
import { sendMessage } from "../lib/api";

type Values = {
  message: string;
};

type Props = {
  onSend: () => void;
};

const ChatInput = ({ onSend }: Props) => {
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={async (
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        await sendMessage({ text: values.message });
        onSend();
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ submitForm }) => (
        <HStack as={Form} w="100%">
          <AutosizeTextarea
            name="message"
            maxH="150px"
            overflow="sroll"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                submitForm();
              }
            }}
          />
          <Button type="submit">Send</Button>
        </HStack>
      )}
    </Formik>
  );
};

export default ChatInput;
