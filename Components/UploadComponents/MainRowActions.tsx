import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { CameraMode, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

interface MainRowActionsProps {
    handleTakePicture: () => void;
    cameraMode: CameraMode;
    isRecording: boolean;
    setCameraFacing: React.Dispatch<React.SetStateAction<CameraType>>;
    openGallery: () => void;
}

const MainRowActions = ({ handleTakePicture, cameraMode, isRecording, setCameraFacing, openGallery }: MainRowActionsProps) => {
    return (
        <View className='absolute bottom-12 w-full h-24 flex-row items-center justify-around ml-1.5' >
            <TouchableOpacity
                onPress={openGallery}
            >
                <Ionicons name='image' size={60} color={'#ffffff'} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleTakePicture}
            >
                <Ionicons
                    name={cameraMode === 'picture' ? 'ellipse-outline' : isRecording ? 'ellipse-outline' : 'ellipse'}
                    size={80}
                    color={isRecording ? '#455A64' : '#ffffff'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setCameraFacing((prevValue) => prevValue === "back" ? "front" : "back")}
            >
                <Ionicons
                    name={'camera-reverse'}
                    size={60}
                    color={'#ffffff'}
                />
            </TouchableOpacity>
        </View>
    );
}

export default MainRowActions;