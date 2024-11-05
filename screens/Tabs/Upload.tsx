import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { CameraMode, CameraType, CameraView, FlashMode } from 'expo-camera';
import CameraTools from '../../Components/UploadComponents/CameraTools';
import MainRowActions from '../../Components/UploadComponents/MainRowActions';
import PictureView from '../../Components/UploadComponents/PictureView';
import VideoViewComponent from '../../Components/UploadComponents/VideoView';
import * as ImagePicker from 'expo-image-picker';

const Upload = () => {

  const cameraRef = React.useRef<CameraView>(null);

  const [cameraMode, setCameraMode] = React.useState<CameraMode>('picture');
  const [cameraFlash, setCameraFlash] = React.useState<FlashMode>('off');
  const [cameraFacing, setCameraFacing] = React.useState<CameraType>('back');

  const [picture, setPicture] = React.useState<string>(''); // "https://picsum.photos/seed/696/3000/2000"
  const [video, setVideo] = React.useState<string>(''); //  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

  const [isRecording, setIsRecording] = React.useState<boolean>(false);

  const handleTakePicture = async () => {
    const response = await cameraRef.current?.takePictureAsync();
    setPicture(response!.uri);
  }

  const toggleRecord = async () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    } else {
      setIsRecording(true);
      const response = await cameraRef.current?.recordAsync();
      setVideo(response!.uri);
    }
  }

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      if (selectedAsset.type === 'video') {
        setVideo(selectedAsset.uri);
      } else if (selectedAsset.type === 'image') {
        setPicture(selectedAsset.uri);
      }
    }
  }

  if (picture) return <PictureView picture={picture} setPicture={setPicture} />
  if (video) return <VideoViewComponent video={video} setVideo={setVideo} />

  return (
    <View className='flex-1' >
      <CameraView
        className='flex-1'
        ref={cameraRef}
        facing={cameraFacing}
        mode={cameraMode}
        flash={cameraFlash}
        onCameraReady={() => console.log('Camera is ready')}
      >
        <SafeAreaView className='flex-1 pt-10' >
          <View className='flex-1 p-1.5' >

            <CameraTools cameraFlash={cameraFlash} setCameraFlash={setCameraFlash} cameraMode={cameraMode} setCameraMode={setCameraMode} />

            <MainRowActions
              isRecording={isRecording}
              setCameraFacing={setCameraFacing}
              cameraMode={cameraMode}
              handleTakePicture={cameraMode === 'picture' ? handleTakePicture : toggleRecord}
              openGallery={openGallery}
            />

          </View>
        </SafeAreaView>
      </CameraView>
    </View>

  );
}

export default Upload;