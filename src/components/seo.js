import React, { useEffect } from 'react';

const Seo = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = "./images/emojis/henry-tran.JPG"; // Path to the favicon
    document.head.appendChild(link);
  }, []); // Empty dependency array to run this only once when component mounts

  return (
    <>
      {/* SEO meta tags */}
      <title>Henry Tran</title>
      <meta name="description" content="MtSAC Henry Tran" />
      <meta property="og:title" content="Henry Tran" />
      <meta property="og:description" content="MtSAC Henry Tran" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Henry Tran" />
      <meta name="twitter:title" content="Henry Tran" />
      <meta name="twitter:description" content="MtSAC Henry Tran" />
    </>
  );
};

export default Seo;
