import React, { useEffect } from 'react'; // useEffect 추가
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Building'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}