import bundleAnalyser from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/500',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/terms',
        destination: '/public-terms-conditions.html',
      },
      {
        source: '/privacy-policy',
        destination: '/public-privacy-policy.html',
      },
      {
        source: '/cookies',
        destination: '/public-cookies.html',
      },
    ];
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
        __RRWEB_EXCLUDE_IFRAME__: true,
        __RRWEB_EXCLUDE_SHADOW_DOM__: true,
        __SENTRY_EXCLUDE_REPLAY_WORKER__: true,
      })
    );

    // return the modified config
    return config;
  },
};

const withBundleAnalyzer = bundleAnalyser({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(
  withSentryConfig(nextConfig, {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,

    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
  })
);
