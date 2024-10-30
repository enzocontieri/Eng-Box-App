import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type CamControlsProps = {
    onCapture: () => void;
    toggleCameraFacing: () => void;
    openGallery: () => void;
}

const CamControls: React.FC<CamControlsProps> = ({ onCapture, toggleCameraFacing, openGallery }) => {
    return (
        <View className='flex-row justify-around items-center' >
            <TouchableOpacity
                onPress={openGallery}
            >
                <Ionicons name='images' size={50} color={'#CDCDCD'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onCapture} >
                <View className='bg-red-600 w-20 h-20 rounded-full border-4 border-[#B0BEC5]' ></View>
            </TouchableOpacity>

            <TouchableOpacity
                className='bg-[#455A64] w-16 h-16 items-center justify-center rounded-full'
                onPress={toggleCameraFacing}
            >
                <Ionicons name='camera-reverse' size={50} color={'#CDCDCD'} />
            </TouchableOpacity>
        </View>
    );
}

export default CamControls;