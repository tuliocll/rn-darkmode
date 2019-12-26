import React, { useRef, useMemo } from "react";
import { Animated, PanResponder, TouchableOpacity } from "react-native";

import { Container, Title } from "./styles";

export default function GestureContainer({ title, children }) {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 280 })).current;

  const panResponder = useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        position.setOffset({
          x: position.x._value,
          y: position.y._value
        });

        position.setValue({ x: 0, y: 0 });
      },

      onPanResponderRelease: () => {
        position.flattenOffset();
      },

      onPanResponderMove: (evt, gestureState) => {
        console.log("position: ", gestureState.moveY);
        if (gestureState.moveY > 530 || gestureState.moveY < 120) {
          return null;
        }

        Animated.event([
          null,
          {
            // dx,
            dy: position.y
          }
        ])(evt, gestureState);
      }
    })
  );

  function handleClick() {
    Animated.spring(position.y, {
      toValue: position.y._value < -100 ? 280 : -124,
      bounciness: 10
    }).start();
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [
          {
            translateX: position.x
          },
          {
            translateY: position.y
          }
        ]
      }}
    >
      <Container>
        <Animated.View {...panResponder.panHandlers}>
          <TouchableOpacity onPress={handleClick}>
            <Title>{title}</Title>
          </TouchableOpacity>
        </Animated.View>
        {children}
      </Container>
    </Animated.View>
  );
}
