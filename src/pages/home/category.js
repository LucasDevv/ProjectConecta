import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

function Item({title}) {
  return (
    <View style={styles.cardcategory}>
      <Text>{title}</Text>
    </View>
  );
}

export default function Cateogira({produtos}) {
  return (
    <View>
      <Text style={styles.titlecategory}>Categorias</Text>
      <FlatList
        horizontal={true}
        data={produtos}
        renderItem={({item}) => <Item title={item.nome} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titlecategory: {
    fontSize: 25,
    padding: 10,
    color: '#062e54',
  },
  cardcategory: {
    height: 108,
    width: 107,
    backgroundColor: 'red',
    margin: 5,
  },
});
