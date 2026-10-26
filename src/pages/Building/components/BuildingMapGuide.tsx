import React from 'react';
import { View, Text } from 'react-native';

export default function BuildingMapGuide() {
  return (
    <View className="flex-col items-start p-[15px] gap-y-[10px] self-stretch rounded-[16px] border border-[#D9E0EA] bg-white mx-5 mb-6">
      
      <Text className="text-[16px] font-bold text-gray-900">어디에 있나요?</Text>

      {/* 나중에 실제 지도를 넣을 임시 빈 공간 */}
      <View className="w-full h-[180px] justify-center items-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <Text className="text-[13px] text-gray-400">지도 API가 들어갈 자리</Text>
      </View>

    </View>
  );
}