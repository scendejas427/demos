const dev = {
  context: 'http://localhost:3000/'
}

const PROD = {
  context: 'http://salcendejasbucket427.s3-website-us-west-2.amazonaws.com:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
