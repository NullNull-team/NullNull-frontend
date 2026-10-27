import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BuildingCard from './components/BuildingCard';

import InfoIcon from '../../assets/icons/info.svg';
import ShieldIcon from '../../assets/icons/shield.svg';

import LiveStatus from '../../assets/status/live.svg';
import DelayStatus from '../../assets/status/delay.svg';
import OfflineStatus from '../../assets/status/offline.svg';

import CampusMap from '../../assets/maps/campus-map.svg';

type StatusType = 'live' | 'delay' | 'offline';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [status] = React.useState<StatusType>('live');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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

        <View style={styles.statusIcon}>
          {status === 'live' && (
            <LiveStatus width={62} height={26} />
          )}

          {status === 'delay' && (
            <DelayStatus width={62} height={26} />
          )}

          {status === 'offline' && (
            <OfflineStatus width={62} height={26} />
          )}
        </View>
      </View>

      {/* 개인정보 안내 */}
      <TouchableOpacity
        style={styles.privacy}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Guide' as never)}
      >
        <ShieldIcon width={18} height={18} />

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
      <TouchableOpacity
        style={styles.map}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Map' as never)}
      >
        <CampusMap
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        />
      </TouchableOpacity>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F7',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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

  statusIcon: {
    width: 62,
    height: 26,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* 개인정보 안내 */

  privacy: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#E3E9F1',
  },

  privacyText: {
    flex: 1,
    color: '#394556',
    fontSize: 13,
    lineHeight: 18,
  },

  /* Section */

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

  /* 캠퍼스 지도 */

  map: {
    width: '100%',
    height: 180,

    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D9E0EA',

    backgroundColor: '#FFFFFF',

    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* 건물 */

  buildings: {
    gap: 4,
  },
});
