import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
export const Music = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/bgShape7.png')}
        style={styles.bgImage1}
      />
      <Image
        source={require('../../../assets/images/bgShape8.png')}
        style={styles.bgImage2}
      />
      <Image
        source={require('../../../assets/images/bgShape9.png')}
        style={styles.bgImage3}
      />
      <View style={styles.header}>
        <View>
          <Image source={require('../../../assets/images/backWhite.png')} />
        </View>
        <View style={styles.headerRightBtnsWrapper}>
          <Image
            style={{marginRight: 15}}
            source={require('../../../assets/images/heartGray.png')}
          />
          <Image source={require('../../../assets/images/downloadGray.png')} />
        </View>
      </View>

      <View style={styles.songContent}>
        <Text style={styles.title}>Focuss Attention</Text>
        <Text style={styles.subTitle}>7 DAYS OF CALM</Text>
      </View>
      <View style={styles.playerControlWrapper}>
        <View style={styles.playerControl}>
          <Image source={require('../../../assets/images/fastBackward.png')} />
          <Image source={require('../../../assets/images/playOrStop.png')} />
          <Image source={require('../../../assets/images/fastForward.png')} />
        </View>
        <View style={styles.progressBar}>
          <View style={styles.bar}>
            <Image
              style={styles.progressDot}
              source={require('../../../assets/images/dot.png')}
            />
            <View style={styles.progressCompleted} />
          </View>
          <View style={styles.timerWrapper}>
            <Text>1:30</Text>
            <Text>45:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
