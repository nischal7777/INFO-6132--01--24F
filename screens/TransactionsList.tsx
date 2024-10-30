import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';


const initialData = [
  { id: '1', name: 'Groceries', amount: 200, date: '2024-01-10' },
  { id: '2', name: 'Gas', amount: 150, date: '2024-02-05' },
  { id: '3', name: 'Rent', amount: 1200, date: '2024-03-01' },
  { id: '4', name: 'Utilities', amount: 250, date: '2024-04-10' },
  { id: '5', name: 'Entertainment', amount: 400, date: '2024-05-15' },
  { id: '6', name: 'Insurance', amount: 350, date: '2024-06-20' },
  { id: '7', name: 'Dining Out', amount: 500, date: '2024-07-25' },
  { id: '8', name: 'Groceries', amount: 600, date: '2024-08-10' },
  { id: '9', name: 'Travel', amount: 550, date: '2024-09-05' },
  { id: '10', name: 'Clothing', amount: 450, date: '2024-10-10' },
];

const TransactionsList = ({ navigation }: { navigation: any }) => {
  const [transactions] = useState(initialData);

  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const renderItem = ({ item }: { item: { id: string; name: string; amount: number; date: string } }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAmount}>${item.amount}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total Expenses: ${totalExpenses}</Text>
      <Button
        title="Go to Summary"
        onPress={() => navigation.navigate('Summary', { totalExpenses, transactions })} // Pass transactions here
      />
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionName: {
    fontSize: 18,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#007BFF',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
});

export default TransactionsList;
