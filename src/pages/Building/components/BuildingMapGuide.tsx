import React, { useState } from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle, G, Rect, Text as SvgText, TSpan } from 'react-native-svg';
import Text from '../../../components/Text';
import PinDetailModal from './PinDetailModal';
import { BUILDING_MAP_DATA } from '../../../data/buildingMapData';

const PAD = 25;

export default function BuildingMapGuide({
  buildingName = '다솔관',
  selectedFloor = 3,
}: {
  buildingName?: string;
  selectedFloor?: number;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPin, setSelectedPin] = useState<string>('');

  const handlePinPress = (pin: { name: string; type: 'elevator' | 'stair' }) => {
    const typeLabel = pin.type === 'elevator' ? '엘리베이터' : '계단';
    setSelectedPin(`${pin.name} ${typeLabel}`);
    setModalVisible(true);
  };

  const currentMapData = BUILDING_MAP_DATA[buildingName] || BUILDING_MAP_DATA['김수환관'];

  const [vx, vy, vw, vh] = currentMapData.viewBox.split(' ').map(Number);
  const paddedViewBox = `${vx - PAD} ${vy - PAD} ${vw + PAD * 2} ${vh + PAD * 2}`;

  return (
    <View className="flex-col items-start p-[15px] gap-y-[10px] self-stretch rounded-[16px] bg-white mx-5 mb-6">
      {/* 상단 타이틀 영역 */}
      <View className="flex-row justify-between items-center w-full">
        <Text className="text-[16px] font-bold text-gray-900">어디에 있나요?</Text>
        <Text className="text-[12px] text-gray-500">{selectedFloor}층 위치</Text>
      </View>

      {/* 동적 뱃지 영역 */}
      <View className="flex-row flex-wrap gap-2">
        <View className="flex-row items-center bg-gray-100 pl-1.5 pr-3 py-1.5 rounded-full">
          <View className="w-[24px] h-[24px] rounded-full bg-[#2C3E50] items-center justify-center mr-2">
            <Svg width="16" height="16" viewBox="0 0 17 17" fill="none">
              <Path
                d="M4.95834 2.125H12.0417C12.8241 2.125 13.4583 2.75926 13.4583 3.54167V13.4583C13.4583 14.2407 12.8241 14.875 12.0417 14.875H4.95834C4.17593 14.875 3.54167 14.2407 3.54167 13.4583V3.54167C3.54167 2.75926 4.17593 2.125 4.95834 2.125Z"
                stroke="white"
                strokeWidth="1.62917"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M6.375 7.08325L8.5 4.95825L10.625 7.08325"
                stroke="white"
                strokeWidth="1.62917"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M6.375 9.91675L8.5 12.0417L10.625 9.91675"
                stroke="white"
                strokeWidth="1.62917"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-[13px] font-bold text-gray-900">{currentMapData.elevatorBadge}</Text>
        </View>

        <View className="flex-row items-center bg-gray-100 pl-1.5 pr-3 py-1.5 rounded-full">
          <View className="w-[24px] h-[24px] rounded-full bg-[#1C3F94] items-center justify-center mr-2">
            <Svg width="14" height="14" viewBox="0 0 13 13" fill="none">
              <Path
                d="M1.44444 10.8333H3.97222V8.30556H6.5V5.77778H9.02778V3.25H11.5556"
                stroke="white"
                strokeWidth="1.87778"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-[13px] font-bold text-gray-900">{currentMapData.stairBadge}</Text>
        </View>
      </View>

      {/* 지도 박스 */}
      <View className="w-full h-[378px] bg-[#F4F7FA] rounded-[14px] border border-[#E3E8EF] overflow-hidden p-[10px]">
        <Svg
          width="100%"
          height="100%"
          viewBox={paddedViewBox}
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* 건물 외곽선 */}
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d={currentMapData.svgPath}
            fill="white"
            stroke="#CBD3DE"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* 입구 표시 */}
          {currentMapData.entrances?.map((e, i) => (
            <G key={`entrance-${i}`}>
              <Rect x={e.x - 18} y={e.y - 8} width={36} height={16} rx={8} fill="#CBD3DE" />
              <SvgText
                x={e.x}
                y={e.y + 4}
                fontSize="10"
                fontWeight="bold"
                fill="#374151"
                textAnchor="middle"
              >
                {e.label}
              </SvgText>
            </G>
          ))}

          {/* 핀 + 라벨 */}
          {currentMapData.pins.map((pin) => {
            const below = pin.labelPosition === 'below';
            const isLeft = pin.labelPosition === 'left';
            const lx = below ? pin.x : isLeft ? pin.x - 20 : pin.x + 20;
            const ly = below ? pin.y + 31 : pin.y + 4;
            const anchor = below ? 'middle' : isLeft ? 'end' : 'start';

            return (
              <G key={pin.id} onPress={() => handlePinPress(pin)}>
                <Circle
                  cx={pin.x}
                  cy={pin.y}
                  r="15"
                  fill={pin.type === 'elevator' ? '#2C3E50' : '#1C3F94'}
                  stroke="white"
                  strokeWidth="2"
                />

                {/* 엘리베이터 아이콘 */}
                {pin.type === 'elevator' && (
                  <G transform={`translate(${pin.x - 11.05}, ${pin.y - 11.05}) scale(1.3)`}>
                    <Path
                      d="M4.95834 2.125H12.0417C12.8241 2.125 13.4583 2.75926 13.4583 3.54167V13.4583C13.4583 14.2407 12.8241 14.875 12.0417 14.875H4.95834C4.17593 14.875 3.54167 14.2407 3.54167 13.4583V3.54167C3.54167 2.75926 4.17593 2.125 4.95834 2.125Z"
                      stroke="white"
                      strokeWidth="1.62917"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M6.375 7.08325L8.5 4.95825L10.625 7.08325"
                      stroke="white"
                      strokeWidth="1.62917"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M6.375 9.91675L8.5 12.0417L10.625 9.91675"
                      stroke="white"
                      strokeWidth="1.62917"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                )}

                {/* 계단 아이콘 */}
                {pin.type === 'stair' && (
                  <G transform={`translate(${pin.x - 8.45}, ${pin.y - 8.45}) scale(1.3)`}>
                    <Path
                      d="M1.44444 10.8333H3.97222V8.30556H6.5V5.77778H9.02778V3.25H11.5556"
                      stroke="white"
                      strokeWidth="1.87778"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                )}

                {/* 라벨 */}
                <SvgText x={lx} y={ly} fontSize="11" textAnchor={anchor}>
                  <TSpan fontWeight="bold" fill="#1F2937">{pin.name}</TSpan>
                  {pin.sub ? (
                    <TSpan fontWeight="normal" fill="#6B7280">{` ${pin.sub}`}</TSpan>
                  ) : null}
                </SvgText>
              </G>
            );
          })}
        </Svg>
      </View>

      <Text className="text-[11px] text-gray-400 text-center w-full">
        핀을 누르면 사진과 위치 설명을 볼 수 있어요.
      </Text>

      <PinDetailModal
        visible={modalVisible}
        buildingName={buildingName}
        selectedFloor={selectedFloor}
        selectedPin={selectedPin}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}