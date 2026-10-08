import React from 'react';
import { View, Text } from 'react-native';

export default function CongestionStandard() {
  const standards = [
    {
      level: 1,
      label: '널널',
      desc: '다음 엘리베이터에 여유 있게 타요',
      colors: { bg: 'bg-[#DCF0E8]', text: 'text-emerald-700', dotActive: 'bg-[#1A9C7E]', dotInactive: 'bg-[#B5DDCF]' }
    },
    {
      level: 2,
      label: '쏘쏘',
      desc: '다음 엘리베이터에 탈 수 있지만 꽉 차요',
      colors: { bg: 'bg-[#F7EBC8]', text: 'text-yellow-700', dotActive: 'bg-[#C9960F]', dotInactive: 'bg-[#E6D39E]' }
    },
    {
      level: 3,
      label: '답답',
      desc: '1대를 보내야 타요',
      colors: { bg: 'bg-[#F9DFCC]', text: 'text-orange-700', dotActive: 'bg-[#E0702A]', dotInactive: 'bg-[#EDC1A2]' }
    },
    {
      level: 4,
      label: '빡빡',
      desc: '2대 이상 보내야 타요',
      colors: { bg: 'bg-[#F6D5D5]', text: 'text-red-700', dotActive: 'bg-[#D23B3B]', dotInactive: 'bg-[#D23B3B]' }
    },
  ];

  return (
    <View className="flex-col mx-5 mb-6 self-stretch">
      
      <View className="flex-row justify-between items-center w-full mb-3">
        <Text className="text-[17px] font-bold text-gray-900">혼잡도 기준</Text>
        <Text className="text-[13px] font-bold text-[#8A3C0C]">답답부터 붐빔</Text>
      </View>

      {/* 혼잡도 리스트 영역 */}
      <View className="flex-col gap-y-[12px]">
        {standards.map((item) => (
          <View key={item.level} className="flex-row items-center gap-x-3">
            
            <View className={`flex-row items-center px-3 h-[28px] rounded-full ${item.colors.bg}`}>
              <View className="flex-row gap-x-1 mr-2">
                {[1, 2, 3, 4].map((dot) => (
                  <View 
                    key={dot}
                    className={`w-1.5 h-1.5 rounded-full ${
                      dot <= item.level ? item.colors.dotActive : item.colors.dotInactive
                    }`}
                  />
                ))}
              </View>
              <Text className={`text-[13px] font-bold ${item.colors.text}`}>
                {item.label}
              </Text>
            </View>

            <Text className="text-[14px] text-gray-600 flex-1">
              {item.desc}
            </Text>

          </View>
        ))}
      </View>
      
    </View>
  );
}