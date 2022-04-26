import React from 'react';
import {
    View,
    Pressable,
    Text
} from 'react-native'

import styles from '../styles';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>Vedo</Text>
        </View>
    )
}

export default Header;