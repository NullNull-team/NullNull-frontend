import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface TransitTimeDisplayProps {
  targetFloor?: number;
}

const StairsIcon = () => (
  <Svg width="15" height="11" viewBox="0 0 15 11" fill="none">
    <Path d="M0.712502 10.2124H3.87917V7.04574H7.04584V3.87907H10.2125V0.712402H13.3792" stroke="#394556" strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const ElevatorIcon = () => (
  <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <Path d="M13.4583 2.375H5.54167C4.66722 2.375 3.95834 3.08388 3.95834 3.95833V15.0417C3.95834 15.9161 4.66722 16.625 5.54167 16.625H13.4583C14.3328 16.625 15.0417 15.9161 15.0417 15.0417V3.95833C15.0417 3.08388 14.3328 2.375 13.4583 2.375Z" stroke="#394556" strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M7.125 7.9165L9.5 5.5415L11.875 7.9165" stroke="#394556" strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M7.125 11.0835L9.5 13.4585L11.875 11.0835" stroke="#394556" strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default function TransitTimeDisplay({ targetFloor = 3 }: TransitTimeDisplayProps) {
  
  const mockRoutes = [
    { 
      id: 1, 
      iconType: 'stairs',
      name: '메인 계단', 
      time: '약 50초', 
      isFaster: true 
    },
    { 
      id: 2, 
      iconType: 'elevator', 
      name: '메인 엘리베이터', 
      time: '약 55초', 
      isFaster: false 
    },
  ];

  return (
    <View className="flex-col mx-5 mb-6 self-stretch">
      
      <Text className="text-[17px] font-bold text-gray-900 mb-3">
        {targetFloor}층까지 걸리는 시간
      </Text>
      
      <View className="flex-row gap-x-2 w-full">
        {mockRoutes.map((route) => (
          <View 
            key={route.id}
            className={`flex-1 flex-col items-start p-[12px] gap-y-[6px] rounded-[13px] bg-white ${
              route.isFaster 
                ? 'border-2 border-[#0B6150]' 
                : 'border border-[#D9E0EA]'
            }`}
          >
            <View className="flex-row justify-between items-start w-full">
              
              <View className="w-6 h-6 flex items-center justify-center">
                {route.iconType === 'stairs' ? <StairsIcon /> : <ElevatorIcon />}
              </View>

              {route.isFaster && (
                <View className="bg-[#E4F2EB] px-2 py-0.5 rounded-full">
                  <Text className="text-[11px] font-bold text-[#126F4A]">더 빨라요</Text>
                </View>
              )}
            </View>

            <View>
              <Text className="text-[13px] text-gray-500 mb-[2px]">{route.name}</Text>
              <Text className="text-[18px] font-bold text-gray-900">{route.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity 
        className="w-full h-[44px] justify-center items-center rounded-[11px] border border-[#1C3F94] mt-4"
        activeOpacity={0.7}
      >
        <Text className="text-[15px] font-bold text-[#1C3F94]">모든 경로 보기 {'>'}</Text>
      </TouchableOpacity>

      <Text className="text-[11px] text-gray-400 mt-3 w-full">
        걸리는 시간은 센서 추정값이라 실제와 조금 다를 수 있어요.
      </Text>

      <View className="h-[1px] bg-gray-200 w-full mt-6" />

    </View>
  );
}