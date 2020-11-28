import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Categoria from './category';
import FeaturedProducts from './featuredProducts';

export default function Home() {
  const produtos = [
    {
      id: '1',
      nome: 'Produto1',
    },
    {
      id: '2',
      nome: 'Produto2',
    },
    {
      id: '3',
      nome: 'Produto3',
    },
    {
      id: '4',
      nome: 'Produto4',
    },
    {
      id: '5',
      nome: 'Produto5',
    },
    {
      id: '6',
      nome: 'Produto6',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Categoria produtos={produtos} />
      </View>
      <FeaturedProducts produtos={produtos} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});
