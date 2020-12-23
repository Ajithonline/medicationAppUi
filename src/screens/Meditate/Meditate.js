import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
const meditateTypes = [
  {
    title: 'All',
    isActive: true,
    imageUrl: require('../../../assets/images/medicationTypes/all.png'),
  },
  {
    title: 'My',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/my.png'),
  },
  {
    title: 'Anxious',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/anxious.png'),
  },
  {
    title: 'Sleep',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/sleep.png'),
  },
  {
    title: 'Kids',
    isActive: false,
    imageUrl: require('../../../assets/images/medicationTypes/kids.png'),
  },
];

export const Meditate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meditate</Text>
      <Text style={styles.description}>
        we can learn how to recognize when our minds are doing their normal
        everyday acrobatics.
      </Text>

      <View>
        <ScrollView
          style={styles.meditateItemWrapperContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {meditateTypes.map((item) => {
            return (
              <View style={styles.meditateItemWrapper}>
                <View
                  style={[
                    styles.meditateItem,
                    {
                      backgroundColor: item.isActive
                        ? colors.primary
                        : colors.gray,
                    },
                  ]}>
                  <Image source={item.imageUrl} />
                </View>
                <Text
                  style={[
                    styles.itemTitle,
                    {color: item.isActive ? colors.heading : colors.gray},
                  ]}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.dailyThoughtsWrapper}>
        <Image
          style={styles.bgShape1}
          source={require('../../../assets/images/bgShape4.png')}
        />
        <Image
          style={styles.bgShape2}
          source={require('../../../assets/images/bgShape5.png')}
        />
        <Image
          style={styles.bgShape3}
          source={require('../../../assets/images/bgShape6.png')}
        />
        <View>
          <Text style={styles.dailyTitle}>Daily Thought</Text>
          <Text style={styles.dailySubTitle}>MEDITATION - 3-10 MIN</Text>
        </View>
        <View>
          <Image source={require('../../../assets/images/player.png')} />
        </View>
      </View>
      <View style={styles.medicationTypeCards}>
        <View>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/images/medicationTypes/bg1.png')}
            />
            <Text style={styles.card1Txt}>7 Days of calm</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/images/medicationTypes/bg2.png')}
            />
            <Text style={styles.card1Txt}>Anxiet Release</Text>
          </View>
        </View>
        <View>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/images/medicationTypes/bg2.png')}
            />
            <Text style={styles.card1Txt}>Stress Removal</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/images/medicationTypes/bg1.png')}
            />
            <Text style={styles.card1Txt}>Morning Meditate</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
