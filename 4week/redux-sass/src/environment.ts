const dev = {
  context: 'http://localhost:3000/'
}

const PROD = {
  context: 'http://ec2-34-219-15-162.us-west-2.compute.amazonaws.com:8080/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
