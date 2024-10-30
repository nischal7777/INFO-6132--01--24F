import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Summary = ({ route }: { route: any }) => {
  const totalExpenses = route.params?.totalExpenses || 0;
  const transactions = route.params?.transactions || [];


  const data = {
    labels: [
      'Ja', 'Fe', 'Ma', 'Ap', 'My', 'Jun',
      'Jul', 'Au', 'Se', 'Oc', 'No', 'De'
    ],
    datasets: [
      {
        data: [
          200, 150, 300, 250, 400, 350,
          500, 600, 550, 450, 700, 800
        ],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Expenses: ${totalExpenses}</Text>

      <LineChart
        data={data}
        width={300}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />

      <Text style={styles.subtitle}>Transactions:</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>{item.name} - ${item.amount} on {item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default Summary;
