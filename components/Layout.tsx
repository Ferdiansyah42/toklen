import { View, Text } from 'react-native'
import React, {useState} from 'react'
import ListMusic from './ListMusic';

const Layout = () => {
    const [tabselected, settabselected] = useState<"list"  | "playing">("list");

  return <>{tabselected === "list" ? <ListMusic/> : <ListMusic/>}</>;
};

export default Layout