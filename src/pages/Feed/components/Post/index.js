import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import {
  PostContainer,
  PostHeaderContainer,
  PostFooterContainer,
  PostImage,
  UserImage,
  UserName,
  PostDescription
} from "./styles";

import { useStateValue } from "../../../../states/ThemeState";

export default function Post({ item }) {
  const [state] = useStateValue();

  return (
    <PostContainer>
      <PostHeaderContainer>
        <UserImage
          source={{
            uri: item.userImage
          }}
        />
        <UserName>{item.user}</UserName>
      </PostHeaderContainer>
      <PostImage
        source={{
          uri: item.url
        }}
      />
      <PostFooterContainer>
        <Icon
          name="hearto"
          color={state.theme.feedPostTextColor}
          size={22}
          style={{ margin: 5 }}
        />
        <Icon
          name="message1"
          color={state.theme.feedPostTextColor}
          size={22}
          style={{ margin: 5 }}
        />
        <Icon
          name="sharealt"
          color={state.theme.feedPostTextColor}
          size={22}
          style={{ margin: 5 }}
        />
      </PostFooterContainer>
      <PostDescription>{item.description}</PostDescription>
    </PostContainer>
  );
}
