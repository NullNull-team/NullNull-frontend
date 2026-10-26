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
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: '#FFF'}}
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: 60,
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
  );
}
