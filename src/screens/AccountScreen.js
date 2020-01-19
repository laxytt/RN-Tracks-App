import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.content} forceInset={{ top: "always" }}>
      <Text style={styles.header}>Account</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    textAlign: "center",
    fontSize: 48
  }
});

export default AccountScreen;
