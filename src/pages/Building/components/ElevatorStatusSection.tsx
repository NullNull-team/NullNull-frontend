import React from 'react';
import { View } from 'react-native';
import Text from '../../../components/Text';

const elevatorData = [
  { id: 1, name: '메인 엘리베이터', status: '쏘쏘', level: 2 },
];

const getStatusStyle = (level: number) => {
  switch (level) {
    case 1: 
      return { bg: 'bg-[#DCF0E8]', textColor: '#126F4A', dotActive: 'bg-[#1A9C7E]', dotInactive: 'bg-[#B5DDCF]' };
    case 2: 
      return { bg: 'bg-[#F7EBC8]', textColor: '#8C6200', dotActive: 'bg-[#C9960F]', dotInactive: 'bg-[#E6D39E]' };
    case 3: 
      return { bg: 'bg-[#F9DFCC]', textColor: '#C4511A', dotActive: 'bg-[#E0702A]', dotInactive: 'bg-[#EDC1A2]' };
    case 4: 
      return { bg: 'bg-[#F6D5D5]', textColor: '#B91C1C', dotActive: 'bg-[#D23B3B]', dotInactive: 'bg-[#D23B3B]' };
    default:
      return { bg: 'bg-gray-100', textColor: '#6B7280', dotActive: 'bg-gray-500', dotInactive: 'bg-gray-200' };
  }
};

export default function ElevatorStatusSection() {
  return (
    <View className="flex-col mx-5 mt-4 mb-6 self-stretch">
      
      <View className="flex-row justify-between items-center w-full mb-3">
        <Text className="text-[17px] font-bold text-gray-900">지금 1층 엘리베이터</Text>
        <Text className="text-[13px] text-gray-500">1곳 · 2대</Text>
      </View>

      <View className="flex-col gap-y-2.5">
        {elevatorData.map((elevator) => {
          const styles = getStatusStyle(elevator.level);

          return (
            <View 
              key={elevator.id} 
              className={`flex-row justify-between items-center w-full h-[48px] px-[14px] gap-x-[10px] rounded-[12px] ${styles.bg}`}
            >
              <View className="flex-row items-center gap-x-3">
                
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

                <Text 
                  style={{ color: styles.textColor }}
                  className="text-[15px] font-semibold"
                >
                  {elevator.name}
                </Text>
              </View>

              {/* 상태 텍스트 */}
              <Text 
                style={{ color: styles.textColor }}
                className="text-[15px] font-bold"
              >
                {elevator.status}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}