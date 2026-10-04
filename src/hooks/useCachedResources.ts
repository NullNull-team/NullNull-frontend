import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // 모든 폰트 파일 비동기 로드
        await Font.loadAsync({
          'IBMPlexSansKR-Bold': require('../assets/fonts/IBMPlexSansKR-Bold.ttf'),
          'IBMPlexSansKR-ExtraLight': require('../assets/fonts/IBMPlexSansKR-ExtraLight.ttf'),
          'IBMPlexSansKR-Light': require('../assets/fonts/IBMPlexSansKR-Light.ttf'),
          'IBMPlexSansKR-Medium': require('../assets/fonts/IBMPlexSansKR-Medium.ttf'),
          'IBMPlexSansKR-Regular': require('../assets/fonts/IBMPlexSansKR-Regular.ttf'),
          'IBMPlexSansKR-SemiBold': require('../assets/fonts/IBMPlexSansKR-SemiBold.ttf'),
          'IBMPlexSansKR-Thin': require('../assets/fonts/IBMPlexSansKR-Thin.ttf'),
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