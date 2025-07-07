import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { articles, categories } from '@/mocks/articles';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import Colors from '@/constants/colors';

export default function HeadlinesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    filterArticles();
  }, [selectedCategory]);

  const filterArticles = () => {
    if (selectedCategory === 'All') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((article) => article.category === selectedCategory)
      );
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a refresh
    setTimeout(() => {
      filterArticles();
      setRefreshing(false);
    }, 1500);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.greeting}>Good morning</Text>
      <Text style={styles.title}>Today's Headlines</Text>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <FlatList
        data={filteredArticles}
        renderItem={({ item }) => <ArticleCard article={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.primary]}
            tintColor={Colors.primary}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  header: {
    marginBottom: 8,
  },
  greeting: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
});