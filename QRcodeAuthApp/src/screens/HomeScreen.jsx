import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const [session, setSession] = useState([]);
  const [loading, setLoading] = useState(true);

  let primaryColor = '#366cf2';
  let userName = 'Kahnu';

  const allSession = [
    {
      id: 1,
      sessionName: 'Session - 1, from Chrome - Mac OS',
      lastSeen: '10:00 AM',
    },
  ];

  useEffect(() => {
    setSession(allSession);
    setLoading(false);
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 12}}>
      <View>
        <Text style={{color: primaryColor, fontWeight: 'bold', fontSize: 35}}>
          Hi, {userName} 👋
        </Text>
      </View>
      <ScrollView>
        {session?.length > 0 &&
          session.map((item, index) => (
            <View style={styles.sessionContainer} key={index}>
              <View style={styles.sessionDetailsContainer}>
                <View style={styles.sessionDetails}>
                  <Text style={styles.sessionHeader}>{item.sessionName}</Text>
                  <Text style={styles.sessionSubHeader}>
                    Last seen : {item.lastSeen}
                  </Text>
                </View>
                <Icon name="logout" size={30} color={'#FF3131'} />
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sessionContainer: {
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  sessionDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionDetails: {
    flexDirection: 'column',
    gap: 5,
  },
  sessionHeader: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sessionSubHeader: {
    color: '#B2B0B0',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
