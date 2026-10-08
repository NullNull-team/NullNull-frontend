import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BuildingCard from './components/BuildingCard';
import InfoIcon from '../../assets/icons/info.svg';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <View style={[styles.logoDot, styles.logoDot1]} />
          <View style={[styles.logoDot, styles.logoDot2]} />
          <View style={[styles.logoDot, styles.logoDot3]} />
          <View style={[styles.logoDot, styles.logoDot4]} />
        </View>

        <View style={styles.brand}>
          <Text style={styles.brandTitle}>널널</Text>
          <Text style={styles.brandSubtitle}>
            가톨릭대학교 혼잡도
          </Text>
        </View>

        <View style={styles.live}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>실시간</Text>
        </View>
      </View>

      {/* 개인정보 안내 */}
      <TouchableOpacity
        style={styles.privacy}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Guide' as never)}
      >
        <View style={styles.shieldIcon}>
          <Text style={styles.shieldCheck}>✓</Text>
        </View>

        <Text style={styles.privacyText}>
          개인을 식별하지 않습니다
        </Text>

        <InfoIcon width={18} height={18} />
      </TouchableOpacity>

      {/* 캠퍼스 지도 제목 */}
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>
          캠퍼스 지도
        </Text>

        <Text style={styles.sectionDescription}>
          누르면 크게 볼 수 있어요
        </Text>
      </View>

      {/* 캠퍼스 지도 */}
      <View style={styles.map}>
        <Text style={styles.mapLabel}>
          캠퍼스맵 이미지 자리{'\n'}
          (원본 캠퍼스맵으로 교체)
        </Text>

        <View style={[styles.mapDot, styles.mapDot1]} />
        <View style={[styles.mapDot, styles.mapDot2]} />
        <View style={[styles.mapDot, styles.mapDot3]} />
      </View>

      {/* 건물 제목 */}
      <View
        style={[
          styles.sectionHeading,
          styles.buildingHeading,
        ]}
      >
        <Text style={styles.sectionTitle}>
          건물
        </Text>

        <Text style={styles.sectionDescription}>
          누르면 상세로 이동해요
        </Text>
      </View>

      {/* 건물 목록 */}
      <View style={styles.buildings}>
        <BuildingCard
          name="김수환관"
          favorite
        />

        <BuildingCard
          name="마리아관"
        />

        <BuildingCard
          name="다솔관"
        />

        <BuildingCard
          name="니콜스관"
          pending
        />

        <BuildingCard
          name="밤비노관"
          pending
        />

        <BuildingCard
          name="비르투스관"
          pending
        />

        <BuildingCard
          name="소피이바라관"
          pending
        />

        <BuildingCard
          name="미카엘관"
          pending
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    paddingHorizontal: 16,
    paddingBottom: 16,
    overflow: 'hidden',
    backgroundColor: '#EEF2F7',
  },

  /* Header */

  header: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logo: {
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#1C3F94',
  },

  logoDot: {
    position: 'absolute',
    top: 21.5,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  logoDot1: {
    left: 11,
    backgroundColor: '#FFFFFF',
  },

  logoDot2: {
    left: 18,
  },

  logoDot3: {
    left: 25,
  },

  logoDot4: {
    left: 32,
  },

  brand: {
    justifyContent: 'center',
  },

  brandTitle: {
    color: '#1C3F94',
    fontSize: 23,
    fontWeight: '700',
    lineHeight: 31,
  },

  brandSubtitle: {
    color: '#56637A',
    fontSize: 12,
    lineHeight: 17,
  },

  live: {
    width: 62,
    height: 26,
    marginLeft: 'auto',
    paddingHorizontal: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,

    borderRadius: 999,
    backgroundColor: '#DCF0E8',
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#1A9C7E',
  },

  liveText: {
    color: '#0B6150',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
  },

  /* 개인정보 안내 */

  privacy: {
    width: 358,
    height: 44,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    paddingHorizontal: 12,

    borderRadius: 12,
    backgroundColor: '#E3E9F1',
  },

  shieldIcon: {
    width: 18,
    height: 18,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1.5,
    borderColor: '#56637A',
    borderRadius: 6,
  },

  shieldCheck: {
    color: '#56637A',
    fontSize: 11,
    fontWeight: '700',
  },

  privacyText: {
    flex: 1,
    color: '#394556',
    fontSize: 13,
    lineHeight: 18,
  },

  /* section title */

  sectionHeading: {
    height: 44,
    paddingTop: 15,

    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  buildingHeading: {
    paddingTop: 17,
  },

  sectionTitle: {
    color: '#121A26',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 19,
  },

  sectionDescription: {
    paddingTop: 1,
    color: '#56637A',
    fontSize: 12,
    lineHeight: 17,
  },

  /* 지도 */

  map: {
    position: 'relative',

    width: 358,
    height: 180,

    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D9E0EA',

    backgroundColor: '#DDE4EE',
  },

  mapLabel: {
    position: 'absolute',
    left: 119.5,
    top: 73,

    width: 118,

    color: '#56637A',
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
  },

  mapDot: {
    position: 'absolute',

    width: 14,
    height: 14,

    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 7,

    backgroundColor: '#1C3F94',
  },

  mapDot1: {
    left: 108,
    top: 145,
  },

  mapDot2: {
    left: 157,
    top: 111,
  },

  mapDot3: {
    left: 134,
    top: 25,
  },

  /* 건물 */

  buildings: {
    gap: 4,
  },
});