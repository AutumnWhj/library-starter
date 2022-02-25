import packageJson from './package.json';

import json from '@rollup/plugin-json';

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._LIB_VERSION_ = '${packageJson.version}'
}`

export default {
  // 入口文件
  input: './src/index.ts',
  // 输出文件
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      footer,
    }
  ],
  plugins: [
    json()
  ]
}