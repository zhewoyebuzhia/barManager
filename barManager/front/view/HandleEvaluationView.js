//接受评价反馈页面
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HandleSortComponent from '../components/HandleSortComponent';
import HandleItemComponent from '../components/HandleItemComponent';
import HandleReplyComponent from '../components/HandleReplyComponent';

const HandleEvaluationView = () => {
  return (
    <View style={styles.container}>
      <HandleSortComponent/>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <HandleItemComponent/>
        <HandleReplyComponent/>
        <HandleItemComponent/>
        <HandleReplyComponent/>
        <HandleItemComponent/>
        <HandleReplyComponent/>
        <HandleItemComponent/>
        <HandleReplyComponent/>
        <HandleItemComponent/>
        <HandleReplyComponent/>
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

export default HandleEvaluationView;