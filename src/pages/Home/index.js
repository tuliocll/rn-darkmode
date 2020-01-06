import React, { useState, useEffect } from "react";
import { FlatList, Switch, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileImage,
  ProfileName,
  ProfileNick,
  CountText,
  FollowButton,
  FollowButtonText,
  Label,
  ButtonsContainer,
  CountsContainer,
  CountContainer,
  PostImage
} from "./styles";

import { useStateValue } from "../../states/ThemeState";

const images = [
  {
    key: "1",
    url:
      "https://cdnp2.stackassets.com/d266074e6d32c9116aab88607fcbd97f939896fb/store/d22f1c81f037ce003d2ae2ac1264a21eb3667a66a4fabddd9d3509f19a47/sale_16031_primary_image_wide.jpg"
  },
  {
    key: "2",
    url:
      "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/newsletter/feature_image.jpg?1542592134"
  },
  {
    key: "3",
    url:
      "https://image.slidesharecdn.com/beautifullandscape-2-100605001842-phpapp01/95/beautiful-landscape-2-1-728.jpg?cb=1275697313"
  },
  {
    key: "4",
    url:
      "https://i.dailymail.co.uk/1s/2019/10/08/09/19432514-7549241-image-a-48_1570522382326.jpg"
  },
  {
    key: "5",
    url:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    key: "6",
    url: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg"
  },
  {
    key: "7",
    url:
      "https://image.freepik.com/fotos-gratis/estrada-de-asfalto-natural-da-montanha-landscape-empty-na-ilha-de-corfu_85672-1221.jpg"
  },
  {
    key: "8",
    url: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg"
  },
  {
    key: "9",
    url:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

export default function Home() {
  const [darkmode, setDarkmode] = useState(false);
  const [, dispach] = useStateValue();

  useEffect(() => {
    async function getInitialState() {
      const state = await AsyncStorage.getItem("DarkModeKey");
      if (state === "true") {
        setDarkmode(true);
        return;
      }

      setDarkmode(false);
    }

    getInitialState();
  }, []);

  function renderItem({ item }) {
    return <PostImage source={{ uri: item.url }} />;
  }

  function handleChange() {
    dispach({
      type: !darkmode ? "enableDarkMode" : "disableDarkMode"
    });
    setDarkmode(!darkmode);
  }

  return (
    <Container>
      <Switch
        value={darkmode}
        onValueChange={handleChange}
        thumbColor="#424242"
        trackColor="#292929"
      />
      <ProfileContainer>
        <ProfileImage
          source={{
            uri: "https://api.adorable.io/avatars/285/abott@adorable.png"
          }}
        />
        <ProfileInfoContainer>
          <ProfileName>Tulio Calil</ProfileName>
          <ProfileNick>tuliocll</ProfileNick>
          <ButtonsContainer>
            <FollowButton onPress={() => console.log("click")}>
              <FollowButtonText>Follow</FollowButtonText>
            </FollowButton>

            <FollowButton onPress={() => console.log("click")}>
              <FollowButtonText>
                <Icon name="message1" />
              </FollowButtonText>
            </FollowButton>
          </ButtonsContainer>
        </ProfileInfoContainer>
      </ProfileContainer>

      <CountsContainer>
        <CountContainer>
          <CountText>567</CountText>
          <Label>Photos</Label>
        </CountContainer>

        <CountContainer>
          <CountText>10k</CountText>
          <Label>Followers</Label>
        </CountContainer>

        <CountContainer>
          <CountText>413</CountText>
          <Label>Following</Label>
        </CountContainer>
      </CountsContainer>

      <FlatList
        data={images}
        renderItem={renderItem}
        style={{ flex: 1, marginTop: 10 }}
        contentContainerStyle={{
          alignItems: "center"
        }}
        numColumns={3}
      />
    </Container>
  );
}
