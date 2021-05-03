import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-postcss-lit';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'lib',
      format: 'es',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve({
      browser: true,
    }),
    postcss({
      minimize: false,
    }),
    litcss(),
  ],
};