import { View, Text, SafeAreaView } from "react-native";
import React, {useState} from 'react'
import ListMusic from './ListMusic';
import Playing from "./Playing";
import {LinearGradient} from 'expo-linear-gradient'
import { musicData } from "@/data/music";

const Layout = () => {
    const [tabselected, settabselected] = useState<"list"  | "playing">("playing");

  return (
  <>
    <LinearGradient colors={["#212528", "#111315"]}>
        <SafeAreaView>
        {tabselected === "list" ? <ListMusic musicData ={musicData} /> : <Playing />}
        </SafeAreaView>
    </LinearGradient>
  </>
  );
};

export default Layout