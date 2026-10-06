import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface FloorSelectionCardProps {
  selectedFloor: number;
  setSelectedFloor: (floor: number) => void;
}

export default function FloorSelectionCard({ selectedFloor, setSelectedFloor }: FloorSelectionCardProps) {
  const floors = [2, 3, 4];

  return (
    <View className="flex-col items-start p-[15px] gap-y-[10px] self-stretch rounded-[16px] border border-[#D9E0EA] bg-white mx-5 mb-6">
      
      <Text className="text-[16px] font-bold text-gray-900">몇 층 가세요?</Text>

      <View className="flex-row gap-x-2 w-full">
        {floors.map((floor) => {
          const isSelected = selectedFloor === floor;

          return (
            <TouchableOpacity
              key={floor}
              onPress={() => setSelectedFloor(floor)}
              activeOpacity={0.7}
              className={`flex-1 h-[44px] justify-center items-center rounded-[11px] border ${
                isSelected 
                  ? 'bg-[#1C3F94] border-[#1C3F94]' 
                  : 'bg-white border-[#D9E0EA]'
              }`}
            >
              <Text 
                className={`text-[15px] font-bold ${
                  isSelected ? 'text-white' : 'text-gray-400'
                }`}
              >
                {floor}층
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

    </View>
  );
}