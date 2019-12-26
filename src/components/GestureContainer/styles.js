import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 500px;
  padding-bottom: 25px;
  background: ${props => props.theme.postsContainerBackground};
  margin-top: 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.label};
  padding: 20px;
  font-weight: bold;
`;
