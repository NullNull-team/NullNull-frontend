import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Text from '../../components/Text';
import DetailHeader from '../../components/DetailHeader';

import ElevatorStatusSection from './components/ElevatorStatusSection'; 
import FloorSelectionCard from './components/FloorSelectionCard';
import CongestionStandard from './components/CongestionStandard';
import TransitTimeDisplay from './components/TransitTimeDisplay';
import BuildingMapGuide from './components/BuildingMapGuide';

export default function BuildingScreen({ route, navigation }: any) {
  const buildingName = route.params?.buildingName;
  
  console.log('Building 화면 buildingName:', buildingName);
  
  const [selectedFloor, setSelectedFloor] = useState(3);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      {/* 공통 헤더를 사용 중이므로 중복되는 커스텀 헤더 영역은 깔끔하게 정리했습니다 */}
      <DetailHeader
        title={buildingName}
        onBack={() => navigation.goBack()}
        statusLabel="실시간"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#FFF'}}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 40,
        }}
      >
        <View style={{ width: '100%' }}>
          <ElevatorStatusSection />
          
          <FloorSelectionCard 
            selectedFloor={selectedFloor} 
            setSelectedFloor={setSelectedFloor} 
          />
          
          <TransitTimeDisplay
            targetFloor={selectedFloor}
            buildingName={buildingName}
            fromFloor={1}
          />

          <BuildingMapGuide 
            buildingName={buildingName} 
            selectedFloor={selectedFloor} 
          />
          
          <CongestionStandard />
        </View>
      </ScrollView>
    </View>
  );
}