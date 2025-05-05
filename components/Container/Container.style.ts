import styled from "styled-components";

export const Container = styled.div<{ $paddingTop?: string | null }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${({ $paddingTop }) => ($paddingTop ? $paddingTop : "80px")};
  background-color: #fff;
`;
