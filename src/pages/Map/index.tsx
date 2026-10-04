import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MapScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        캠퍼스 지도 화면
      </Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: 10,
          backgroundColor: '#ef4444',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff' }}>뒤로 가기</Text>
      </TouchableOpacity>
    </View>
  );
}