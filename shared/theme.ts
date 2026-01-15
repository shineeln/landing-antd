
import { theme as antdTheme } from 'antd';
import { ThemeMode } from './types';

export const getThemeConfig = (mode: ThemeMode) => ({
  algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: '#2563eb',
    borderRadius: 14,
    fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
    colorBgContainer: mode === 'dark' ? '#0f172a' : '#ffffff',
    colorText: mode === 'dark' ? '#f8fafc' : '#0f172a',
    colorBgLayout: mode === 'dark' ? '#020617' : '#f8fafc',
    colorBorder: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(37, 99, 235, 0.08)',
  },
  components: {
    Button: {
      fontWeight: 800,
      controlHeight: 52,
      borderRadius: 14,
    },
    Card: {
      borderRadiusLG: 32,
      colorBgContainer: mode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : '#ffffff',
    },
    Segmented: {
      borderRadius: 12,
      fontWeightStrong: 900,
      colorBgLayout: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
    },
  }
});
