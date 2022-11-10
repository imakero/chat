import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Link from "../components/link";
import Input from "../components/form/input";

type Values = {
  username: string;
  password: string;
};

const Login = () => {
  return (
    <Container
      maxW="sm"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values: Values) => console.log(values)}
      >
        <VStack as={Form} alignItems="start">
          <Heading mb={4}>Log in</Heading>

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input name="username" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" />
          </FormControl>
          <Button type="submit" w="100%" mt={4} colorScheme="teal">
            Ok
          </Button>
          <Text>
            Don&apos;t have an account? Go to the{" "}
            <Link href="/signup" color="teal">
              sign up
            </Link>{" "}
            page.
          </Text>
        </VStack>
      </Formik>
    </Container>
  );
};

export default Login;
