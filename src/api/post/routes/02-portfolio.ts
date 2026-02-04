export default {
  routes: [
    {
      method: 'GET',
      path: '/portfolio/latest',              // Full URL: http://localhost:1337/api/portfolio/sorted
      handler: 'portfolio.findSorted',         // Points to the action we added above
      config: {
        auth: false,                           // Set true if you want JWT/auth required
        policies: [],                          // Add any policies if needed
      },
    },
  ],
};
