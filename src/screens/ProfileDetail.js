import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const ProfileDetail = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <ImageBackground
        source={require("./assets/photo2.png")}
        style={{
          height: 0.5 * h,
          position: 'relative', // 確保內部元素使用絕對定位
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
            zIndex: 10, // 確保這個視圖在最上層
            position: 'absolute',
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image
              source={require("./assets/icons-back-light.png")}
              style={{ width: 20, height: 20 }}
            
            />
          </TouchableOpacity>
          <Image
            source={require("./assets/filter.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginTop: 0.17 * h,
            zIndex: 0, // 將這個視圖放在底層
          }}
        >
          <Image
            source={require("./assets/avatar.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text
            style={{
              fontSize: 26,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
              marginTop: 20,
            }}
          >
            Alexio Morales
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Montserrat_400Regular",
              color: "#FFF",
            }}
          >
            128k followers
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#FFF",
          marginTop: -50,
          borderRadius: 50,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 18,
            fontFamily: "Montserrat_600SemiBold",
            marginTop: 30,
          }}
        >
          Photos & Videos
        </Text>
        <Text
          style={{
            color: "#998FA2",
            fontSize: 18,
            fontFamily: "Montserrat_400Regular",
          }}
        >
          269 shots
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Image
            source={require("./assets/photo3.png")}
            style={{
              borderTopLeftRadius: 40,
              marginRight: 16,
              borderBottomLeftRadius: 40,
              width: 150, height: 300
            }}
          />
          <View>
            <Image
              source={require("./assets/photo5.png")}
              style={{ width: 150, height: 142 ,borderTopRightRadius: 40 }}
            />
            <Image
              source={require("./assets/photo6.png")}
              style={{ width: 150, height: 142,marginTop: 16, borderBottomRightRadius: 40 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({});
