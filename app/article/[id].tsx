import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Share, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Bookmark, Share as ShareIcon } from 'lucide-react-native';
import { articles } from '@/mocks/articles';
import { useBookmarksStore } from '@/store/bookmarks-store';
import { Article } from '@/types';
import Colors from '@/constants/colors';

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarksStore();
  const bookmarked = article ? isBookmarked(article.id) : false;

  useEffect(() => {
    if (id) {
      const foundArticle = articles.find((a) => a.id === id);
      if (foundArticle) {
        setArticle(foundArticle);
      }
    }
  }, [id]);

  const toggleBookmark = () => {
    if (!article) return;
    
    if (bookmarked) {
      removeBookmark(article.id);
    } else {
      addBookmark(article);
    }
  };

  const handleShare = async () => {
    if (!article) return;
    
    try {
      await Share.share({
        title: article.title,
        message: Platform.OS === 'ios' ? article.title : `${article.title}\n\n${article.summary}`,
      });
    } catch (error) {
      console.error('Error sharing article:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!article) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: article.imageUrl }} style={styles.image} />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.category}>{article.category}</Text>
            <Text style={styles.readTime}>{article.readTime} min read</Text>
          </View>
          
          <Text style={styles.title}>{article.title}</Text>
          
          <View style={styles.authorContainer}>
            <Text style={styles.author}>By {article.author}</Text>
            <Text style={styles.date}>{formatDate(article.publishedAt)}</Text>
          </View>
          
          <Text style={styles.summary}>{article.summary}</Text>
          
          <Text style={styles.body}>{article.content}</Text>
        </View>
      </ScrollView>
      
      <View style={styles.actionBar}>
        <Pressable
          style={styles.actionButton}
          onPress={toggleBookmark}
          android_ripple={{ color: 'rgba(0,0,0,0.1)', radius: 20 }}
        >
          <Bookmark
            size={24}
            color={bookmarked ? Colors.primary : Colors.text}
            fill={bookmarked ? Colors.primary : 'transparent'}
          />
        </Pressable>
        
        <Pressable
          style={styles.actionButton}
          onPress={handleShare}
          android_ripple={{ color: 'rgba(0,0,0,0.1)', radius: 20 }}
        >
          <ShareIcon size={24} color={Colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 80, // Space for action bar
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  readTime: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
    lineHeight: 32,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  author: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  date: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  summary: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: Colors.card,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});