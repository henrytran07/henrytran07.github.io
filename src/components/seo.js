import * as React from "react"

const seoData = {
  "title": "Henry Tran",
  "description": "Henry Tran is a dedicated undergraduate electrical engineering student with a passion for back-end software development.",
  "author": "Henry Tran",
  "siteUrl": "https://github.com/henrytran07/henrytran07.github.io",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
