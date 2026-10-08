import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'; 

import ElevatorStatusSection from './components/ElevatorStatusSection'; 
import FloorSelectionCard from './components/FloorSelectionCard';
import CongestionStandard from './components/CongestionStandard';
import TransitTimeDisplay from './components/TransitTimeDisplay';
import BuildingMapGuide from './components/BuildingMapGuide';

export default function BuildingScreen({ route, navigation }: any) {
  const { buildingName } = route.params || { buildingName: '건물' };
  
  const [selectedFloor, setSelectedFloor] = useState(3);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFF'}}
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
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
          marginBottom: 30,
        }}
      >
        <Text style={{ color: '#fff' }}>뒤로 가기</Text>
      </TouchableOpacity>

      <View style={{ width: '100%' }}>
        <ElevatorStatusSection />
        
        <FloorSelectionCard 
          selectedFloor={selectedFloor} 
          setSelectedFloor={setSelectedFloor} 
        />
        
        <TransitTimeDisplay targetFloor={selectedFloor} />

        <BuildingMapGuide />
        
        <CongestionStandard />
      </View>

    </ScrollView>
  );
}