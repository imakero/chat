import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Link from "../components/link";
import Input from "../components/form/input";
import { login } from "../lib/api";
import { useRouter } from "next/router";

type Values = {
  username: string;
  password: string;
};

const Login = () => {
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
          password: "",
        }}
        onSubmit={async (values: Values, { setSubmitting, setFieldError }) => {
          if (await login(values)) {
            setSubmitting(false);
            router.push("/");
          } else {
            setFieldError("password", "Password and username did not match.");
            setFieldError("username", "Password and username did not match.");
          }
        }}
      >
        {({ errors }) => (
          <VStack as={Form} alignItems="start">
            <Heading mb={4}>Log in</Heading>

            <FormControl isInvalid={!!errors?.username}>
              <FormLabel>Username</FormLabel>
              <Input name="username" type="text" />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.password}>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
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
        )}
      </Formik>
    </Container>
  );
};

export default Login;
