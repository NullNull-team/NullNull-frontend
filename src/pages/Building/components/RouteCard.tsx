import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Text from '../../../components/Text';

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

interface RouteCardProps {
  type: 'stairs' | 'elevator';
  name: string;
  time: string;
  status?: string;
  badgeBg?: string;
  badgeText?: string;
  cardBg?: string;
}

export default function RouteCard({ type, name, time, status, badgeBg, badgeText, cardBg }: RouteCardProps) {
  return (
    <View className="flex-row items-center bg-white p-[15px] gap-x-[12px] rounded-[16px] border border-[#D9E0EA]">
      
      <View className={`w-[42px] h-[42px] rounded-[12px] justify-center items-center ${cardBg || 'bg-gray-100'}`}>
        {type === 'stairs' ? <StairsIcon /> : <ElevatorIcon />}
      </View>

      <View className="flex-1">
        <Text 
          style={{
            color: '#121A26',
            fontFamily: 'Pretendard',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 21,
          }}
        >
          {name}
        </Text>

        {type === 'elevator' && status && (
          <View className={`self-start mt-1 px-2.5 py-0.5 rounded-full ${badgeBg}`}>
            <Text className={`text-[11px] font-bold ${badgeText}`}>● {status}</Text>
          </View>
        )}
      </View>

      <View className="items-end">
        <Text className="text-[16px] font-bold text-gray-900">{time}</Text>
        <Text className="text-[11px] text-gray-400">예상</Text>
      </View>

    </View>
  );
}