// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//       'react-native-reanimated/plugin', {
//         relativeSourceLocation: true,
//     },
//     ],
// };
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    // Other plugins
    ["react-native-reanimated/plugin", {
      "relativeSourceLocation": true
    }]
  ],
};
