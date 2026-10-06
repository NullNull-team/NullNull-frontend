import React from 'react';
import { View, Text } from 'react-native';

const elevatorData = [
  { id: 1, name: '메인 엘리베이터', status: '답답', level: 3 },
  { id: 2, name: '기숙사 엘리베이터', status: '쏘쏘', level: 2 },
];

const getStatusStyle = (level: number) => {
  switch (level) {
    case 1: 
      return { bg: 'bg-[#DCF0E8]', text: 'text-emerald-700', dotActive: 'bg-[#1A9C7E]', dotInactive: 'bg-[#B5DDCF]' };
    case 2: 
      return { bg: 'bg-[#F7EBC8]', text: 'text-yellow-700', dotActive: 'bg-[#C9960F]', dotInactive: 'bg-[#E6D39E]' };
    case 3: 
      return { bg: 'bg-[#F9DFCC]', text: 'text-orange-700', dotActive: 'bg-[#E0702A]', dotInactive: 'bg-[#EDC1A2]' };
    case 4: 
      return { bg: 'bg-[#F6D5D5]', text: 'text-red-700', dotActive: 'bg-[#D23B3B]', dotInactive: 'bg-[#D23B3B]' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-500', dotActive: 'bg-gray-500', dotInactive: 'bg-gray-200' };
  }
};

export default function ElevatorStatusSection() {
  return (
    <View className="flex-col p-[15px] gap-y-[10px] rounded-[16px] border border-[#D9E0EA] bg-white mx-5 mt-4 mb-6 self-stretch">
      
      {/* 상단 타이틀 영역 */}
      <View className="flex-row justify-between items-center w-full">
        <Text className="text-lg font-bold text-gray-900">지금 1층 엘리베이터</Text>
        <Text className="text-xs text-gray-400">2곳 · 4대</Text>
      </View>

      {elevatorData.map((elevator) => {
        const styles = getStatusStyle(elevator.level);

        return (
          <View 
            key={elevator.id} 
            className={`flex-row justify-between items-center w-full h-[48px] px-[14px] rounded-xl ${styles.bg}`}
          >
            <View className="flex-row items-center gap-x-[10px]">
              <View className="flex-row gap-x-1">
                {[1, 2, 3, 4].map((dot) => (
                  <View 
                    key={dot}
                    className={`w-1.5 h-1.5 rounded-full ${
                      dot <= elevator.level ? styles.dotActive : styles.dotInactive
                    }`}
                  />
                ))}
              </View>

              <Text className="text-[15px] font-semibold text-gray-800">
                {elevator.name}
              </Text>
            </View>

            <Text className={`text-[15px] font-bold ${styles.text}`}>
              {elevator.status}
            </Text>
          </View>
        );
      })}
    </View>
  );
}