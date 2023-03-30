import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, SafeAreaView,Image, TextInput,FlatList
} from 'react-native';

import { COLORS, SIZES, dummyData, icons, images, FONTS } from '../constants'

import { CategoryCard, TrendingCard } from '../components';

const Home = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                alignItems: 'center',
                height:80, justifyContent:'space-between'
            }}>
                <View>
                    <Text style={{
                        color: COLORS.darkGreen,
                        ...FONTS.h2
                    }}>Hello Adefolarin,</Text>

                    <Text style={{
                        marginTop: 3,
                        color:COLORS.gray,...FONTS.body3
                    }}>What do you want to cook today?</Text>
                </View>

                <TouchableOpacity onpress={() => console.log('adefolarin')}>
                    <Image source={images.profile}
                        style={{width:40, height:40, borderRadius:20}}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray,
               
            }}>
                
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:COLORS.gray
                    }}
                />

                <TextInput placeholder='Search Recipes...'
                    placeholderTextColor={COLORS.gray}
                    style={{
                        paddingLeft: SIZES.radius,
                        ...FONTS.body3

                    }}
                />

            </View>
        )
    }

    function renderSeeRecipeCard() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                borderRadius: 10,
                backgroundColor:COLORS.lightGreen
            }}>
                
                <View style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent:"center"
                }}>
                    <Image source={images.recipe} style={{
                        width: 80,
                        height:80
                    }} />

                </View>
                <View style={{
                    flex: 1,
                    paddingVertical:SIZES.radius
                }}>
                    <Text style={{ width: '70%', ...FONTS.body4 }}>You have 12 recipes you haven't tried yet</Text>
                    
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => console.log('show recipe')}>
                        <Text style={{
                            color: COLORS.darkGreen,
                            textDecorationLine: "underline",
                            ...FONTS.h4
                        }}>
                            See Recipe
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>
        )
    }

    function renderTrendingSection() {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                
                <Text style={{marginHorizontal:SIZES.padding,...FONTS.h2}}>
                    Trending Recipe
                </Text>
                <FlatList
                    data={dummyData.trendingRecipes} horizontal showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard
                                recipeItem={item}
                                containerStyle={{ marginLeft: index === 0 ? SIZES.padding : 0 }} 
                                onPress={()=> navigation.navigate("Recipe", {recipe : item})}
                                />
                          
                        )
                    }}
                />

            </View>
        )
    }

    function renderCategoryHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                marginTop: 20,
                marginHorizontal:SIZES.padding
            }}>
                <Text
                    style={{
                        flex:1,...FONTS.h2
                    }}
                >Categories</Text>

                <TouchableOpacity>
                    <Text style={{
                        color:COLORS.gray,...FONTS.body4
                    }}>
                        View all
                    </Text>
                </TouchableOpacity>

            </View>
        )
        
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            categoryItem={item}
                            containerStyle={{ marginHorizontal: SIZES.padding }}
                            onPress={()=> navigation.navigate("Recipe", {recipe:item})}
                        />
                    )
                }}

                ListHeaderComponent={() => {
                    return (
                        <View>
                            {renderHeader()}
                            {renderSearchBar()}
                            {renderSeeRecipeCard()}
                            {renderTrendingSection()}
                            {renderCategoryHeader()}
                            
                       </View>
                      
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View style={{marginBottom:100}} />
                    )
                }}
            />

        </SafeAreaView>
    
    )
}

export default Home;