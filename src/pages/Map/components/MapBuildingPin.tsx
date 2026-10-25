import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Animated from 'react-native-reanimated';

type Props = {
  name: string;

  x: number;
  y: number;

  width: number;
  markerLeft: number;
  chipLeft: number;

  navigation: any;
  inverseScaleStyle: any;

  children: React.ReactNode;
};

export default function MapBuildingPin({
  name,
  x,
  y,
  width,
  markerLeft,
  chipLeft,
  navigation,
  inverseScaleStyle,
  children,
}: Props) {
  return (
    <Animated.View
      style={[
        styles.markerAnchor,
        {
          left: x,
          top: y,
        },
        inverseScaleStyle,
      ]}
    >
      <View
        style={[
          styles.pinContent,
          {
            width,
            left: -markerLeft,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.tag}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Building')}
        >
          <Text style={styles.buildingName}>
            {name}
          </Text>

          <View
            style={[
              styles.chips,
              {
                left: chipLeft,
              },
            ]}
          >
            {children}
          </View>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>

        <View
          style={[
            styles.tail,
            {
              left: markerLeft - 7,
            },
          ]}
        />

        <View
          style={[
            styles.pinDot,
            {
              left: markerLeft - 7,
            },
          ]}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  markerAnchor: {
    position: 'absolute',
    width: 0,
    height: 0,
  },

  pinContent: {
    position: 'absolute',
    top: -59,
    height: 65,
  },

  tag: {
    position: 'absolute',
    left: 0,
    top: 0,

    width: '100%',
    height: 40,

    backgroundColor: '#FFFFFF',

    borderWidth: 2,
    borderColor: '#1C3F94',

    borderRadius: 12,
  },

  buildingName: {
    position: 'absolute',

    left: 14,
    top: 10,

    color: '#121A26',

    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },

  chips: {
    position: 'absolute',

    top: 7,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },

  arrow: {
    position: 'absolute',

    right: 14,
    top: 6,

    color: '#1C3F94',

    fontSize: 24,
    lineHeight: 25,
  },

  tail: {
    position: 'absolute',

    top: 33,

    width: 14,
    height: 14,

    backgroundColor: '#1C3F94',

    transform: [
      {
        rotate: '45deg',
      },
    ],
  },

  pinDot: {
    position: 'absolute',

    top: 45,

    width: 14,
    height: 14,

    backgroundColor: '#1C3F94',

    borderWidth: 2,
    borderColor: '#FFFFFF',

    borderRadius: 7,
  },
});