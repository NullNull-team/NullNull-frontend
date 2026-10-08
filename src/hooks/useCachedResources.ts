import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          'Pretendard-Thin': require('../assets/fonts/Pretendard-Thin.otf'),
          'Pretendard-ExtraLight': require('../assets/fonts/Pretendard-ExtraLight.otf'),
          'Pretendard-Light': require('../assets/fonts/Pretendard-Light.otf'),
          'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
          'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
          'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
          'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
          'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.otf'),
          'Pretendard-Black': require('../assets/fonts/Pretendard-Black.otf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}