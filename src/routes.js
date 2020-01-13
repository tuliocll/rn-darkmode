import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from "react-native-vector-icons/AntDesign";

import HomePage from "./pages/Home";
import FeedPage from "./pages/Feed";

const Feed = createStackNavigator({
  index: {
    screen: FeedPage,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Feed",
        headerTintColor: navigation.getParam("titleColor", "#000"),
        headerStyle: {
          backgroundColor: navigation.getParam("backgroundColor", "#fff")
        }
      };
    }
  }
});
const Home = createStackNavigator(
  {
    index: {
      screen: HomePage
    }
  },
  { headerMode: null }
);
const Settings = createStackNavigator(
  {
    index: {
      screen: HomePage
    }
  },
  { headerMode: null }
);

const BottomTabs = createMaterialBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: <Icon name="home" size={25} color="#fff" />
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: <Icon name="user" size={25} color="#fff" />
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: <Icon name="setting" size={25} color="#fff" />
      }
    }
  },
  {
    labeled: false,
    barStyle: { backgroundColor: "#ff7142" }
  }
);

export default createAppContainer(BottomTabs);
