// This API route is designed to test the Edge Runtime capabilities.

export default function handler(req, res) {
    // Accessing the request headers
    const userAgent = req.headers['user-agent'] || 'Unknown';
  
    // Example of using geolocation data (if available)
    // Note: Real geolocation data access might differ based on the platform
    const country = req.headers['cf-ipcountry'] || 'Unavailable';
  
    // Setting custom response headers
    res.setHeader('X-Custom-Header', 'Processed at Edge');
  
    // Respond with JSON data including the user agent and country
    res.status(200).json({
      message: 'Edge Runtime Test',
      userAgent,
      country,
    });
  }
  