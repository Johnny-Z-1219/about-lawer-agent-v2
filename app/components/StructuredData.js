export default function StructuredData() {
  const lawyerSchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "董丽军",
    "jobTitle": "执业律师",
    "worksFor": {
      "@type": "LegalService",
      "name": "安徽修实律师事务所",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "九华西路文化馆",
        "addressLocality": "青阳县",
        "addressRegion": "池州市",
        "addressCountry": "CN",
        "postalCode": "242800"
      },
      "telephone": "+86-xxx-xxxx-xxxx",
      "email": "2548365492@qq.com",
      "url": "https://www.lawyerdong.com",
      "description": "专业提供公司法务、合同纠纷、劳动争议、婚姻家庭、刑事辩护等法律服务",
      "areaServed": {
        "@type": "Place",
        "name": "安徽省池州市青阳县"
      },
      "serviceType": [
        "公司法务",
        "合同纠纷",
        "劳动争议", 
        "婚姻家庭",
        "刑事辩护",
        "法律咨询"
      ],
      "priceRange": "面议",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.6386",
        "longitude": "117.8542"
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "sameAs": [
        "https://www.lawyerdong.com"
      ]
    },
    "knowsAbout": [
      "公司法",
      "合同法",
      "劳动法",
      "婚姻法",
      "刑法",
      "民法"
    ],
    "alumniOf": "法学院",
    "hasCredential": "中华人民共和国律师执业证",
    "url": "https://www.lawyerdong.com"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "安徽修实律师事务所",
    "alternateName": "董丽军律师事务所",
    "url": "https://www.lawyerdong.com",
    "logo": "https://www.lawyerdong.com/lawyer-icon.svg",
    "image": "https://www.lawyerdong.com/lawyer-icon.svg",
    "description": "安徽修实律师事务所，由董丽军律师执业，专业提供公司法务、合同纠纷、劳动争议、婚姻家庭、刑事辩护等法律服务。位于安徽省池州市青阳县，为当地及周边地区提供专业、高效的法律咨询和代理服务。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "九华西路文化馆",
      "addressLocality": "青阳县",
      "addressRegion": "池州市",
      "addressCountry": "CN",
      "postalCode": "242800"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.6386",
      "longitude": "117.8542"
    },
    "telephone": "+86-xxx-xxxx-xxxx",
    "email": "2548365492@qq.com",
    "openingHours": [
      "Mo-Fr 09:00-17:00"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "安徽省池州市青阳县及周边地区"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "法律服务",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "公司法务",
            "description": "公司设立、合规咨询、股权纠纷等"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "合同纠纷",
            "description": "合同起草、审查、纠纷处理等"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "劳动争议",
            "description": "劳动合同纠纷、工伤赔偿等"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "婚姻家庭",
            "description": "离婚诉讼、财产分割、子女抚养等"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "刑事辩护",
            "description": "刑事案件辩护、取保候审等"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "董丽军",
      "jobTitle": "执业律师"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "董丽军",
        "jobTitle": "执业律师"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "董丽军律师 - 安徽修实律师事务所",
    "alternateName": "安徽修实律师事务所官网",
    "url": "https://www.lawyerdong.com",
    "description": "董丽军律师官方网站，安徽修实律师事务所，专业提供法律咨询和代理服务",
    "publisher": {
      "@type": "Organization",
      "name": "安徽修实律师事务所",
      "logo": "https://www.lawyerdong.com/lawyer-icon.svg"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.lawyerdong.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lawyerSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
} 