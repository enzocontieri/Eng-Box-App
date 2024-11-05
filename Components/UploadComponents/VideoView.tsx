import { View, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import { saveToLibraryAsync } from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';

interface VideoViewProps {
    video: string;
    setVideo: React.Dispatch<React.SetStateAction<string>>;
}

const VideoViewComponent = ({ video, setVideo }: VideoViewProps) => {

    const ref = React.useRef<VideoView>(null);

    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isMuted, setIsMuted] = React.useState(false);

    const player = useVideoPlayer(video, (player) => {
        player.loop = true;
        player.muted = isMuted;
        player.play();
    });

    useEffect(() => {
        player.muted = isMuted;
    }, [isMuted, player]);

    useEffect(() => {
        const subscription = player.addListener('playingChange', (isPlaying) => {
            setIsPlaying(isPlaying);
        });

        return () => {
            subscription.remove();
        }
    }, [player]);

    return (
        <Animated.View
            layout={LinearTransition}
            entering={FadeIn}
            exiting={FadeOut}
            className='bg-black'
        >
            <View className='absolute right-1.5 z-10 pt-12 gap-4' >
                <TouchableOpacity
                    onPress={async () => {
                        saveToLibraryAsync(video);
                        Alert.alert('✅ Video salvo!')
                    }}
                >
                    <Ionicons name='arrow-down' size={35} color={'#FFFFFF'} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setIsMuted(!isMuted)}
                >
                    <Ionicons name={isMuted === false ? 'volume-high' : 'volume-mute'} size={35} color={'#FFFFFF'} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (isPlaying) {
                            player.pause();
                        } else {
                            player.play();
                        }
                        setIsPlaying(!isPlaying);
                    }}
                >
                    <Ionicons name={isPlaying ? 'pause' : 'play'} size={35} color={'#FFFFFF'} />
                </TouchableOpacity>
            </View>

            <View className='absolute left-1.5 z-10 pt-12' >
                <TouchableOpacity
                    onPress={() => setVideo('')}
                >
                    <Ionicons name='close' size={35} color={'#ffffff'} />
                </TouchableOpacity>
            </View>
            <VideoView
                ref={ref}
                player={player}
                nativeControls={false}
                allowsFullscreen
                className='w-full h-full'
            />
        </Animated.View>
    );
}

export default VideoViewComponent;