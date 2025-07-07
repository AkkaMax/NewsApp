import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LogOut, Settings, Bell, HelpCircle, Shield, Moon } from 'lucide-react-native';
import { useAuthStore } from '@/store/auth-store';
import Button from '@/components/Button';
import Colors from '@/constants/colors';

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: logout,
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const menuItems = [
    {
      icon: <Settings size={22} color={Colors.text} />,
      title: 'App Settings',
      subtitle: 'Notifications, theme, language',
    },
    {
      icon: <Bell size={22} color={Colors.text} />,
      title: 'Notification Preferences',
      subtitle: 'Manage your notification settings',
    },
    {
      icon: <Moon size={22} color={Colors.text} />,
      title: 'Dark Mode',
      subtitle: 'Toggle dark mode on/off',
    },
    {
      icon: <Shield size={22} color={Colors.text} />,
      title: 'Privacy & Security',
      subtitle: 'Manage your privacy settings',
    },
    {
      icon: <HelpCircle size={22} color={Colors.text} />,
      title: 'Help & Support',
      subtitle: 'FAQs, contact us, feedback',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{user?.name.charAt(0)}</Text>
          </View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <View
              key={index}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.lastMenuItem,
              ]}
            >
              <View style={styles.menuIcon}>{item.icon}</View>
              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            title="Logout"
            onPress={handleLogout}
            variant="outline"
            style={styles.logoutButton}
            textStyle={styles.logoutButtonText}
          />
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  menuContainer: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginBottom: 24,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoutButton: {
    width: '100%',
    marginBottom: 16,
  },
  logoutButtonText: {
    color: Colors.error,
  },
  version: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});