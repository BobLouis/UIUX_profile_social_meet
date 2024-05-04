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
import { LinearGradient } from "expo-linear-gradient";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const Profile = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#241332", // 設置整個滾動視圖的背景顏色為深紫色
      }}
    >
      <ImageBackground
        source={require("./assets/photo.png")} // 設置背景圖片
        style={{
          height: 0.45 * h, // 設置背景圖片的高度為屏幕高度的45%
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <Image source={require("./assets/icons-back-light.png")} />
          <Image source={require("./assets/filter.png")} />
        </View> */}
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]} // 線性漸變色從深紫色到透明
          style={{
            transform: [{ rotate: "180deg" }], // 將漸變色旋轉180度
            position: "absolute", // 使用絕對定位
            left: 0, // 左邊距為0
            right: 0, // 右邊距為0
            bottom: 0, // 底邊距為0
            zIndex: 1, // 層級為1
            height: 0.16 * h, // 高度為屏幕高度的16%
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "-180deg" }], // 文本再次旋轉-180度，使其正面朝上
              color: "#FFF", // 文本顏色為白色
              fontSize: 35, // 字體大小為35
              marginVertical: 30, // 垂直外邊距為30
              alignSelf: "center", // 水平居中對齊
              fontFamily: "Montserrat_700Bold", // 使用Montserrat粗體字型
            }}
          >
            Ida Niska
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row", // 子元素以行排列
          alignItems: "center", // 子元素垂直居中對齊
          justifyContent: "space-between", // 子元素之間平均分配空間
          paddingHorizontal: 35, // 水平內邊距為35
        }}
      >
        <View
          style={{
            alignItems: "center", // 內部元素垂直居中
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            125
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#918998",
            }}
          >
            FOLLOWERS
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            150
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#918998",
            }}
          >
            FOLLOWING
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat_700Bold",
              color: "#FFF",
            }}
          >
            321
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#918998",
            }}
          >
            LIKES
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#352641",
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 60,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 60,
            fontFamily: "Montserrat_600SemiBold",
            color: "#918998",
          }}
        >
          POPULAR
        </Text>
        <View
          style={{
            backgroundColor: "#8A56AC",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 60,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_600SemiBold",
              color: "#FFF",
            }}
          >
            RECENT
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#352641",
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("./assets/avatar.png")}
          
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <View
            style={{
              
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
              <TouchableOpacity onPress={()=>navigation.navigate('ProfileDetail')}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat_700Bold",
                color: "#FFF",
              }}
            >
              Ida Niska
            </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat_400Regular",
                color: "#918998",
              }}
            >
              1 hour ago
            </Text>
          </View>
          <Image
            source={require("./assets/icons-chevron-light.png")}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Montserrat_400Regular",
            color: "#918998",
            marginVertical: 20,
            paddingHorizontal: 30,
            textAlign: "center",
          }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_400Regular",
              color: "#fff",
              paddingHorizontal: 10,
            }}
          >
            256
          </Text>
          <Image source={require("./assets/icons-comment-dark.png")}
            
              style={{width: 20, height: 20}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_400Regular",
              color: "#fff",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            516
          </Text>
          <Image source={require("./assets/icons-like-dark.png")}
              
                style={{width: 20, height: 20}}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#352641",
          borderRadius: 40,
          marginHorizontal: 10,
          paddingVertical: 20,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("./assets/avatar.png")}
          
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat_700Bold",
                color: "#FFF",
              }}
            >
              Ida Niska
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat_400Regular",
                color: "#918998",
              }}
            >
              1 hour ago
            </Text>
          </View>
          <Image
            source={require("./assets/icons-chevron-light.png")}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Montserrat_400Regular",
            color: "#918998",
            marginVertical: 20,
            paddingHorizontal: 30,
            textAlign: "center",
          }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_400Regular",
              color: "#fff",
              paddingHorizontal: 10,
            }}
          >
            256
          </Text>
          <Image source={require("./assets/icons-comment-dark.png")}
              
                style={{width: 20, height: 20}}
          />

          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_400Regular",
              color: "#fff",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            516
          </Text>
          <Image source={require("./assets/icons-like-dark.png")}
                
                  style={{width: 20, height: 20}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
 
});
