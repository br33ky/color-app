import { StyleSheet } from 'react-native';
import { Color } from './utils/Color';

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  box: {
    position: 'relative',
    padding: 18,
    borderRadius: 8,
    borderBottomLeftRadius: 128,
    borderTopRightRadius: 128,
    backgroundColor: new Color(255, 255, 255, 1).toString(),
  },
  shadow: {
    shadowOffset: { width: 15, height: 15 },
    shadowColor: new Color(0, 0, 0, 0.4).toString(),
    shadowOpacity: 1,
    shadowRadius: 25,
  },
  title: {
    paddingHorizontal: 36,
    fontSize: 44,
    fontWeight: '900',
    fontStyle: 'italic',
    textAlign: 'left',
    color: new Color(0, 0, 0, 1).toString(),
  },
  subtitle: {
    textAlign: 'right',
  },
  color: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  leftDot: {
    left: 12,
    top: 12,
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  listWrapper: {
    gap: 12,
    padding: 16,
    paddingBottom: 32,
    borderTopLeftRadius: 54,
    borderTopRightRadius: 54,
    backgroundColor: new Color(255, 255, 255, 1).toString(),
  },
  listTitle: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  history: {
    gap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemWrapper: {
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    flex: 1,
  },
  item: {
    position: 'relative',
    borderRadius: 8,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
