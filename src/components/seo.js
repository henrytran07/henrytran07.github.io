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
      <meta property="og:image" content="path/to/your/image.jpg" /> {/* Ensure a proper image URL */}
      <meta property="og:url" content="https://henrytran.com" /> {/* Replace with your site URL */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Henry Tran" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@henrytran" /> {/* Update with your Twitter handle */}
      <meta name="twitter:title" content="Henry Tran | MtSAC" />
      <meta name="twitter:description" content="Official page of Henry Tran, MtSAC student" />
      <meta name="twitter:image" content="path/to/your/twitter-image.jpg" /> {/* Replace with actual image path */}

      {/* Additional meta tags */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};

export default Seo;
