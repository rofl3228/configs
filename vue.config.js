module.exports = {
  publicPath: '/',
  runtimeCompiler: true,
  lintOnSave: false,
  devServer: {
    proxy: 'http://192.168.43.190:3001'
  },
};
