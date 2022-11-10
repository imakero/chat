import {
  Textarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import React from "react";
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

export interface TextareaProps extends ChakraTextareaProps {
  name: string;
}

// eslint-disable-next-line react/display-name
const AutosizeTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <Field name={props.name}>
        {({ field: { value, onChange, onBlur } }: FieldProps) => (
          <Textarea
            minH="unset"
            overflow="hidden"
            w="100%"
            resize="none"
            ref={ref}
            minRows={1}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            as={ResizeTextarea}
            {...props}
          />
        )}
      </Field>
    );
  }
);

export default AutosizeTextarea;
