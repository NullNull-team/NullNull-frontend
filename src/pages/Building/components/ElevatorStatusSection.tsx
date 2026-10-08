import React from 'react';
import { View, Text } from 'react-native';


const elevatorData = [
  { id: 1, name: '메인 엘리베이터', status: '쏘쏘', level: 2 },
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
    <View className="flex-col mx-5 mt-4 mb-6 self-stretch">
      
      {/* 2. 상단 타이틀 영역 */}
      <View className="flex-row justify-between items-center w-full mb-3">
        <Text className="text-[17px] font-bold text-gray-900">지금 1층 엘리베이터</Text>
        <Text className="text-[13px] text-gray-500">1곳 · 2대</Text>
      </View>

      {/* 3. 엘리베이터 리스트 */}
      <View className="flex-col gap-y-2.5">
        {elevatorData.map((elevator) => {
          const styles = getStatusStyle(elevator.level);

          return (
            <View 
              key={elevator.id} 
              className={`flex-row justify-between items-center w-full h-[48px] px-[14px] rounded-xl ${styles.bg}`}
            >
              <View className="flex-row items-center gap-x-3">
                
                {/* 상태 표시 도트 */}
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

                {/* 엘리베이터 이름 */}
                <Text className="text-[15px] font-semibold text-gray-900">
                  {elevator.name}
                </Text>
              </View>

              {/* 상태 텍스트 */}
              <Text className={`text-[15px] font-bold ${styles.text}`}>
                {elevator.status}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}