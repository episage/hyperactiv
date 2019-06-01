import { terser } from 'rollup-plugin-terser'

export default {
    input: './src/react/index.js',
    output: {
        file: 'react/index.js',
        format: 'umd',
        name: 'react-hyperactiv',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            hyperactiv: 'hyperactiv',
            wretch: 'wretch',
            normaliz: 'normaliz'
        },
        sourcemap: true
    },
    plugins: [
        terser()
    ],
    external: [
        'react',
        'react-dom',
        'hyperactiv',
        'wretch',
        'normaliz'
    ]
}
