import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../home/components/header'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './message-styles';
import { Colors } from '../../shared/constants/theme';
import MatchList from './components/MatchList';
import { stories } from '../../shared/mockupdata/data';
import MessageList from './components/MessageList';

const MessageScreen = () => {
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList | null>(null);

  return (
    <View style={[{ marginTop: insets.top, backgroundColor: Colors.white, flex: 1 }]}>
      <Header
        IconLeft={
          {
            path: "",
            color: "",
            size: 30,
            stroke: 1
          }
        }
        IconRight={
          {
            path: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",
            color: Colors.black,
            size: 26,
            stroke: 0.5
          }
        }
        check={false} />


      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}

      >
        <View
          style={styles.headerContainer}>
          <Text
            style={styles.textHeader}
          >คู่แมตช์ใหม่</Text>
          <View style={styles.countContainer}>
            <Text style={styles.textCount}>99</Text>
          </View>
        </View>

        {/* match */}
        <View
          onTouchStart={() => flatListRef.current?.setNativeProps({ scrollEnabled: true })}
          onTouchEnd={() => flatListRef.current?.setNativeProps({ scrollEnabled: false })}
        >
          <FlatList
            ref={(ref) => (flatListRef.current = ref)}
            data={stories}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MatchList image_url={item.avatar} name={item.user} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            bounces={true}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
        </View>

        <View
          style={styles.headerContainer}>
          <Text
            style={styles.textHeader}
          >ข้อความ</Text>

        </View>
        {/* message */}
        <View
          style={styles.messageContainer}
        >
          {stories.map((item, index) => (
            <View key={index}>
              <MessageList image_url={item.avatar} name={item.user} message={item.message} />
            </View>
          ))}
          {stories.map((item, index) => (
            <View key={index}>
              <MessageList image_url={item.avatar} name={item.user} message={item.message} />
            </View>
          ))}
          {stories.map((item, index) => (
            <View key={index}>
              <MessageList image_url={item.avatar} name={item.user} message={item.message} />
            </View>
          ))}
        </View>

      </ScrollView>

    </View>
  )
}

export default MessageScreen