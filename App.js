import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./components/config";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const createData = () => {
    addDoc(collection(db, "users"), {
      username: username,
      email: email,
    })
      .then(() => {
        console.log("data created");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = () => {
    // Add data
    updateDoc(doc(db, "users", "Yg6mgVxXdcOyI0K7ypfy"), {
      username: username,
      email: email,
    })
      .then(() => {
        //data saved success
        console.log("data updated");
      })
      .catch((error) => {
        //data write failed
        console.log(error);
      });
  };

  const deleteData = () => {
    deleteDoc(doc(db, "users", "Yg6mgVxXdcOyI0K7ypfy"));
  };

  const getData = () => {
    getDoc(doc(db, "users", "vEeHY1sGmvzzLyYwh5nf"))
      .then((docData) => {
        if (docData.exists()) {
          // console.log(docData.data());
          setUsername(docData.data().username);
          setEmail(docData.data().email);
        } else {
          console.log("No Such a data!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllData = async () => {
    await getDocs(collection(db, "users")).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log("Document data : ", users);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Firebase Create</Text>
      <TextInput
        style={styles.textBoxes}
        value={username}
        onChangeText={(username) => {
          setUsername(username);
        }}
        placeholder="Username"
      ></TextInput>
      <TextInput
        style={styles.textBoxes}
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
      ></TextInput>
      <Button onPress={createData} title="Submit Data" color="#841584" />
      <Button onPress={updateData} title="Update Data" color="#212433" />
      <Button onPress={deleteData} title="Delete Data" color="#212433" />
      <Button onPress={getData} title="Get Data" color="#212433" />
      <Button onPress={getAllData} title="Get All Data" color="#212433" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
    margin: 10,
  },
});
