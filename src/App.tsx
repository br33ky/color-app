import { useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

import { setStatusBarStyle } from 'expo-status-bar';

import { useHistory } from './hooks/useHistory';
import { useColor } from './hooks/useColor';

import styles from './App.style';
import { Color } from './utils/Color';

setStatusBarStyle('auto');

const HISTORY_LENGHT = 3;

export default function App() {
  const colorController = useColor();
  const historyController = useHistory<string>({ len: HISTORY_LENGHT });

  const getColor = (color: string) => colorController.changeColor(color);

  const handlePress = () => historyController.addToHistory(colorController.generateColor());

  useEffect(() => {
    historyController.addToHistory(colorController.color);
  }, []);

  return (
    <View style={[styles.page, { backgroundColor: colorController.color }]}>
      <Pressable onPress={handlePress} style={styles.inner}>
        <View style={[styles.box, styles.shadow]}>
          <View style={[styles.leftDot, { backgroundColor: colorController.color }]} />
          <Text style={[styles.title, { color: colorController.color }]}>HELLO</Text>
          <Text style={[styles.color, { color: colorController.color }]}>{colorController.color}</Text>
          <Text style={[styles.color, { color: colorController.color }]}>{colorController.hex}</Text>
          <Text style={[styles.title, styles.subtitle, { color: colorController.color }]}>THERE</Text>
          <View style={styles.leftDot} />
        </View>
      </Pressable>
      <View style={[styles.shadow, styles.listWrapper]}>
        <Text style={[styles.listTitle, { color: colorController.color }]}>HISTORY</Text>

        <View style={styles.history}>
          {historyController.history.map(item => (
            <Pressable
              key={item.id}
              style={[styles.itemWrapper, { shadowColor: new Color().parse(item.data).alpha(0.5).toString() }]}
              onPress={() => getColor(item.data)}>
              <View style={[styles.item, { backgroundColor: item.data }]} />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
