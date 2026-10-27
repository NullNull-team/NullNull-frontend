import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#1C3F94" />

      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('Home' as never)}
      >
        <View style={styles.logo}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
          <View style={[styles.dot, styles.dot4]} />
        </View>

        <Text style={styles.title}>널널</Text>
        <Text style={styles.english}>NULLNULL</Text>
        <Text style={styles.footer}>가톨릭대학교 혼잡도</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#1C3F94',
  },

  logo: {
    width: 96,
    height: 96,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
  },

  dot: {
    position: 'absolute',
    top: 41,
    width: 13,
    height: 13,
    borderRadius: 6.5,
  },

  dot1: {
    left: 13,
    backgroundColor: '#1C3F94',
  },

  dot2: {
    left: 32,
    borderWidth: 3,
    borderColor: '#1C3F94',
  },

  dot3: {
    left: 51,
    borderWidth: 3,
    borderColor: '#1C3F94',
  },

  dot4: {
    left: 70,
    borderWidth: 3,
    borderColor: '#1C3F94',
  },

  title: {
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 56,
  },

  english: {
    color: '#C9D6F2',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
  },

  footer: {
    position: 'absolute',
    bottom: 55,
    width: '100%',
    textAlign: 'center',
    color: '#C9D6F2',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
});
