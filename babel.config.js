module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
