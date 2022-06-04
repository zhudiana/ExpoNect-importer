import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
import React from "react";
import Iconn from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

var { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image } = props;
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Icon
            name="favorite"
            size={18}
            style={{
              position: "absolute",
              right: 5,
              top: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: image ? image : "../../../../../assets/avocado.png" }}
      />
      <View style={styles.card} />

      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.price}> ${price}</Text>
      <Iconn
        name="ios-chatbubble-ellipses-sharp"
        size={25}
        style={styles.sendMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 10,
    // alignItems: "center",
    elevation: 8,
    backgroundColor: "gainsboro",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: 20,
    left: 5,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 9,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    // textAlign: "center",
  },
  price: {
    fontSize: 13,
    color: "black",
    marginTop: 10,
    fontWeight: "bold",
    bottom: 10,
  },
  sendMessage: {
    top: -40,
    left: 120,
  },
});

export default ProductCard;