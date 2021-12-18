import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CryptoPrices from '../../services/CryptoPrices';
import colors from '../../assets/UI/colors';

const CryptoSection = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await CryptoPrices();
      setPrice(prices);
    };
    fetchPrices();
  }, []);

  return (
    <View style={styles.parentContainer}>
      <View>
        {price.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.pricesContainer,
                {
                  backgroundColor:
                    item.price_change_percentage_24h > 0
                      ? '#53A548'
                      : '#C1292E',
                },
              ]}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View>
                <Text style={styles.name}>{item.id.toUpperCase()}</Text>
                <Text style={styles.price}>₹ {item.current_price}</Text>
                <Text style={styles.percentage}>
                  {item.price_change_percentage_24h.toFixed(2)}%
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      <Text>lol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  pricesContainer: {
    marginBottom: 10,
    backgroundColor: '#f12',
    paddingVertical: 11,
    paddingHorizontal: 10,
    width: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginLeft: 20,
    elevation: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 7,
  },
  name: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 15,
  },
  price: {
    color: colors.white,
    fontSize: 12,
  },
  percentage: {
    color: colors.disabledText,
    fontSize: 10,
  },
});

export default CryptoSection;
