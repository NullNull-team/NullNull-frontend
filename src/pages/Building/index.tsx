import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import DetailHeader from '../../components/DetailHeader';

import ElevatorStatusSection from './components/ElevatorStatusSection'; 
import FloorSelectionCard from './components/FloorSelectionCard';
import CongestionStandard from './components/CongestionStandard';
import TransitTimeDisplay from './components/TransitTimeDisplay';
import BuildingMapGuide from './components/BuildingMapGuide';

export default function BuildingScreen({ route, navigation }: any) {
  const buildingName = route.params?.buildingName ?? '건물';
  
  const [selectedFloor, setSelectedFloor] = useState(3);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
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
        paddingBottom: 40,
      }}
    >

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
    </View>
  );
}
