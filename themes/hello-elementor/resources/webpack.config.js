const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
    const publicPath = env.publicPath || '/';

    const config = {
        entry: {
            global: './src/ts/global/eager-load/global.ts',
            page: './src/ts/page/eager-load/page.ts',
            single: './src/ts/single/eager-load/single.ts'
        },
        mode: env.mode || 'production',
        devtool: env.devtool || '',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: env.mode === 'development',
                                // if hmr does not work, this is a forceful method.
                                reloadAll: true,
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].bundle.css',
                chunkFilename: '[name].bundle.css'
            }),
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },
        output: {
            //publicPath is needed to be able to load the dynamic modules properly
            publicPath: publicPath + 'wp-content/themes/hamidev-wordpress-100/resources/dist/',
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, './dist'),
        },
        stats: {
            colors: true
        }
    };

    return config;
};
