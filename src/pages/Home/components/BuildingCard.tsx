import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type BuildingCardProps = {
  name: string;
  pending?: boolean;
  favorite?: boolean;
};

export default function BuildingCard({
  name,
  pending = false,
  favorite = false,
}: BuildingCardProps) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Text style={pending ? styles.pendingName : styles.name}>
          {name}
        </Text>

        {pending ? (
          <Text style={styles.pendingText}>준비 중</Text>
        ) : (
          <View style={styles.congestionPlaceholder}>
            <View style={styles.chipPlaceholder} />
            <View style={styles.chipPlaceholder} />
          </View>
        )}
      </View>

      <View style={styles.rightContent}>
        <Text style={styles.chevron}>›</Text>

        <TouchableOpacity
          onPress={() => setIsFavorite((prev) => !prev)}
          activeOpacity={0.6}
          style={styles.favoriteButton}
        >
          <Text
            style={[
              styles.favorite,
              isFavorite && styles.favoriteActive,
            ]}
          >
            {isFavorite ? '★' : '☆'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 358,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9E0EA',
    borderRadius: 12,
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  name: {
    color: '#121A26',
    fontSize: 16,
    fontWeight: '700',
  },

  pendingName: {
    color: '#394556',
    fontSize: 15,
    fontWeight: '500',
  },

  pendingText: {
    color: '#56637A',
    fontSize: 12,
  },

  congestionPlaceholder: {
    flexDirection: 'row',
    gap: 6,
  },

  chipPlaceholder: {
    width: 65,
    height: 24,
    borderRadius: 999,
    backgroundColor: '#F7EBC8',
  },

  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  chevron: {
    color: '#56637A',
    fontSize: 25,
  },

  favoriteButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  favorite: {
    color: '#8E9AAD',
    fontSize: 24,
  },

  favoriteActive: {
    color: '#F2B705',
  },
});