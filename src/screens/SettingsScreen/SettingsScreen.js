import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import WrapperContainer from '../../components/wrapperContainer';
import FontFamily from '../../constants/FontFamily';

// Segmented Control Component
const SegmentedControl = ({ label, options, selectedOption, onSelect }) => {
  return (
    <View style={styles.segmentContainer}>
      <Text style={styles.segmentLabel}>{label}</Text>
      <View style={styles.segmentOptionsContainer}>
        {options.map((option) => {
          const isActive = selectedOption === option;
          return (
            <TouchableOpacity
              key={option}
              style={[styles.segmentOption, isActive && styles.activeSegmentOption]}
              onPress={() => onSelect(option)}
              activeOpacity={0.8}
            >
              <Text style={[styles.segmentOptionText, isActive && styles.activeSegmentOptionText]}>
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const SettingsScreen = () => {
  // States for Units
  const [temperature, setTemperature] = useState('Celsius');
  const [windSpeed, setWindSpeed] = useState('km/h');
  const [pressure, setPressure] = useState('mm');
  const [precipitation, setPrecipitation] = useState('Milimeters');
  const [distance, setDistance] = useState('Kilometers');

  // States for Toggles
  const [notifications, setNotifications] = useState(true);
  const [twelveHourTime, setTwelveHourTime] = useState(true);
  const [location, setLocation] = useState(true);

  return (
    <WrapperContainer>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.headerTitle}>Settings</Text>

        {/* Units Section */}
        <Text style={styles.sectionTitle}>Units</Text>
        <View style={styles.card}>
          <SegmentedControl
            label="TEMPERATURE"
            options={['Celsius', 'Fahrenheit']}
            selectedOption={temperature}
            onSelect={setTemperature}
          />
          <SegmentedControl
            label="WIND SPEED"
            options={['km/h', 'm/s', 'Knots']}
            selectedOption={windSpeed}
            onSelect={setWindSpeed}
          />
          <SegmentedControl
            label="PRESSURE"
            options={['hPa', 'Inches', 'kPa', 'mm']}
            selectedOption={pressure}
            onSelect={setPressure}
          />
          <SegmentedControl
            label="PRECIPITATION"
            options={['Milimeters', 'Inches']}
            selectedOption={precipitation}
            onSelect={setPrecipitation}
          />
          <SegmentedControl
            label="DISTANCE"
            options={['Kilometers', 'Miles']}
            selectedOption={distance}
            onSelect={setDistance}
          />
        </View>

        {/* Notifications Section */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <View style={styles.switchRow}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>Notifications</Text>
              <Text style={styles.switchSubtitle}>Be aware of the weather</Text>
            </View>
            <Switch
              trackColor={{ false: '#3e3e3e', true: '#0A84FF' }}
              thumbColor={notifications ? '#ffffff' : '#f4f3f4'}
              onValueChange={setNotifications}
              value={notifications}
            />
          </View>
        </View>

        {/* General Section */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.card}>
          <View style={[styles.switchRow, { marginBottom: 20 }]}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>12-Hour Time</Text>
            </View>
            <Switch
              trackColor={{ false: '#3e3e3e', true: '#0A84FF' }}
              thumbColor={twelveHourTime ? '#ffffff' : '#f4f3f4'}
              onValueChange={setTwelveHourTime}
              value={twelveHourTime}
            />
          </View>
          <View style={styles.switchRow}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>Location</Text>
              <Text style={styles.switchSubtitle}>Get weather of your location</Text>
            </View>
            <Switch
              trackColor={{ false: '#3e3e3e', true: '#0A84FF' }}
              thumbColor={location ? '#ffffff' : '#f4f3f4'}
              onValueChange={setLocation}
              value={location}
            />
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11151a',
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontFamily: FontFamily.bold,
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#ffffff',
    fontFamily: FontFamily.bold,
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#1E232E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  segmentContainer: {
    marginBottom: 20,
  },
  segmentLabel: {
    color: '#8e8e93',
    fontFamily: FontFamily.bold,
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  segmentOptionsContainer: {
    flexDirection: 'row',
    backgroundColor: '#11151a',
    borderRadius: 10,
    padding: 2,
    alignItems: 'center',
  },
  segmentOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSegmentOption: {
    backgroundColor: '#333C4A',
  },
  segmentOptionText: {
    color: '#8e8e93',
    fontFamily: FontFamily.medium,
    fontSize: 13,
  },
  activeSegmentOptionText: {
    color: '#ffffff',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchTextContainer: {
    flex: 1,
    paddingRight: 15,
  },
  switchTitle: {
    color: '#ffffff',
    fontFamily: FontFamily.bold,
    fontSize: 16,
    marginBottom: 2,
  },
  switchSubtitle: {
    color: '#8e8e93',
    fontFamily: FontFamily.regular,
    fontSize: 13,
  },
});

export default SettingsScreen;