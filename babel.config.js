module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: [ './src'],
          alias: {
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@context': './src/context',
            '@components': './src/components',
          }
        }
      ],
      ['react-native-reanimated/plugin'],
      ["module:react-native-dotenv", {
        'moduleName': '@env',
        'allowUndefined': false,
      }]
    ]
  };
};
