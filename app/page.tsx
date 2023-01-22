"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hooder from "./Hooder";

function page() {
  return (
    <ChakraProvider>
      <Hooder />
    </ChakraProvider>
  );
}

export default page;
