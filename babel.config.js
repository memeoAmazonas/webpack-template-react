const plugins = process.env.NODE_ENV !== 'production' ? ['react-refresh/babel', '@babel/transform-runtime'] : [];
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins,
};
