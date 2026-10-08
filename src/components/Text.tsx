import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

interface TextProps extends RNTextProps {
  className?: string;
}

export default function Text({
  className = '',
  ...props
}: TextProps) {
  return (
    <RNText
      className={`font-regular ${className}`}
      {...props}
    />
  );
}