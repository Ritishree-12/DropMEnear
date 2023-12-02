import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import ItemComponent from "./ItemComponent";
// import MapView, { Marker } from "react-native-maps";

const ChooseVehicle = () => {
  const snapPoints = useMemo(() => ["50%", "70%", "80%"], []);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Dala Auto",
      imgDetails: '13.2ftx6.9ftx5.9ft',
      capacity: 'capacity:900kg',
      weitage:'Small Pickup',
      itemDetails:'This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.',
      image:require('../../assets/choose2.png')
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Tata Ace",
      imgDetails: '13.2ftx6.9ftx5.9ft',
      capacity: 'capacity:900kg',
      weitage:'Medium Pickup',
      itemDetails:'This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.',
      image:require('../../assets/largeVeichle.png')
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e278",
      title: "Pickup",
      imgDetails: '13.2ftx6.9ftx5.9ft',
      capacity: 'capacity:900kg',
      weitage:'Large Pickup',
      itemDetails:'This vehicle has a large payload capacity of 3.5 tones approximately. capable of carrying construction goods,domestic goods and house/office shifting.',
      image:require('../../assets/choose3.png')
    },
  ];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#EE272E" : "transparent";
    const color = item.id === selectedId ? "white" : "#EE272E";

    return (
      <ItemComponent
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        region={{
          // Set the initial region coordinates here
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView> */}
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.text1}>Choose Vehicle</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
          <View style={styles.footer}>
            <View style={{flexDirection:'row',}}>
              <Text>Cash</Text>
              <Text>PromoCode</Text>
            </View>
            <TouchableOpacity
              style={styles.BookNow}
            >
              <Text style={styles.BookNowText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ChooseVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContent: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  text1: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  BookNow: {
    backgroundColor: "#EE272E",
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    margin: 8,
    width:340
  },
  BookNowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
