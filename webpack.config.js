const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = (env, argv) => ({
  entry: './src/index.ts',
  output: {      
      path: path.join(__dirname, './.dist'),      
      filename: 'maps.js',
      library: '@micelord/maps',     
      libraryTarget: 'umd',      
      publicPath: '/.dist/',
      umdNamedDefine: true,
  },  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],  
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),    
      'mobx': path.resolve(__dirname, './node_modules/mobx'),    
      'mobx-react': path.resolve(__dirname, './node_modules/mobx-react'),      
    }  
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
    'mobx': {          
      commonjs: "mobx",          
      commonjs2: "mobx",          
      amd: "mobx",          
      root: "mobx"      
    },      
    'mobx-react': {          
      commonjs: "mobx-react",          
      commonjs2: "mobx-react",          
      amd: "mobx-react",          
      root: "mobx-react"      
    }    
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      }
    ]
  },
  devtool: argv.mode === 'development' ? 'eval-source-map' : 'source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    })
  ]
})