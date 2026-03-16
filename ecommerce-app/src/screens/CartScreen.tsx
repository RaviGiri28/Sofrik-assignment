import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react-native';
import { useCartStore } from '../store/useCartStore';

const CartScreen = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const handleCheckout = () => {
    Alert.alert(
      'Checkout',
      `Total amount: ₹${getTotalPrice().toFixed(2)}. Proceed with payment?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => {
            clearCart();
            Alert.alert('Success', 'Order placed successfully!');
          } 
        },
      ]
    );
  };

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <ShoppingBag size={64} color="#cbd5e1" />
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySubtitle}>Looks like you haven't added anything yet.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="contain" />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
              
              <View style={styles.quantityContainer}>
                <TouchableOpacity 
                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.qtyButton}
                >
                  <Minus size={16} color="#64748b" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity 
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.qtyButton}
                >
                  <Plus size={16} color="#64748b" />
                </TouchableOpacity>
              </View>
              </View>
            <TouchableOpacity 
              onPress={() => removeItem(item.id)}
              style={styles.removeButton}
            >
              <Trash2 size={20} color="#ef4444" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
      
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>₹{getTotalPrice().toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 16,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 8,
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6366f1',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    alignSelf: 'flex-start',
    borderRadius: 8,
    padding: 2,
  },
  qtyButton: {
    padding: 6,
  },
  quantityText: {
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: '700',
    color: '#1e293b',
  },
  removeButton: {
    padding: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1e293b',
  },
  checkoutButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default CartScreen;
