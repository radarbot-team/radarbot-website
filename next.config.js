const svgrLoader = {
  loader: '@svgr/webpack',
  options: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: { overrides: { removeViewBox: false } },
        },
      ],
    },
  },
};

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Import .svg files as React components
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [svgrLoader],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;
    config.module.rules.push({
      test: /\.svg$/i,
      use: [svgrLoader],
    });
    return config;
  },
}
