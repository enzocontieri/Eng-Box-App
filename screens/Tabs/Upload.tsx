import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera, CameraMode, CameraPictureOptions, CameraProps, CameraType, CameraView, FlashMode, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import CamOptions from '../../Components/UploadComponents/CamOptions';
import CamControls from '../../Components/UploadComponents/CamControls';
import PicturePreviewSection from '../../Components/UploadComponents/PicturePreviewSection';

const Upload = () => {

  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<FlashMode>('off');
  const [mode, setMode] = useState<CameraMode>('picture');
  const [picture, setPicture] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className='flex-1 justify-center' >
        <Text className='text-center pb-2.5' >Precisamos da sua permissão para mostrar a camera!</Text>
        <TouchableOpacity
          onPress={requestPermission}
        >
          <Text className='text-red-900' >Permitir</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function toggleCameraFacing() {
    setFacing(currentFacing => currentFacing === 'back' ? 'front' : 'back');
  }

  function toggleFlash() {
    setFlash(flash => flash === 'off' ? 'on' : 'off');
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false
      }

      const takedPicture = await cameraRef.current.takePictureAsync(options);

      setPicture(takedPicture);
    }
  }

  const handleCapture = () => {
    if (mode === 'picture') {
      takePicture();
    }
  }

  const handleRetakePicture = () => setPicture(null);
  if (picture) return <PicturePreviewSection picture={picture} handleRetakePicture={handleRetakePicture} />

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
  }

  return (
    <SafeAreaView className='flex-1' >
      <View className='flex-1' >
        <CameraView
          ref={cameraRef}
          facing={facing}
          mode={mode}
          flash={flash}
          className='flex-1'
        >
          <CamOptions setMode={setMode} toggleFlash={toggleFlash} flash={flash} />

          <View className='absolute bottom-14 w-full' >
            <CamControls
              onCapture={handleCapture}
              toggleCameraFacing={toggleCameraFacing}
              openGallery={openGallery}
            />
          </View>
        </CameraView>
      </View>
    </SafeAreaView>
  );
}

export default Upload;