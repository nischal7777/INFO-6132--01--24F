import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }: { route: any }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.name}</Text>
      <Text style={styles.amount}>Amount: ${transaction.amount}</Text>
      <Text style={styles.date}>Date: {transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 22,
    marginVertical: 5,
  },
  date: {
    fontSize: 18,
    color: '#666',
  },
});

export default TransactionDetail;
