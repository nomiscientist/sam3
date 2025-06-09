// Get max upload size from environment variable (default 500 MB)
const envMaxSize = import.meta.env.VITE_MAX_UPLOAD_SIZE;
export const MAX_FILE_SIZE_IN_MB = envMaxSize ? parseInt(envMaxSize, 10) : 500;
export const MAX_VIDEO_UPLOAD_SIZE = MAX_FILE_SIZE_IN_MB * 1024 * 1024;

export const useUploadVideo = () => {
  // ... rest of the hook implementation
}; 