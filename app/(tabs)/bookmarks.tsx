import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bookmark } from 'lucide-react-native';
import { useBookmarksStore } from '@/store/bookmarks-store';
import ArticleCard from '@/components/ArticleCard';
import EmptyState from '@/components/EmptyState';
import Colors from '@/constants/colors';

export default function BookmarksScreen() {
  const { bookmarks } = useBookmarksStore();

  if (bookmarks.length === 0) {
    return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        <EmptyState
          title="No bookmarks yet"
          message="Save articles to read them later by tapping the bookmark icon"
          icon={<Bookmark size={48} color={Colors.inactive} />}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <FlatList
        data={bookmarks}
        renderItem={({ item }) => <ArticleCard article={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Saved Articles</Text>
            <Text style={styles.subtitle}>
              {bookmarks.length} {bookmarks.length === 1 ? 'article' : 'articles'} saved
            </Text>
          </View>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
});