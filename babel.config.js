module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@app': './src',
          '@components': './src/components',
          '@lib': './src/lib',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@store': './src/store',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
