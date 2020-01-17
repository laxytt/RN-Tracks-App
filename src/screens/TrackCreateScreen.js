// import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import * as Permissions from "expo-permissions";
import Map from "../components/Map";
import { watchPositionAsync, Accuracy } from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [permissionStatus, setPermissionStatus] = useState(null);

  const startWatching = async () => {
    const response = await Permissions.askAsync(Permissions.LOCATION);
    setPermissionStatus(response.status);

    await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
      location => {
        addLocation(location);
      }
    );
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3> Create a Track</Text>
      <Map />
      {permissionStatus === "denied" ? (
        <Text>Please enable location services</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
