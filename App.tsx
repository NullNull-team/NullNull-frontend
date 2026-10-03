// @ts-ignore
import "./global.css";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

// 1. TanStack Query 클라이언트 생성
const queryClient = new QueryClient();

// 2. 스택 네비게이터 생성
const Stack = createNativeStackNavigator();

// 3. API 호출 함수 (JSONPlaceholder 더미 API 활용)
async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!response.ok) {
    throw new Error('네트워크 요청에 실패했습니다.');
  }
  return response.json();
}

// 홈 화면 컴포넌트 (TanStack Query 적용)
function HomeScreen({ navigation }: any) {
  // useQuery를 사용한 데이터 패칭
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="mt-4 text-gray-500">데이터를 불러오는 중...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500 font-bold">에러가 발생했습니다!</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold mb-4 text-gray-800">TanStack Query API 연동 테스트 🔥</Text>
      
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 mb-3 rounded-xl shadow-sm border border-gray-100">
            <Text className="font-bold text-base text-blue-600 mb-1">{item.title}</Text>
            <Text className="text-gray-600 text-sm" numberOfLines={2}>{item.body}</Text>
          </View>
        )}
      />

      <TouchableOpacity 
        className="bg-blue-500 p-4 rounded-xl items-center mt-4 shadow"
        onPress={() => navigation.navigate('Detail')}
      >
        <Text className="text-white font-bold text-base">상세 페이지로 이동</Text>
      </TouchableOpacity>
    </View>
  );
}

// 상세 화면 컴포넌트
function DetailScreen({ navigation }: any) {
  return (
    <View className="flex-1 items-center justify-center bg-purple-500">
      <Text className="text-white text-2xl font-bold mb-4">Detail 화면 ✨</Text>
      <TouchableOpacity 
        className="bg-white px-6 py-3 rounded-xl shadow"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-purple-600 font-bold text-base">뒤로 가기</Text>
      </TouchableOpacity>
    </View>
  );
}

// 메인 App 컴포넌트
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: '홈 (Query 적용)' }} 
            />
            <Stack.Screen 
              name="Detail" 
              component={DetailScreen} 
              options={{ title: '상세 페이지' }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}