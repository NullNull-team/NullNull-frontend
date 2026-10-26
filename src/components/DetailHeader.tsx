import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import BackIcon from '../assets/icons/back.svg';
import LiveStatus from '../assets/status/live.svg';
import DelayStatus from '../assets/status/delay.svg';
import OfflineStatus from '../assets/status/offline.svg';

type DetailHeaderProps = {
  title: string;
  onBack: () => void;
  statusLabel?: '실시간' | '잠시 지연' | '연결 끊김';
};

const statusBadges = {
  '실시간': { Icon: LiveStatus, width: 62 },
  '잠시 지연': { Icon: DelayStatus, width: 74 },
  '연결 끊김': { Icon: OfflineStatus, width: 74 },
};

export default function DetailHeader({
  title,
  onBack,
  statusLabel,
}: DetailHeaderProps) {
  const badge = statusLabel ? statusBadges[statusLabel] : undefined;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="뒤로 가기"
      >
        <BackIcon width={8} height={13} />
      </TouchableOpacity>

      <Text style={styles.title} numberOfLines={1} accessibilityRole="header">
        {title}
      </Text>

      {badge && (
        <View
          style={[styles.status, { width: badge.width }]}
          accessible
          accessibilityLabel={statusLabel}
        >
          <badge.Icon width={badge.width} height={26} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingLeft: 4,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 44,
    height: 44,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: '#121A26',
    fontFamily: 'Pretendard-Bold',
    fontSize: 18,
    lineHeight: 24,
  },
  status: {
    height: 26,
    flexShrink: 0,
  },
});
