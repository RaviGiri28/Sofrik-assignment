import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Platform, ToastAndroid, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Star, ShoppingCart } from 'lucide-react-native';

import { RootStackParamList } from '../navigation/types';
import { useCartStore } from '../store/useCartStore';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = ({ route }: Props) => {
  const { product } = route.params;
  const addItem = useCartStore((state) => state.addItem);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addItem(product);
      setIsAdding(false);
      if (Platform.OS === 'android') {
        ToastAndroid.show('Added to cart', ToastAndroid.SHORT);
      } else {
        Alert.alert('Success', 'Added to cart');
      }
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
        </View>
        
        <View style={styles.content}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          
          <View style={styles.ratingRow}>
            <View style={styles.ratingBadge}>
              <Star size={14} color="#eab308" fill="#eab308" />
              <Text style={styles.ratingText}>{product.rating.rate}</Text>
            </View>
            <Text style={styles.countText}>({product.rating.count} reviews)</Text>
          </View>
          
          <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            <ActivityIndicator color="white" style={styles.buttonIcon} />
          ) : (
            <ShoppingCart size={20} color="white" style={styles.buttonIcon} />
          )}
          <Text style={styles.addButtonText}>{isAdding ? 'Adding...' : 'Add to Cart'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    padding: 24,
    backgroundColor: '#fff',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: 'white',
    marginTop: -32,
  },
  category: {
    fontSize: 12,
    color: '#94a3b8',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fefce8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#854d0e',
    marginLeft: 4,
  },
  countText: {
    fontSize: 14,
    color: '#64748b',
  },
  price: {
    fontSize: 28,
    fontWeight: '800',
    color: '#6366f1',
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginBottom: 24,
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 100, // Space for sticky footer
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  addButton: {
    backgroundColor: '#6366f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonIcon: {
    marginRight: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ProductDetailScreen;
