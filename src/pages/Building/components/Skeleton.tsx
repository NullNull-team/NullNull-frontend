import React from 'react';
import { View } from 'react-native';

export function Skeleton({ className, style }: { className?: string; style?: any }) {
  return (
    <View 
      className={`bg-gray-200 rounded-[8px] animate-pulse ${className || ''}`} 
      style={style}
    />
  );
}