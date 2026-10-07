import { site, owner, isDefined } from "../config/site";
import { contact } from "../config/contact";
import type { Service } from "../data/services";
import type { Faq } from "../data/faq";

// URL absoluta a partir de una ruta.
const absolute = (path: string) =>
  isDefined(site.url) ? new URL(path, site.url).href : path;

const area = { "@type": "City", name: site.city };

export function businessSchema() {
  const sameAs = Object.values(contact.social).filter((url) => isDefined(url));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: absolute("/"),
    image: absolute("/og-image.png"),
    areaServed: area,
    ...(isDefined(contact.phone) && { telephone: contact.phone }),
    ...(isDefined(contact.email) && { email: contact.email }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: absolute(`/servicios/${service.slug}`),
    areaServed: area,
    provider: { "@type": "LocalBusiness", name: site.name, url: absolute("/") },
    ...(service.priceFrom !== null && {
      offers: {
        "@type": "Offer",
        priceCurrency: "UYU",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: service.priceFrom,
          priceCurrency: "UYU",
        },
      },
    }),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  date: Date;
  author?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date.toISOString(),
    image: absolute("/og-image.png"),
    mainEntityOfPage: absolute(`/blog/${post.slug}`),
    author: { "@type": "Person", name: post.author ?? owner.name },
    publisher: { "@type": "LocalBusiness", name: site.name, url: absolute("/") },
  };
}