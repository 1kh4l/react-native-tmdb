import React from 'react'
import styles from './Header.scss';
import Logo from './../../assets/images/react_logo.svg';
import { Text, View, Image } from 'react-native';

const Header = (props) => {
  return (
    <View className={styles.Header}>
      <Text className={styles.text}>My first component YAY!</Text>
      <Logo width={120} height={40} />
    </View>
  );
}

export default Header;
