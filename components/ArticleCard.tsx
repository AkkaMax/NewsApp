import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Bookmark } from 'lucide-react-native';
import { Article } from '@/types';
import { useBookmarksStore } from '@/store/bookmarks-store';
import Colors from '@/constants/colors';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

export default function ArticleCard({ article, compact = false }: ArticleCardProps) {
  const router = useRouter();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarksStore();
  const bookmarked = isBookmarked(article.id);

  const handlePress = () => {
    router.push(`/article/${article.id}`);
  };

  const toggleBookmark = (e: any) => {
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(article.id);
    } else {
      addBookmark(article);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (compact) {
    return (
      <Pressable
        style={styles.compactContainer}
        onPress={handlePress}
        android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
      >
        <Image source={{ uri: article.imageUrl }} style={styles.compactImage} />
        <View style={styles.compactContent}>
          <Text style={styles.compactCategory}>{article.category}</Text>
          <Text style={styles.compactTitle} numberOfLines={2}>
            {article.title}
          </Text>
          <Text style={styles.compactMeta}>
            {formatDate(article.publishedAt)} • {article.readTime} min read
          </Text>
        </View>
        <Pressable onPress={toggleBookmark} style={styles.compactBookmark}>
          <Bookmark
            size={20}
            color={bookmarked ? Colors.primary : Colors.inactive}
            fill={bookmarked ? Colors.primary : 'transparent'}
          />
        </Pressable>
      </Pressable>
    );
  }

  return (
    <Pressable
      style={styles.container}
      onPress={handlePress}
      android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
    >
      <Image source={{ uri: article.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.category}>{article.category}</Text>
          <Pressable onPress={toggleBookmark} hitSlop={10}>
            <Bookmark
              size={22}
              color={bookmarked ? Colors.primary : Colors.inactive}
              fill={bookmarked ? Colors.primary : 'transparent'}
            />
          </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>
        <Text style={styles.summary} numberOfLines={2}>
          {article.summary}
        </Text>
        <View style={styles.meta}>
          <Text style={styles.author}>{article.author}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.date}>{formatDate(article.publishedAt)}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.readTime}>{article.readTime} min read</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: Colors.text,
  },
  summary: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  readTime: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  dot: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginHorizontal: 4,
  },
  // Compact styles
  compactContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  compactImage: {
    width: 100,
    height: 100,
  },
  compactContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  compactCategory: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 4,
  },
  compactTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  compactMeta: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  compactBookmark: {
    padding: 12,
    justifyContent: 'center',
  },
});