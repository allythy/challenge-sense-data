import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/globa.js";

const Title = styled.h1`
  color: red;
`;
export function App() {
  return (
    <>
      <Title>OIOI</Title>
      <GlobalStyle />
    </>
  );
}
