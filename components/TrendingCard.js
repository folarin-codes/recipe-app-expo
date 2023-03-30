import { StyleSheet, Text, View , Image, Platform, TouchableOpacity} from 'react-native'
import React from 'react'

import { BlurView } from 'expo-blur'

import { SIZES, COLORS, FONTS, icons } from '../constants'

const RecipeCardDetail = ({ recipeItem }) => {
      return (
            <View style={{ flex: 1 }}>
                  
                  <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>

                        <Text style={{
                              width:"70%",
                              color: COLORS.white,
                              ...FONTS.h3, fontSize:18
                        }}>{recipeItem.name}</Text>

                        <Image style={{
                              width: 20, height: 20, tintColor: COLORS.darkGreen,
                              marginRight: SIZES.base
                        }} source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark} />

                     

                  </View>

                  <Text style={{
                              color:COLORS.lightGray,...FONTS.body4
                        }}>{recipeItem.duration} | {recipeItem.serving } Serving</Text>

            </View>
      )
}

const RecipeCardInfo = ({ recipeItem }) => {
      return (
            <BlurView intensity={100} tint='dark' style={styles.recipeCardContainer}>
                  <RecipeCardDetail recipeItem={recipeItem} />

            </BlurView>
            
      )
}

const TrendingCard = ({containerStyle, recipeItem, onPress}) => {
  return (
        <TouchableOpacity style={{
              marginTop: SIZES.radius,
              height: 350,
              width: 250,
              marginRight: 20,
              borderRadius: SIZES.radius,
              ...containerStyle
        }} onPress={onPress}>
              <Image source={recipeItem.image} 
                    resizeMode={'cover'}
                    style={{
                          height: 350,
                          width: 250,
                          borderRadius: SIZES.radius
              }}
              />

              <View style={{
                    position: 'absolute',
                    top: 20, left: 15, paddingHorizontal: SIZES.radius, paddingVertical: 5, backgroundColor: COLORS.transparentGray, borderRadius: SIZES.radius
              }}>
                    <Text style={{
                          color: COLORS.white,
                          ...FONTS.h4
                    }}>{recipeItem.category}</Text>
                    
              </View>
              
            <RecipeCardInfo recipeItem={recipeItem} />
              
    </TouchableOpacity>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
      recipeCardContainer: {
            position: 'absolute',
            bottom: 10, left: 10, right: 10, height: 100, paddingVertical: SIZES.radius, paddingHorizontal: SIZES.base, borderRadius:SIZES.radius, 
      }
})