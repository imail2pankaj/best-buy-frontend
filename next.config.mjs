/** @type {import('next').NextConfig} */

// const webpack = require("webpack");
// import webpack from 'webpack';

const nextConfig = {
    images:{
        domains:['shmqkrlagzxbnsowzqrw.supabase.co']
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          })
        );
        return config;
      },
};

export default nextConfig;
