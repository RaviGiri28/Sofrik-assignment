# Sofrik-assignment

# E-Commerce Mini App

A modern, functional e-commerce mobile application built with React Native.

## 🚀 Why React Native?
I chose **React Native** (via Expo) because it allows for rapid cross-platform development while maintaining near-native performance. For an e-commerce app, the ability to share a single codebase between iOS and Android while using familiar React patterns is highly efficient.

## 🛠️ Tech Stack
- **Framework**: React Native (Expo SDK 52)
- **Language**: TypeScript
- **State Management**: Zustand (Lightweight and performant)
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **Networking**: Axios
- **Icons**: Lucide React Native

## 📦 Project Structure
```text
src/
├── components/   # Reusable UI elements (ProductCard, Feedback, Animations)
├── constants/    # Theme and color tokens
├── models/       # TypeScript interfaces
├── navigation/   # Navigation configuration and types
├── screens/      # Main application screens (List, Detail, Cart)
├── services/     # API logic
└── store/        # Zustand global state
```

## 🏗️ How to Run
1. **Clone the repo** (if applicable)
2. **Install dependencies**:
   ```bash
   cd ecommerce-app
   npm install
   ```
3. **Start the app**:
   ```bash
   npx expo start
   ```
4. Use the Expo Go app or an emulator to view the app.

## ⚠️ Known Limitations
- **Image Loading**: Since images are from a public placeholder API, they may occasionally load slowly depending on the server response time.
- **Offline Storage**: The cart state is currently in-memory. In a production app, I would add persistence using `@react-native-async-storage/async-storage`.

## ✨ What I would improve with more time
1. **Persistence**: Syncing the cart with local storage or a backend database.
2. **Search & Filter**: Adding a search bar and category filters to the product listing.
3. **Unit Tests**: Writing comprehensive tests for the Zustand store and navigation logic using Jest and React Native Testing Library.
4. **Checkout Flow**: Implementing a multi-step checkout with address selection and payment integration (Stripe/PayPal).

