import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import 'tailwindcss/tailwind.css';

const CategoryComponent = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl'>
            <Text>Engenharias</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl'>
            <Text>Engenharias Software</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl'>
            <Text>Engenharias Mecanica</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl'>
            <Text>Engenharias Eltrica</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl'>
            <Text>Engenharias Quimica </Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl'>
            <Text>Engenharias Ambiental</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default CategoryComponent