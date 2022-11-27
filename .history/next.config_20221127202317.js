module.exports = {
  images: {
    domains: ['localhost',"rb.gy", 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com"'],
  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}