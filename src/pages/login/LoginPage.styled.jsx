import styled from "styled-components";

export const LoginPageStyle = styled.section`
  height: 100vh;
  color: ${({theme})=>theme.text.orangedark};
  font-weight: bold;
  font-size: medium;
`;
export const LoginStyle = styled.a`
  margin-top: 1em;
  text-decoration: underline;
  color: ${({theme})=>theme.text.orangedark};
`;
