/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonInfor from "./PersonInfor";
import { Brush2 } from 'iconsax-react-native';

const UserInfo = ({ navigation }) => {
  const [gioiTinh, setGioiTinh] = useState('Name');
  const [ngaySinh, setNgaySinh] = useState('06/10/2002');
  const [soDienthoai, setSoDienThoai] = useState('0966345012');
  const [image, setImage] = useState(require('../assets/hinhnen.jpeg'));
  const [isModelVisit, setIsModelVisit] = useState(false);

  const userInfo = useSelector((state) => state.friends.friendInfo);
  console.log(userInfo);

  const handleModel = () => {
    setIsModelVisit(!isModelVisit);
  };

  const addFriendHandler = () => {
    navigation.navigate("AddFriend");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.avatar}
          source={require("../assets/avata.jpg")}
        />
        <View style={styles.userInfoContainer}>
          <TouchableOpacity style={styles.userImageContainer}>
            <Image style={styles.userImage} source={image} />
          </TouchableOpacity>
          <Text style={styles.userName}>Thanh Luu</Text>
        </View>
      </View>

      <Modal visible={isModelVisit} transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TextInput
              onChangeText={(text) => setGioiTinh(text)}
              placeholder="Name"
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => setNgaySinh(text)}
              placeholder="Birthday"
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => setSoDienThoai(text)}
              placeholder="Gender"
              style={styles.textInput}
            />
            <Button title="Lưu thông tin" onPress={handleModel} />
          </View>
        </View>
      </Modal>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Thông tin cá nhân</Text>
        <PersonInfor infor="Giới tính" infor2={gioiTinh} />
        <PersonInfor infor="Ngày sinh" infor2={ngaySinh} />
        <PersonInfor infor="Điện thoại" infor2={soDienthoai} />
        <TouchableOpacity onPress={handleModel} style={styles.editButton}>
          <Brush2 size="32" color="#000000" />
          <Text style={styles.editButtonText}>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userInfoSection}>
        <Image source={{ uri: userInfo.avatar }} style={styles.userAvatar} />
        <Text style={styles.userInfoText}>{userInfo.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Kết bạn"} style={styles.addFriendButton} onPress={addFriendHandler} />
        <Button title={"Nhắn tin"} style={styles.addFriendButton} />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  profileContainer: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    position: "relative",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: 'stretch',
  },
  userInfoContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'yellow',
  },
  userImage: {
    width: 62,
    height: 62,
    borderRadius: 100,
  },
  userName: {
    fontSize: 20,
    color: 'white',
    marginLeft: 15,
    fontWeight: '900',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  textInput: {
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  infoContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  infoTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    marginTop: 10,
  },
  editButton: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: '#C0C0C0',
    borderRadius: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    color: 'black',
    fontWeight: '800',
    marginLeft: 6,
  },
  userInfoSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userAvatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userInfoText: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: "100%",
  },
  addFriendButton: {
    flex: 1,
    backgroundColor: "green",
    margin: 10,
  },
});
