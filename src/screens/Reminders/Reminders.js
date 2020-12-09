import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {colors} from '../../config/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';
import {styles} from './styles';
const days = [
  {title: 'SU', active: true},
  {title: 'M', active: true},
  {title: 'T', active: true},
  {title: 'W', active: true},
  {title: 'TH', active: false},
  {title: 'F', active: false},
  {title: 'S', active: true},
];
export const Reminders = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(true);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>What time would you </Text>
        <Text style={styles.heading}>like to meditate?</Text>

        <Text style={styles.subHeading}>
          Any time you can choose but We recommend first thing in th morning.
        </Text>
      </View>
      <View style={styles.timePickerWrapper}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>

      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Which day would you </Text>
        <Text style={styles.heading}>like to meditate?</Text>

        <Text style={styles.subHeading}>
          Everyday is best, but we recommend picking at least five.
        </Text>
      </View>
      <View style={styles.dayContainer}>
        {days.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.dayItem,
                {
                  backgroundColor: item.active
                    ? colors.heading
                    : colors.secondaryBg,
                },
              ]}>
              <Text
                style={[
                  styles.dayTitle,
                  {color: item.active ? colors.whiteShade : colors.gray},
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.btnWrapper}>
        <PrimaryButton background={colors.primary} label={'SAVE'} />

        <PrimaryButton
          background={colors.white}
          color={colors.heading}
          label={'NO THANKS'}
        />
      </View>
    </View>
  );
};
