import React, { useState } from 'react';
import { SafeAreaView, View, Image, Dimensions, Pressable, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import styles from './styles';
import FeatureButton from './components/FeatureButton'
import Header from './components/Header'

const HomePage = ({ navigation }) => {
  const [imageUri, setImageUri] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [imageWidth, setImageWidth] = useState( Dimensions.get('window').width);
  const [imageHeight, setImageHeight] = useState( Dimensions.get('window').width);
  let content = ""
  const onPressCameraHandler = async () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    }
    await launchCamera(options, response => {
      console.log('Response = ', response);
      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        console.log(response.assets[0])
        const source = response.assets[0].uri
        const base64 = response.assets[0].base64
        const width = response.assets[0].width
        const height = response.assets[0].height
        setImageUri(source)
        setImageBase64(base64)
        setImageWidth(width)
        setImageHeight(height)
      }
    });
  }
  const onPressBrowseHandler = async () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    }
    await launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        console.log(response.assets[0])
        const source = response.assets[0].uri
        const base64 = response.assets[0].base64
        const width = response.assets[0].width
        const height = response.assets[0].height
        setImageUri(source)
        setImageBase64(base64)
        setImageWidth(width)
        setImageHeight(height)
      }
    });
  }
  const onPressProcessHandler = async () => {
    await fetch('http://10.0.2.2:5000/image', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(imageBase64)
    })
    .then(response => response.text())
    .then(text => {
      content = text
    })
    navigation.navigate('ResultPage', { uri: imageUri, width: imageWidth, height: imageHeight, content: content })
  }
  
  return (
    <SafeAreaView>
      <View style={styles.homePageContainer}>
        <Header />
        <View style={styles.featureContainer}>
          <FeatureButton 
            onPressFunction={onPressCameraHandler}
            icon={{ content: 'camera', color: '#f0f0f0', size: 50 }}
          />
          <FeatureButton 
            onPressFunction={onPressBrowseHandler}
            icon={{ content: 'file-photo-o', color: '#f0f0f0', size: 50 }}
          />
        </View>
        <View style={styles.preprocessImageContainer}>
          <Image 
            source={{ uri: imageUri }}
            style={ imageWidth > imageHeight ? 
              { width: Dimensions.get('window').width, height: imageHeight / imageWidth * Dimensions.get('window').width } :
              { width: imageWidth / imageHeight * Dimensions.get('window').width, height: Dimensions.get('window').width } } 
          />
        </View>
        <View style={styles.processContainer}>
          <Pressable
            onPress={imageUri ? onPressProcessHandler : null}
            style={({ pressed }) => [({ backgroundColor: pressed ? '#789' : '#567' }), styles.processButton]}  
          >
            <Text style={styles.textProcessButton}>Let's OCR</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomePage;