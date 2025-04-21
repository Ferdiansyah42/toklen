import { View, Text } from 'react-native'
import React from 'react'
import { typeMusic } from '@/data/typemusic'

interface Props{
    musicData: typeMusic[];
}

const ListMusic = ({ musicData }: Props) => {
  return (
    <View className='flex h-screen items-center justify-center'>
        <Text className='text-3xl font-semibold'>Aplikasi Music</Text>
    </View>
  )
}

export default ListMusic