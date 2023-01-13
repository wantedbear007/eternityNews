import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CryptoSection = ({cryptoPrice}) => {
  return (
    <View style={styles.parentContainer}>
      {cryptoPrice.map((item, index) => {
        {/* const lol = Number(item.price); */}
        return (
          <View
            key={index}
            style={[
              styles.pricesContainer,
              {
                backgroundColor:
                  item.price_change_percentage_24h > 0 ? '#53A548' : '#C1292E',
              },
            ]}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.id.toUpperCase()}</Text>
              <Text style={styles.price}>
                ₹{' '}
                {item.current_price.toLocaleString('en-IN', {
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: 'INR',
                })}
              </Text>
              <Text style={styles.percentage}>
                {item.price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  pricesContainer: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 20,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 7,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 10,
  },
  price: {
    color: '#fff',
    fontSize: 13,
  },
  percentage: {
    color: '#000',
    fontSize: 10,
    fontWeight: '600',
  },
});

export default CryptoSection;
