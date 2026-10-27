import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Text from '../../components/Text';
import RouteCard from './components/RouteCard';
import { BUILDING_MAP_DATA } from '../../data/buildingMapData';

const BackIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path d="M13.75 16.5L8.25 11L13.75 5.5" stroke="#121A26" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  if (m === 0) return `약 ${s}초`;
  if (s === 0) return `약 ${m}분`;
  return `약 ${m}분 ${s}초`;
};

const STATUS_STYLE: Record<string, { badgeBg: string; badgeText: string; cardBg?: string }> = {
  여유: { badgeBg: 'bg-[#D9F0E1]', badgeText: 'text-green-700' },
  쏘쏘: { badgeBg: 'bg-[#F7EBC8]', badgeText: 'text-yellow-700' },
  빡빡: { badgeBg: 'bg-[#F6D5D5]', badgeText: 'text-red-700', cardBg: 'bg-[#FDF2F2]' },
};

export default function AllRoutesScreen({ navigation, route }: any) {
  console.log('AllRoutes params:', route?.params);

  const buildingName: string = route?.params?.buildingName ?? '다솔관';
  const fromFloor: number = route?.params?.fromFloor ?? 2;
  const toFloor: number = route?.params?.toFloor ?? 4;

  const data = BUILDING_MAP_DATA[buildingName] ?? BUILDING_MAP_DATA['김수환관'];

  const routes = data.routes.map((r, index) => ({
    id: index + 1,
    type: r.type,
    name: r.name,
    time: formatTime(r.seconds),
    ...(r.status ? STATUS_STYLE[r.status] : {}),
    ...(r.status ? { status: r.status } : {}),
  }));

  return (
    <View className="flex-1 bg-[#F5F6F8] pt-14">
      <View className="flex-row items-center px-5 mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 -ml-2 mr-2">
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
            모든 경로 보기
          </Text>
          <Text className="text-[12px] text-gray-500">
            {`${buildingName} ${fromFloor}층 → ${toFloor}층`}
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40, gap: 12 }}>
        {routes.map((item: any) => (
          <RouteCard key={item.id} {...item} />
        ))}

        <Text className="text-[11px] text-gray-400 mt-2 text-center px-2">
          {`${fromFloor}층에서 출발했을 때 기준이에요. 걸리는 시간은 센서 추정값이라 실제와 조금 다를 수 있어요.`}
        </Text>
      </ScrollView>
    </View>
  );
}