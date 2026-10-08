import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface FloorSelectionCardProps {
  selectedFloor: number;
  setSelectedFloor: (floor: number) => void;
}

export default function FloorSelectionCard({ selectedFloor, setSelectedFloor }: FloorSelectionCardProps) {
  const floors = [2, 3, 4];

  return (
    <View className="flex-col mx-5 mb-6 self-stretch">
      
      <Text className="text-[17px] font-bold text-gray-900 mb-3">몇 층 가세요?</Text>

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
                  isSelected ? 'text-white' : 'text-gray-700'
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