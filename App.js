/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={10} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#fff000',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#fffffa',
            decimalPlaces: 0,
            linejoinType: 'round',
            scrollableDotRadius: 6,
            scrollableDotStrokeColor: 'tomato',
            scrollableDotStrokeWidth: 3,
            scrollableInfoViewStyle: {
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#121212',
              borderRadius: 2,
              marginTop: 25,
              marginLeft: 25,
            },
            scrollableInfoTextStyle: {
              fontSize: 10,
              color: '#C4C4C4',
              marginHorizontal: 2,
              flex: 1,
              textAlign: 'center',
            },
            scrollableInfoSize: {
              width: 30,
              height: 30,
            },
            scrollableInfoOffset: 15,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            color: (opacity = 1) => `rgb(78, 135, 210, ${opacity})`,
            propsForBackgroundLines: {
              strokeDasharray: '', 
              strokeDashoffset: 15,
            },
          }}
          withInnerLines={false}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          bezier
        />
      </View>
      <BarChart
        // style={graphStyle}
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        withShadow={true}
        withDots={true}
        withScrollableDot={true}
        withOuterLines={true}
        transparent={true}
        withInnerLines={true}
        bezier
      />
    </SafeAreaView>
  );
};
const chartConfig = {
  // withShadow: false,
  // withOuterLines: false,
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0.1,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 10, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForBackgroundLines: {
    strokeWidth: 0,
    stroke: 'blue',
    strokeDasharray: '',
  },

  // optional
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
