import React, { useEffect } from 'react';

const Seo = () => {
  useEffect(() => {
    // Set dynamic title for the webpage
    document.title = "Henry Tran | Full-Stack Developer & Student at MtSAC"; 

    // Add favicon dynamically
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/images/emojis/henry-tran.JPG'; // Absolute path for the favicon
    document.head.appendChild(link);
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      {/* SEO Meta Tags */}
      <meta 
        name="description" 
        content="Official website of Henry Tran, a full-stack developer and student at MtSAC. Explore my projects in programming, AI, machine learning, and software engineering." 
      />
      <meta 
        name="keywords" 
        content="Henry Tran, MtSAC, student, full-stack development, programming, engineering, projects, machine learning, AI, data science, JavaScript, React, Python, TensorFlow, software development, robotics, coding, technology, GitHub, innovation" 
      />
      <meta name="author" content="Henry Tran" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Henry Tran" />
      <meta 
        property="og:description" 
        content="Official website of Henry Tran, a full-stack developer and student at MtSAC. Explore my projects in programming, AI, machine learning, and software engineering." 
      />
      <meta 
        property="og:image" 
        content="https://henrytran07.github.io/images/emojis/henry-tran.JPG" 
      />
      <meta 
        property="og:url" 
        content="https://henrytran07.github.io/" 
      /> 
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Henry Tran" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@henrytran" />
      <meta name="twitter:title" content="Henry Tran" />
      <meta 
        name="twitter:description" 
        content="Official website of Henry Tran, a full-stack developer and student at MtSAC. Explore my projects in programming, AI, machine learning, and software engineering." 
      />
      <meta 
        name="twitter:image" 
        content="https://henrytran07.github.io/images/emojis/henry-tran.JPG" 
      />
    </>
  );
};

export default Seo;
