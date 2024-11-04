import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


type CamOptionsProps = {
    setMode: (mode: 'picture' | 'video') => void;
    toggleFlash: () => void;
}

const CamOptions: React.FC<CamOptionsProps> = ({ setMode, toggleFlash }) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <View className='absolute top-2.5 right-2.5 bg-[#455A64] p-1.5 rounded-full '>
            <TouchableOpacity
                onPress={() => setIsExpanded(!isExpanded)} >
                <Ionicons name='cog' size={40} color={'#CDCDCD'} />
            </TouchableOpacity>

            {isExpanded && (
                <View>
                    <TouchableOpacity
                        className='mb-4 mt-4'
                        onPress={() => setMode('picture')}
                    >
                        <Ionicons name='camera' size={40} color={'#CDCDCD'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='mb-4'
                    // onPress={() => setMode('video')}
                    >
                        <Ionicons name='videocam' size={40} color={'#CDCDCD'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => toggleFlash}
                    >
                        <Ionicons name='flash' size={40} color={'#CDCDCD'} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default CamOptions;