import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Animated,
  Easing,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Text from '../../../components/Text';

interface PinDetailModalProps {
  visible: boolean;
  buildingName: string;
  selectedFloor: number;
  selectedPin: string;
  onClose: () => void;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
// 웹에는 네이티브 애니메이션 모듈이 없어서 웹에서만 끔
const USE_NATIVE_DRIVER = Platform.OS !== 'web';

export default function PinDetailModal({
  visible,
  buildingName,
  selectedFloor,
  selectedPin,
  onClose,
}: PinDetailModalProps) {
  // 닫힘 애니메이션이 끝날 때까지 Modal을 유지하기 위한 상태
  const [mounted, setMounted] = useState(visible);

  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const sheetTranslateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      setMounted(true);
      Animated.parallel([
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: USE_NATIVE_DRIVER,
        }),
        Animated.timing(sheetTranslateY, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: USE_NATIVE_DRIVER,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: USE_NATIVE_DRIVER,
        }),
        Animated.timing(sheetTranslateY, {
          toValue: SCREEN_HEIGHT,
          duration: 250,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: USE_NATIVE_DRIVER,
        }),
      ]).start(() => setMounted(false));
    }
  }, [visible, backdropOpacity, sheetTranslateY]);

  return (
    <Modal
      visible={mounted}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        {/* 어두운 배경: 제자리에서 페이드만 됨 */}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0,0,0,0.6)', opacity: backdropOpacity },
          ]}
        />

        {/* 바깥 영역을 누르면 닫힘 */}
        <Pressable style={{ flex: 1 }} onPress={onClose} />

        {/* 바텀시트: 흰 배경 하나 안에 모든 내용이 들어감 */}
        <Animated.View
          style={{
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 40,
            transform: [{ translateY: sheetTranslateY }],
          }}
        >
          {/* 제목 줄 */}
          <View className="flex-row justify-between items-center w-full mb-5">
            <Text className="text-[20px] font-bold text-gray-950">
              {`${buildingName} ${selectedFloor}층`}
            </Text>
            <TouchableOpacity onPress={onClose} className="p-2 -mr-2">
              <Text className="text-xl text-gray-500 font-bold">✕</Text>
            </TouchableOpacity>
          </View>

          {/* 핀 이름 */}
          <Text className="text-[17px] font-bold text-gray-900 mb-4">{selectedPin}</Text>

          {/* 사진 영역 */}
          <View className="w-full rounded-2xl bg-[#EDEFF3] overflow-hidden mb-4">
            <View className="h-[200px] justify-center items-center">
              <Text className="text-[14px] text-gray-500 font-bold">실제 엘리베이터 사진</Text>
            </View>
            <View className="bg-gray-50 py-3">
              <Text className="text-[11px] text-gray-400 text-center">
                여기에 촬영한 사진을 넣어주세요
              </Text>
            </View>
          </View>

          {/* 위치 설명 박스 */}
          <View className="w-full bg-white border border-gray-200 rounded-2xl p-4 flex-row items-start">
            <View className="mr-2 mt-0.5">
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path
                  d="M5.33317 12.6668C5.33317 13.4032 4.73622 14.0002 3.99984 14.0002C3.26346 14.0002 2.6665 13.4032 2.6665 12.6668C2.6665 11.9304 3.26346 11.3335 3.99984 11.3335C4.73622 11.3335 5.33317 11.9304 5.33317 12.6668Z"
                  stroke="#C0392B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M13.3332 3.33333C13.3332 4.06971 12.7362 4.66667 11.9998 4.66667C11.2635 4.66667 10.6665 4.06971 10.6665 3.33333C10.6665 2.59695 11.2635 2 11.9998 2C12.7362 2 13.3332 2.59695 13.3332 3.33333Z"
                  stroke="#C0392B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.33333 12.6665H10C10.5304 12.6665 11.0391 12.4558 11.4142 12.0807C11.7893 11.7056 12 11.1969 12 10.6665C12 10.1361 11.7893 9.62736 11.4142 9.25229C11.0391 8.87722 10.5304 8.6665 10 8.6665H6C5.46957 8.6665 4.96086 8.45579 4.58579 8.08072C4.21071 7.70565 4 7.19694 4 6.6665C4 6.13607 4.21071 5.62736 4.58579 5.25229C4.96086 4.87722 5.46957 4.6665 6 4.6665H10.6667"
                  stroke="#C0392B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <View className="flex-1">
              <Text className="text-[14px] font-bold text-gray-900 mb-1">위치</Text>
              <Text className="text-[13px] text-gray-600 leading-5">
                {selectedFloor}층 평면도의 {selectedPin} 핀 위치예요. 현장 확인 후 상세 설명을 넣어요.
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}