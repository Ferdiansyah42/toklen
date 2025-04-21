import { View, Text } from "react-native";
import React, {useState} from 'react'
import ListMusic from './ListMusic';
import Playing from "./Playing";
import {LinearGradient} from 'expo-linear-gradient'

const Layout = () => {
    const [tabselected, settabselected] = useState<"list"  | "playing">("playing");

  return (
  <>
    <LinearGradient
    colors={["#212528", "#111315"]}>
        {tabselected === "list" ? <ListMusic/> : <Playing />}
    </LinearGradient>
  </>
  );
};

export default Layout