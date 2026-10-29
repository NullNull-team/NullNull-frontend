
import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Text from '../../components/Text';
import { Skeleton } from '../Building/components/Skeleton';

const BackIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path d="M13.75 16.5L8.25 11L13.75 5.5" stroke="#121A26" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

interface BuildingScreenSkeletonProps {
  buildingName?: string;
  onBack: () => void;
}

export default function BuildingScreenSkeleton({ buildingName, onBack }: BuildingScreenSkeletonProps) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      {/* 상단 헤더: 건물 이름은 유지하고 부가 상태만 '불러오는 중'으로 표시 */}
      <View className="flex-row items-center px-5 pt-14 pb-4">
        <TouchableOpacity onPress={onBack} className="p-2 -ml-2 mr-2">
          <BackIcon />
        </TouchableOpacity>
        <View>
          <Text 
            style={{
              color: '#121A26',
              fontFamily: 'Pretendard',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 24,
            }}
          >
            {buildingName || '건물 정보'}
          </Text>
          <Text className="text-[12px] text-gray-400 mt-0.5">불러오는 중</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 40,
        }}
      >
        <View style={{ width: '100%' }} className="px-5 gap-y-4">
          {/* 스크린샷과 일치하는 카드형 스켈레톤 구조 */}
          <View className="bg-white p-4 rounded-[20px] border border-[#D9E0EA] gap-y-3">
            <Skeleton className="w-[100px] h-[24px]" />
            <Skeleton className="w-full h-[52px]" />
            <Skeleton className="w-full h-[52px]" />
            <Skeleton className="w-full h-[52px]" />
            <Skeleton className="w-full h-[52px]" />
            <Skeleton className="w-full h-[52px]" />
          </View>

          <View className="bg-white p-4 rounded-[20px] border border-[#D9E0EA] gap-y-3">
            <Skeleton className="w-[120px] h-[20px]" />
            <Skeleton className="w-full h-[16px]" />
            <Skeleton className="w-[220px] h-[16px]" />
            <Skeleton className="w-[180px] h-[16px]" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}