import { Field, FieldProps } from "formik";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

export interface InputProps extends ChakraInputProps {
  name: string;
}

const Input = ({ name, ...props }: InputProps) => {
  return (
    <Field name={name}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => {
        return (
          <ChakraInput
            {...props}
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
          />
        );
      }}
    </Field>
  );
};

export default Input;
