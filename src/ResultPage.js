import React from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-community/clipboard';

import Header from './components/Header'
import styles from './styles';

const ResultPage = ({ route }) => {
  const uri = route.params.uri;
  const width = route.params.width;
  const height = route.params.height;
  const content = route.params.content;
  const onPressCopyHandler = () => {
    Clipboard.setString(content)
  }
  return (
    <SafeAreaView style={styles.resultPageContainer}>
      <Header />
      <View style={styles.processedImage}>
        <Image 
          source={{ uri: uri }}
          style={ width > height ? 
            { width: Dimensions.get('window').width * 0.8, height: height / width * Dimensions.get('window').width * 0.8 , marginTop: 20, marginBottom: 20  } :
            { width: width / height * Dimensions.get('window').width * 0.8, height: Dimensions.get('window').width * 0.8 , marginTop: 20, marginBottom: 20 }} 
        />
      </View>
      <View style={styles.resultContainer}>
        <Pressable
          onPress={onPressCopyHandler}
          style={({ pressed }) => [({ backgroundColor: pressed ? '#545454' : '#757575' }), styles.copyButton]}  
        >
          <Icon name="copy" color="#ffffff" size={20}/>
          <Text style={{ color: "white", marginLeft: 7 }}>COPY</Text>
        </Pressable >
        <ScrollView style={styles.resultBox}>
        <Text
          style={styles.textResult}
        >
          {content}
        </Text>
        <Text></Text>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ResultPage;