
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Display from '../../../utils/Display';

interface MatchListProps {
  image_url: number;
  name: string;
}

const MatchList: React.FC<MatchListProps> = ({
  image_url,
  name
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image_url}
        style={styles.image}
      />
      <Text style={styles.textName} numberOfLines={1}>{name}</Text>
    </View>
  )
}

export default MatchList

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
    justifyContent: 'center'
  },
  textName: {
    fontSize: 12,
    fontFamily: 'Kanit_400Regular',
  },
  image: {
    width: Display.setWidth(19),
    height: Display.setWidth(19),
    borderRadius: Display.setWidth(18),
  }
})