//我的订单界面
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MyOrderComponent from '../components/MyOrderComponent';
import OrderSortComponent from '../components/OrderSortComponent';
import OrderItemComponent from '../components/OrderItemComponent';
import OrderCatalogComponent from '../components/OrderCatalogComponent';
import OrderTotalComponent from '../components/OrderTotalComponent';

const MyOrderView = () => {
  return (
    <View style={styles.container}>
      <MyOrderComponent />
      <OrderSortComponent/>
      <OrderCatalogComponent/>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <OrderItemComponent/>
        <OrderItemComponent/>
        <OrderTotalComponent/>
        <OrderItemComponent/>
        <OrderItemComponent/>
        <OrderTotalComponent/>
        <OrderItemComponent/>
        <OrderItemComponent/>
        <OrderTotalComponent/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default MyOrderView;