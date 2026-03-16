import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export const LoadingSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#6366f1" />
  </View>
);

export const ErrorView = ({ message, onRetry }: { message: string, onRetry?: () => void }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{message}</Text>
    {onRetry && (
      <Text style={styles.retryText} onPress={onRetry}>
        Try Again
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    textAlign: 'center',
    marginBottom: 10,
  },
  retryText: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '600',
  },
});
