import React, { useEffect } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import Post from "./components/Post";

import { useStateValue } from "../../states/ThemeState";

const data = [
  {
    key: "1",
    url:
      "https://cdnp2.stackassets.com/d266074e6d32c9116aab88607fcbd97f939896fb/store/d22f1c81f037ce003d2ae2ac1264a21eb3667a66a4fabddd9d3509f19a47/sale_16031_primary_image_wide.jpg",
    user: "Tulio Calil",
    userImage: "https://i.pravatar.cc/35?u=1",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper id lectus eu lobortis. Curabitur a mi dui. Nullam aliquam neque eu leo aliquet ultrices.`
  },
  {
    key: "2",
    url:
      "https://images.adsttc.com/media/images/5bf2/16a3/08a5/e515/4e00/018b/newsletter/feature_image.jpg?1542592134",
    user: "Lorem Ipsum",
    userImage: "https://i.pravatar.cc/35?u=2",
    description: `adipiscing elit. Aliquam ullamcorper id lectus eu lobortis. Curabitur a mi dui. Nullam aliquam neque eu leo aliquet ultrices.`
  },
  {
    key: "3",
    url:
      "https://image.slidesharecdn.com/beautifullandscape-2-100605001842-phpapp01/95/beautiful-landscape-2-1-728.jpg?cb=1275697313",
    user: "Fulano Barbsa",
    userImage: "https://i.pravatar.cc/35?u=3",
    description: `Aliquam ullamcorper id lectus eu lobortis. Curabitur a mi dui. Nullam aliquam neque eu leo aliquet ultrices.`
  },
  {
    key: "4",
    url:
      "https://i.dailymail.co.uk/1s/2019/10/08/09/19432514-7549241-image-a-48_1570522382326.jpg",
    user: "Usuario Novo",
    userImage: "https://i.pravatar.cc/35?u=4",
    description: `Curabitur a mi dui. Nullam aliquam neque eu leo aliquet ultrices.`
  },
  {
    key: "5",
    url:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80",
    user: "Fulano Silva",
    userImage: "https://i.pravatar.cc/35?u=5",
    description: `amet, consectetur adipiscing elit. Aliquam ullamcorper id lectus eu lobortis. Curabitur a mi dui. Nullam aliquam neque eu leo aliquet ultrices.`
  }
];

export default function Feed({ navigation }) {
  const [state] = useStateValue();

  useEffect(() => {
    navigation.setParams({
      backgroundColor: state.theme.background,
      titleColor: state.theme.titleColor
    });
  }, [state.theme]);

  function renderItem({ item }) {
    return <Post item={item} />;
  }

  return (
    <Container>
      <FlatList data={data} renderItem={renderItem} />
    </Container>
  );
}
