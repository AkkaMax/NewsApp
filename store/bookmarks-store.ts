import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Article } from '@/types';

interface BookmarksState {
  bookmarks: Article[];
  addBookmark: (article: Article) => void;
  removeBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
}

export const useBookmarksStore = create<BookmarksState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      
      addBookmark: (article) => {
        const { bookmarks } = get();
        if (!bookmarks.some((bookmark) => bookmark.id === article.id)) {
          set({ bookmarks: [...bookmarks, article] });
        }
      },
      
      removeBookmark: (articleId) => {
        const { bookmarks } = get();
        set({
          bookmarks: bookmarks.filter((bookmark) => bookmark.id !== articleId),
        });
      },
      
      isBookmarked: (articleId) => {
        const { bookmarks } = get();
        return bookmarks.some((bookmark) => bookmark.id === articleId);
      },
    }),
    {
      name: 'bookmarks-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);