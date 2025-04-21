import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

const Playing = () => {
  return (
    <View style={{ height: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 7, alignItems: 'center', marginTop: 7 }}>
            <View style={{ padding: 4, borderRadius: 100, backgroundColor: '#333', borderColor: '#333', shadowColor: 'white', shadowOpacity: 0.5 }}>
                <Ionicons name="arrow-back" size={24} color={"white"} />
            </View>
        </View>
    </View>
  );
};

export default Playing;