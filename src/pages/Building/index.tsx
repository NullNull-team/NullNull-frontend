import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import ElevatorStatusSection from './components/ElevatorStatusSection';
import FloorSelectionCard from './components/FloorSelectionCard';
import CongestionStandard from './components/CongestionStandard';
import TransitTimeDisplay from './components/TransitTimeDisplay';
import BuildingMapGuide from './components/BuildingMapGuide';
import BuildingScreenSkeleton from './BuildingScreenSkeleton';
import { BUILDING_MAP_DATA } from '../../data/buildingMapData';

export default function BuildingScreen({ route, navigation }: any) {
  const buildingName: string = route.params?.buildingName ?? '김수환관';
  
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(3);

  const floors =
    BUILDING_MAP_DATA[buildingName]?.floors ?? BUILDING_MAP_DATA['김수환관'].floors;

  useEffect(() => {
    if (!floors.includes(selectedFloor)) {
      setSelectedFloor(floors[0]);
    }
  }, [buildingName]);

  if (isLoading) {
    return (
      <BuildingScreenSkeleton 
        buildingName={buildingName} 
        onBack={() => navigation.goBack()} 
      />
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFF' }}
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 40,
      }}
    >
      <View className="flex-row justify-between items-center w-full px-5 mb-6">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 -ml-2 mr-1">
            <Text className="text-xl font-bold text-gray-800">{'<'}</Text>
          </TouchableOpacity>
          <Text className="text-[18px] font-bold text-gray-900">{buildingName}</Text>
        </View>

        <View className="bg-[#E4F2EB] px-2.5 py-1 rounded-full flex-row items-center">
          <View className="w-1.5 h-1.5 bg-[#126F4A] rounded-full mr-1.5" />
          <Text className="text-[11px] font-bold text-[#126F4A]">실시간</Text>
        </View>
      </View>

      <View style={{ width: '100%' }}>
        <ElevatorStatusSection />

        <FloorSelectionCard 
          selectedFloor={selectedFloor} 
          setSelectedFloor={setSelectedFloor}
          buildingName={buildingName}
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
  );
}