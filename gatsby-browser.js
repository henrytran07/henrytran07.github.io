import React, { useState, useEffect } from 'react';

export const wrapRootElement = ({ element }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true); // Set the flag once the component mounts in the browser
  }, []);

  if (!isBrowser) {
    return (
      <div>
        <Navbar />
        <main>
          <IndexPage />  {/* Default page during SSR */}
        </main>
      </div>
    );
  }

  // Return the root element once the app has mounted on the client side
  return element;
};
