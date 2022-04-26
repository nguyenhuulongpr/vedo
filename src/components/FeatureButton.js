import React from 'react';
import {
    Pressable,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles';

const FeatureButton = (props) => {
    return (
        <Pressable
          onPress={props.onPressFunction}
          style={({ pressed }) => [({ backgroundColor: pressed ? '#545454' : '#757575' }), styles.featureButton]}  
        >
          <Icon name={props.icon.content} color={props.icon.color} size={props.icon.size}/>
        </Pressable>
    )
}

export default FeatureButton;