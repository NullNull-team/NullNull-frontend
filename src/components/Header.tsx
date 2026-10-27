import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <View style={[styles.logoDot, styles.logoDot1]} />
        <View style={[styles.logoDot, styles.logoDot2]} />
        <View style={[styles.logoDot, styles.logoDot3]} />
        <View style={[styles.logoDot, styles.logoDot4]} />
      </View>

      <View style={styles.brand}>
        <Text style={styles.title}>널널</Text>
        <Text style={styles.subtitle}>가톨릭대학교 혼잡도</Text>
      </View>

      <View style={styles.live}>
        <View style={styles.liveDot} />
        <Text style={styles.liveText}>실시간</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 72,
  },

  logo: {
    position: 'relative',
    flexShrink: 0,
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#1C3F94',
  },

  logoDot: {
    position: 'absolute',
    top: 21.5,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  logoDot1: {
    left: 11,
    backgroundColor: '#FFFFFF',
  },

  logoDot2: {
    left: 18,
  },

  logoDot3: {
    left: 25,
  },

  logoDot4: {
    left: 32,
  },

  brand: {
    justifyContent: 'center',
  },

  title: {
    color: '#1C3F94',
    fontSize: 23,
    fontWeight: '700',
    lineHeight: 31,
  },

  subtitle: {
    color: '#56637A',
    fontSize: 12,
    lineHeight: 17,
  },

  live: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 62,
    height: 26,
    marginLeft: 'auto',
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: '#DCF0E8',
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#1A9C7E',
  },

  liveText: {
    color: '#0B6150',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
  },
});