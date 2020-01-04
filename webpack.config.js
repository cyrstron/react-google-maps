const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {  
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.ts',
    output: {      
        path: path.join(__dirname, './.dist'),      
        filename: 'index.js',
        library: '@micelord/maps',     
        libraryTarget: 'umd',      
        publicPath: '/.dist/',
        umdNamedDefine: true,
    },  
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    externals: {  
      'react': {          
        commonjs: "react",          
        commonjs2: "react",          
        amd: "React",          
        root: "React"      
      },      
      'react-dom': {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
      },
    },
    module: {
      rules: [
        { 
          test: /\.tsx?$/, 
          loader: 'ts-loader'
        }
      ]
    },
    devtool: isDevelopment ? 'eval-source-map' : false,
    plugins: [
      isDevelopment && new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
      new CleanWebpackPlugin()
    ].filter((plugin) => !!plugin),
  }
}