module.exports = {
  apps: [
    {
      name: 'next-pc-template',
      script: 'npm',
      args: 'start',
      env_test: {
        PORT: 3607,
        APP_ENV: 'test',
        NODE_ENV: 'development',
      },
      env_prod: {
        PORT: 3608,
        APP_ENV: 'prod',
        NODE_ENV: 'production',
      },
    },
  ],
}
