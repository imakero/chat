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
import { useRouter } from "next/router";
import Input from "../components/form/input";
import Link from "../components/link";
import { register } from "../lib/api";

type Values = {
  username: string;
  email: string;
  password: string;
};

const Signup = () => {
  const router = useRouter();
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
          email: "",
          password: "",
        }}
        onSubmit={async (values: Values, { setSubmitting }) => {
          try {
            await register({ ...values });
            setSubmitting(false);
            router.push("/login");
          } catch (error) {}
        }}
      >
        <VStack as={Form} alignItems="start">
          <Heading mb={4}>Sign up</Heading>

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input name="username" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" />
          </FormControl>
          <Button type="submit" w="100%" mt={4} colorScheme="teal">
            Ok
          </Button>
          <Text>
            Already have an account? Go to the{" "}
            <Link href="/login" color="teal">
              login
            </Link>{" "}
            page.
          </Text>
        </VStack>
      </Formik>
    </Container>
  );
};

export default Signup;
