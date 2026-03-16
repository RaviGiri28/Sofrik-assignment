import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const FadeInView = ({ children, delay = 0, duration = 500 }: { children: React.ReactNode, delay?: number, duration?: number }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, delay, duration]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export const SlideInView = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const slideAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        delay: delay,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        delay: delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, opacityAnim, delay]);

  return (
    <Animated.View style={{ opacity: opacityAnim, transform: [{ translateY: slideAnim }] }}>
      {children}
    </Animated.View>
  );
};
