import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
const topics = [
  {
    title: 'Reduce Stress',
    url: require('../../../assets/images/topics/topic1cardbg.png'),
    background: '#A3ABFF',
    labelColor: '#FEF9F3',
  },
  {
    title: 'Improve Perfomance',
    url: require('../../../assets/images/topics/topic2cardbg.png'),
    background: '#FA6E5A',
    labelColor: '#FEF9F3',
  },
  {
    title: 'Increase Happiness',
    url: require('../../../assets/images/topics/topic3cardbg.png'),
    background: '#FEB18F',
    labelColor: '#3F414E',
  },
  {
    title: 'Reduce Anxiety',
    url: require('../../../assets/images/topics/topic4cardbg.png'),
    background: '#FFCF86',
    labelColor: '#3F414E',
  },
  {
    title: 'Personal Growth',
    url: require('../../../assets/images/topics/topic5cardbg.png'),
    background: '#6CB28E',
    labelColor: '#FFECCC',
  },
  {
    title: 'Lorem Ipsum',
    url: require('../../../assets/images/topics/topic4cardbg.png'),
    background: '#3F414E',
    labelColor: '#EBEAEC',
  },
  {
    title: 'Better Sleep',
    url: require('../../../assets/images/topics/topic5cardbg.png'),
    background: '#3F414E',
    labelColor: '#EBEAEC',
  },
];

export const ChooseTopic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require('../../../assets/images/bg2.png')}
      />
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>What Brings You</Text>
        <Text style={styles.subHeading}>to Silent Moon</Text>
        <Text style={styles.title}>choose a topic to focuse on:</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
        <View style={styles.row}>
          <View>
            {topics.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,
                        marginRight: 15,
                        marginBottom: 15,
                      },
                    ]}>
                    <Image style={styles.topicImage} source={item.url} />
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
          <View style={{flex: 1}}>
            {topics.map((item, index) => {
              if (index % 2 != 0) {
                return (
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,

                        marginBottom: 15,
                      },
                    ]}>
                    <Image style={styles.topicImage} source={item.url} />
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
