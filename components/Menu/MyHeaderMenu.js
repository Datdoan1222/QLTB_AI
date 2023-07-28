import React, { Component } from "react";

import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
  AsyncStorage,
  Text,
  TouchableHighlight,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Clipboard,
} from "react-native";

import {
  Container,
  Content,
  View,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Segment,
  Toast,
} from "native-base";

import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

const MyHeaderMenuComponent = () => {
  const [showMenu, setShowMenu] = React.useState(true);

  return (
    <View style={{}}>
      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={
          <TouchableOpacity onPress={() => setShowMenu(true)}>
            <Icon
              style={{ color: "#ffffff", fontSize: 25, marginRight: 5 }}
              name="md-more"
            />
          </TouchableOpacity>
        }
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </View>
  );
};

export default MyHeaderMenuComponent;
