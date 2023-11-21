module.exports = {
  apps: [
    {
      name: 'next-pc-template',
      script: 'npm',
      args: 'start',
      env_test: {
        PORT: 3007,
        APP_ENV: 'test',
        NODE_ENV: 'development',
      },
      env_prod: {
        PORT: 3008,
        APP_ENV: 'prod',
        NODE_ENV: 'production',
      },
    },
  ],
}
