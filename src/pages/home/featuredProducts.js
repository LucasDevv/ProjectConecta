import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

function Item({title}) {
  return (
    <View style={styles.cardproduct}>
      <Text style={styles.productname}>{title}</Text>
    </View>
  );
}

export default function FeaturedProducts({produtos}) {
  return (
    <View>
      <Text style={styles.titleproduct}>Produtos em destaque</Text>
      <FlatList
        data={produtos}
        renderItem={({item}) => <Item title={item.nome} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleproduct: {
    fontSize: 25,
    padding: 10,
    color: '#062e54',
  },
  cardproduct: {
    height: 122,
    marginHorizontal: 25,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
});
