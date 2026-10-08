import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function GuideScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          accessibilityLabel="뒤로"
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>안내</Text>
      </View>

      <View style={styles.content}>
        <View style={[styles.card, styles.measurementCard]}>
          <Text style={styles.cardTitle}>측정 방식</Text>

          <Text style={styles.description}>
            엘리베이터 앞 센서가 주변 기기의 블루투스 신호를 집계해
            혼잡도를 추정합니다.{'\n'}
            측정을 위해 별도의 앱 설치나 블루투스 설정 변경은 필요하지
            않습니다.
          </Text>
        </View>

        <View style={[styles.card, styles.privacyCard]}>
          <Text style={styles.cardTitle}>저장하지 않는 정보</Text>

          <View style={styles.privacyList}>
            <Text style={styles.privacyItem}>기기 식별자 (MAC 주소)</Text>
            <Text style={styles.privacyItem}>개인 위치</Text>
            <Text style={styles.privacyItem}>이동 기록</Text>
          </View>

          <Text style={styles.privacyNote}>
            개인을 특정하는 정보는 저장하지 않습니다.{'\n'}
            즐겨찾기는 사용자 기기에만 저장됩니다.
          </Text>
        </View>

        <View style={[styles.card, styles.accuracyCard]}>
          <Text style={styles.cardTitle}>측정값의 정확도</Text>

          <Text style={styles.description}>
            한 사람이 휴대폰·워치·이어폰 등 여러 기기를 소지할 수 있어
            실제 인원과 차이가 날 수 있습니다. 혼잡도는 이용 판단을 돕는
            참고 정보입니다.
          </Text>
        </View>

        <Text style={styles.footer}>학술제 프로젝트 · 팀 널널</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    overflow: 'hidden',
    backgroundColor: '#EEF2F7',
  },

  header: {
    position: 'relative',
    width: 390,
    height: 64,
  },

  backButton: {
    position: 'absolute',
    left: 4,
    top: 12,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    color: '#121A26',
    fontSize: 34,
    fontWeight: '300',
    lineHeight: 34,
  },

  title: {
    position: 'absolute',
    left: 52,
    top: 22,
    color: '#121A26',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },

  content: {
    paddingTop: 4,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },

  card: {
    width: 358,
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9E0EA',
  },

  measurementCard: {
    height: 156,
  },

  privacyCard: {
    height: 213,
  },

  accuracyCard: {
    height: 134,
  },

  cardTitle: {
    marginBottom: 12,
    color: '#121A26',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },

  description: {
    color: '#394556',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  privacyList: {
    gap: 4,
  },

  privacyItem: {
    color: '#394556',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 23,
  },

  privacyNote: {
    marginTop: 12,
    paddingTop: 10,
    color: '#56637A',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 23,
  },

  footer: {
    color: '#56637A',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 17,
    textAlign: 'center',
  },
});