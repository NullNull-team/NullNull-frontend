import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function BuildingScreen({ route, navigation }: any) {
  const { buildingName } = route.params || { buildingName: '건물' };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        {buildingName} 상세 화면
      </Text>

      <Text style={{ color: '#6b7280', marginBottom: 20 }}>
        동적 데이터 바인딩 테스트
      </Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: 10,
          backgroundColor: '#6b7280',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff' }}>뒤로 가기</Text>
      </TouchableOpacity>
    </View>
  );
}