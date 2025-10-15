import Head from 'next/head';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Integritrade LLC",
    "url": "https://integritradellc.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(559) 325-4813",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "1945 N Fine Ave, STE 111",
        "addressLocality": "Fresno",
        "addressRegion": "CA",
        "postalCode": "93727",
        "addressCountry": "US"
    }

  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default SchemaMarkup;
