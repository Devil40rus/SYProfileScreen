import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={require("./assets/logo.jpg")} style={styles.image} resizeMode="center"></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Анатолий</Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Developer</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Записи</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>45, 844</Text>
            <Text style={[styles.text, styles.subText]}>Подписчики</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
            <Text style={[styles.text, styles.subText]}>Подписан</Text>
          </View>
        </View>
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/people_1.jpg")}></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/people_2.jpg")}></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/people_3.jpg")}></Image>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.mediaCount}>
        <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
        <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Медиа</Text>
      </View>
      <Text style={[styles.subText, styles.recent]}>Недавняя активность</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 250 }}>
            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
              Подписался{" "}
              <Text style={{ fontWeight: "400" }}>
                Алексей Калюжный и <Text style={{ fontWeight: "400" }}>Артемий Найденов</Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 250 }}>
            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
              Подписался{" "}
              <Text style={{ fontWeight: "400" }}>
                Михаил Нопин и <Text style={{ fontWeight: "400" }}>Кузьмичев Даниил</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: "#52575D"
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  image: {
    flex: 1,
    width: 200,
    height: 200
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#414448",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#414448",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    flex: 1,
    alignItems: "center"
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#414448",
    position: "absolute",
    top: "62%",
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});
