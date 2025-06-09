/**
 * Application settings and configuration
 */
export const settings = {
  inferenceAPIEndpoint: import.meta.env.VITE_BACKEND_URL || 'http://localhost:7263',
};

export default settings; 