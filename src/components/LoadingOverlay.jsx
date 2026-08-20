import React, { useEffect, useState } from 'react';
/**
 * Simple loading overlay that fades out after the app mounts.
 */
export const LoadingOverlay = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-bg bg-opacity-90 backdrop-blur-sm transition-opacity duration-500 ease-custom" style={{ opacity: visible ? 1 : 0 }}>
      <div className="w-12 h-12 border-4 border-ocean-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};
