import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/UI/Card';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../assets/UI/Theme';
import CryptoSection from '../components/Explore/CryptoSection';
import QuoteSection from '../components/Explore/QuoteSection';
import ImageSection from '../components/Explore/ImageSection';
import Greetings from '../components/Explore/Greetings';
import Affirmation from '../components/Explore/Affirmation';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import JokeSection from '../components/Explore/JokeSection';
import NasaSection from '../components/Explore/NasaSection';
import SkeletonExplore from '../components/Explore/SkeletonExplore';
import CompassIcon from '../assets/Icons/compassIco.svg'

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const colors = Theme();
  const Greeting = Greetings();

  useEffect(() => {
    RenderContent();

    window.setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const SectionDivider = () => (
    <Divider style={[styles.divider, {backgroundColor: colors.text}]} />
  );

  const RenderContent = () => {
    console.log('loaded')
    return (
      <>
        <CryptoSection />
        <QuoteSection colors={colors} />
        <ImageSection colors={colors} />
        <SectionDivider />
        <Affirmation colors={colors} />
        <SectionDivider />
        <JokeSection colors={colors} />
        <SectionDivider />
        {/* <WordSection /> */}
        {/* <SectionDivider /> */}
        <NasaSection colors={colors} />
      </>
    );
  };
  return (
    <Card>
      <ScrollView>
        <View style={styles.parentContainer}>
          <View style={styles.topContainer}>
            {/* <MaterialIcons name="explore" size={30} color={colors.text} /> */}
            <CompassIcon fill={colors.text} width={32} />
            <Text style={[styles.headingText, {color: colors.text}]}>
              Explore
            </Text>
          </View>
        </View>
        <Text style={[styles.greet, {color: colors.text}]}>{Greeting} !</Text>
        {loading ? <SkeletonExplore /> : <RenderContent />}
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: '800',
  },
  greet: {
    fontSize: 22,
    marginLeft: 23,
    paddingTop: 20,
  },
  divider: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
});

export default Explore;
