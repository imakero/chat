import NextLink from "next/link";
import { ChakraProps, Link as ChakraLink } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ChakraProps {
  href: string;
  children?: ReactNode;
}

const Link = ({ href, children, ...props }: Props) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
