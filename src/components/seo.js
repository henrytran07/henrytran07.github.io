import React, { useEffect } from 'react';

const Seo = () => {
  useEffect(() => {
    // Add favicon dynamically
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = './images/emojis/henry-tran.JPG'; // Path to the favicon
    document.head.appendChild(link);
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Henry Tran | MtSAC</title>
      <meta name="description" content="Official page of Henry Tran, MtSAC student" />
      <meta name="keywords" content="Henry Tran, MtSAC, student, programming, engineering, projects" />
      <meta name="author" content="Henry Tran" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Henry Tran | MtSAC" />
      <meta property="og:description" content="Official page of Henry Tran, MtSAC student" />
      <meta property="og:image" content="./images/emojis/henry-tran.JPG" /> {/* Ensure a proper image URL */}
      <meta property="og:url" content="https://henrytran07.github.io/" /> {/* Replace with your site URL */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Henry Tran" />
    </>
  );
};

export default Seo;
