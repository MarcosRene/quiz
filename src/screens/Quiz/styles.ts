import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  title: {
    marginBottom: 8,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 16,
    textAlign: 'center',
    color: THEME.COLORS.GREY_100
  },
  question: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 300,
    padding: 32,
  },
  header: {
    width: '100%',
    marginBottom: 22,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
  }
});