import React, { useState, useEffect } from 'react';

// Wrap the root element to ensure components are only rendered on the client side
export const wrapRootElement = ({ element }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  // Set the state to true once the component mounts on the client side
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;  // Prevent rendering during SSR
  }

  return element;  // Return the root element after mounting on the client side
};
