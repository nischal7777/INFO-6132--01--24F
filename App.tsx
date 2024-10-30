import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TransactionsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsList}
        options={{ title: 'Transactions' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{ title: 'Transaction Detail' }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Transactions"
          component={TransactionsStack}
          options={{ tabBarLabel: 'Transactions' }}
        />
        <Tab.Screen
          name="Summary"
          component={Summary}
          options={{ tabBarLabel: 'Summary' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
