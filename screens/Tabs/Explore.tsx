import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import 'tailwindcss/tailwind.css';
import CategoryComponent from '../../Components/category';
import { data as specialistsData } from '../../data/dataEspecialist';

const Explore = ({ navigation }) => {;
  return (
    <SafeAreaView className="bg-[#F8F8F8] h-full">
      <View>
        <View className="mt-10">
          <TouchableOpacity className="w-30 h-35 bg-[#FFFFFF] p-5 mr-6 ml-6 rounded-xl flex-row space-x-2 shadow">
            <AntDesign name="search1" size={16} color="#9B9B9B"/>
            <TextInput placeholder="Search" className="text-[#9B9B9B] flex-1"/>
          </TouchableOpacity> 
        </View>
          <View>
            <CategoryComponent />
          </View>
          
        </View>
    </SafeAreaView>
  )
}

export default Explore


