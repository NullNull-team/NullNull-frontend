import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import CampusMap from '../../assets/maps/campus-map.svg';

import MediumCongestion from '../../assets/congestion/medium.svg';
import HighCongestion from '../../assets/congestion/high.svg';
import VeryHighCongestion from '../../assets/congestion/veryhigh.svg';

import CloseIcon from '../../assets/icons/x.svg';

import MapBuildingPin from './components/MapBuildingPin';

const INITIAL_SCALE = 2.0;
const MIN_SCALE = 0.8;
const MAX_SCALE = 3.0;

const INITIAL_X = -220;
const INITIAL_Y = -150;

export default function MapScreen({ navigation }: any) {
  const scale = useSharedValue(INITIAL_SCALE);
  const savedScale = useSharedValue(INITIAL_SCALE);

  const translateX = useSharedValue(INITIAL_X);
  const translateY = useSharedValue(INITIAL_Y);

  const savedX = useSharedValue(INITIAL_X);
  const savedY = useSharedValue(INITIAL_Y);

  // 손가락으로 지도 이동
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value =
        savedX.value + event.translationX;

      translateY.value =
        savedY.value + event.translationY;
    })
    .onEnd(() => {
      savedX.value = translateX.value;
      savedY.value = translateY.value;
    });

  // 두 손가락 확대 / 축소
  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      const nextScale =
        savedScale.value * event.scale;

      scale.value = Math.min(
        Math.max(nextScale, MIN_SCALE),
        MAX_SCALE,
      );
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const mapGesture = Gesture.Simultaneous(
    panGesture,
    pinchGesture,
  );

  // 지도 위치 + 확대/축소
  const animatedMapStyle = useAnimatedStyle(() => ({
    transformOrigin: '0px 0px',

    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
      {
        scale: scale.value,
      },
    ],
  }));

  // 건물 박스 크기는 확대해도 고정
  const inverseScaleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: 1 / scale.value,
      },
    ],
  }));

  // + 버튼
  const handleZoomIn = () => {
    const nextScale = Math.min(
      savedScale.value + 0.25,
      MAX_SCALE,
    );

    scale.value = withTiming(nextScale, {
      duration: 180,
    });

    savedScale.value = nextScale;
  };

  // - 버튼
  const handleZoomOut = () => {
    const nextScale = Math.max(
      savedScale.value - 0.25,
      MIN_SCALE,
    );

    scale.value = withTiming(nextScale, {
      duration: 180,
    });

    savedScale.value = nextScale;
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        {/* 지도 */}
        <GestureDetector gesture={mapGesture}>
          <Animated.View
            style={[
              styles.mapCanvas,
              animatedMapStyle,
            ]}
          >
            <CampusMap
              width={800}
              height={441}
            />

            {/* 다솔관 */}
            <MapBuildingPin
              name="다솔관"
              x={205}
              y={202}
              width={234}
              markerLeft={110}
              chipLeft={59}
              navigation={navigation}
              inverseScaleStyle={inverseScaleStyle}
            >
              <VeryHighCongestion
                width={65}
                height={24}
              />

              <MediumCongestion
                width={65}
                height={24}
              />
            </MapBuildingPin>

            {/* 마리아관 */}
            <MapBuildingPin
              name="마리아관"
              x={234}
              y={320}
              width={175}
              markerLeft={81}
              chipLeft={71}
              navigation={navigation}
              inverseScaleStyle={inverseScaleStyle}
            >
              <MediumCongestion
                width={65}
                height={24}
              />
            </MapBuildingPin>

            {/* 김수환관 */}
            <MapBuildingPin
              name="김수환관"
              x={188}
              y={340}
              width={248}
              markerLeft={117}
              chipLeft={71}
              navigation={navigation}
              inverseScaleStyle={inverseScaleStyle}
            >
              <HighCongestion
                width={65}
                height={24}
              />

              <MediumCongestion
                width={65}
                height={24}
              />
            </MapBuildingPin>
          </Animated.View>
        </GestureDetector>

        {/* 상단 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            accessibilityLabel="지도 닫기"
          >
            <CloseIcon
              width={22}
              height={22}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            캠퍼스 지도
          </Text>

          <Text style={styles.headerStatus}>
            측정 중 3
          </Text>
        </View>

        {/* 확대 / 축소 */}
        <View style={styles.zoom}>
          <TouchableOpacity
            style={styles.zoomIn}
            activeOpacity={0.7}
            onPress={handleZoomIn}
          >
            <Text style={styles.zoomText}>
              +
            </Text>
          </TouchableOpacity>

          <View style={styles.zoomDivider} />

          <TouchableOpacity
            style={styles.zoomOut}
            activeOpacity={0.7}
            onPress={handleZoomOut}
          >
            <Text style={styles.zoomText}>
              −
            </Text>
          </TouchableOpacity>
        </View>

        {/* 하단 안내 */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            건물을 누르면 바로 상세로 이동해요
          </Text>

          <Text style={styles.footerDescription}>
            끌어서 이동 · 두 손가락으로 확대
          </Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  container: {
    position: 'relative',
    width: '100%',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  mapCanvas: {
    position: 'absolute',

    left: 0,
    top: 0,

    width: 800,
    height: 441,
  },

  header: {
    position: 'absolute',

    left: 16,
    top: 16,

    right: 16,
    height: 54,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#D9E0EA',

    borderRadius: 16,
  },

  closeButton: {
    position: 'absolute',

    left: 7,
    top: 5,

    width: 44,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    position: 'absolute',

    left: 55,
    top: 16,

    color: '#121A26',

    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
  },

  headerStatus: {
    position: 'absolute',

    right: 17,
    top: 18,

    color: '#56637A',

    fontSize: 12,
    lineHeight: 17,
  },

  zoom: {
    position: 'absolute',

    right: 16,
    bottom: 170,

    width: 46,
    height: 91,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#D9E0EA',

    borderRadius: 14,
  },

  zoomIn: {
    position: 'absolute',

    left: 0,
    top: 0,

    width: 44,
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',
  },

  zoomDivider: {
    position: 'absolute',

    left: 1,
    top: 45,

    width: 42,
    height: 1,

    backgroundColor: '#D9E0EA',
  },

  zoomOut: {
    position: 'absolute',

    left: 0,
    top: 46,

    width: 44,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',
  },

  zoomText: {
    color: '#121A26',

    fontSize: 25,
    fontWeight: '300',
    lineHeight: 28,
  },

  footer: {
    position: 'absolute',

    left: 16,
    bottom: 20,

    right: 16,
    height: 84,

    paddingHorizontal: 17,
    paddingVertical: 15,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#D9E0EA',

    borderRadius: 18,
  },

  footerTitle: {
    color: '#121A26',

    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
  },

  footerDescription: {
    marginTop: 8,

    color: '#56637A',

    fontSize: 12,
    lineHeight: 17,
  },
});
