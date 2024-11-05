import { View } from 'react-native';
import React from 'react';
import { CameraMode, FlashMode } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CameraToolsProps {
    cameraFlash: FlashMode;
    setCameraFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
    cameraMode: CameraMode;
    setCameraMode: React.Dispatch<React.SetStateAction<CameraMode>>;
}

const CameraTools = ({ cameraFlash, setCameraFlash, cameraMode, setCameraMode }: CameraToolsProps) => {

    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    return (
        <View className='absolute right-1.5 z-10 bg-[#455A6450] p-1.5 rounded-full' >

            <TouchableOpacity
                onPress={() => setIsExpanded(!isExpanded)}
            >
                <Ionicons name='cog' size={35} color={'#F9F9F9'} />
            </TouchableOpacity>

            {isExpanded && (
                <View>
                    <TouchableOpacity
                        onPress={() => setCameraMode('picture')}
                        className='my-2.5'
                    >
                        <Ionicons name='camera' size={35} color={cameraMode === 'picture' ? '#FF8C00' : '#F9F9F9'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setCameraMode('video')}
                        className='mb-2.5'
                    >
                        <Ionicons name='videocam' size={35} color={cameraMode === 'video' ? '#FF8C00' : '#F9F9F9'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setCameraFlash((prevValue) => (prevValue === 'off' ? 'on' : 'off'))}
                    >
                        <Ionicons name={cameraFlash === 'on' ? 'flash' : 'flash-off'} size={35} color={'#F9F9F9'} />
                    </TouchableOpacity>
                </View >
            )}
        </View >
    );
}

export default CameraTools;