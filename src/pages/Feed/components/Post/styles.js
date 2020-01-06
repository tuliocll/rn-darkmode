import styled from "styled-components/native";

export const PostContainer = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export const PostHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const PostFooterContainer = styled.View`
  flex-direction: row;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const UserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 10px;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.theme.feedPostTextColor};
`;

export const PostDescription = styled.Text`
  font-weight: 200;
  color: ${props => props.theme.feedPostTextColor};
`;
