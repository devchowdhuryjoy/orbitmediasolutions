import simg1 from "../assets/images/s1.webp";
import simg2 from "../assets/images/s2.jpeg";
import simg3 from "../assets/images/s3.webp";
import simg4 from "../assets/images/s4.webp";
import simg5 from "../assets/images/s5.jpg";
import simg6 from "../assets/images/s6.webp";
import simg7 from "../assets/images/s7.webp";
// web content importing
import service1 from "../assets/service/serviceslider.webp";
import service2 from "../assets/service/serviceslider.webp";
import service3 from "../assets/service/serviceslider.webp";

import designSolImg from "../assets/service/service1.png";

import s1 from "../assets/service/service1.png";
import s2 from "../assets/service/service2.png";
import sBack from "../assets/service/service_back.webp";

// new import
import React from "react"; // Needed if you put JSX in the data file
import { FaBolt, FaShieldAlt, FaExpandArrowsAlt, FaIndustry } from "react-icons/fa";
import {
  FaMobileAlt,
  FaCompass,
  FaRocket,
  FaSearch,
  FaCogs,
  FaPalette,
  FaShoppingCart,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

export const servicePageContent = {
  title: "Our Services",
  subtitle: "Comprehensive Digital Solutions",
  description:
    "We provide end-to-end digital solutions to help your business grow in the modern era. From strategy to execution, we are here to transform your ideas into reality.",
};

export const webHeroData = [
  {
    id: 1,
    image: service1,
    alt: "Web Development Services",
    title: "Innovate Your Digital Presence",
    subtitle: "Custom Web Solutions for Modern Businesses",
  },
  {
    id: 2,
    image: service2,
    alt: "Digital Innovation",
    title: "E-Commerce Excellence",
    subtitle: "Scalable Platforms that Drive Sales",
  },
  {
    id: 3,
    image: service3,
    alt: "Technology Solutions",
    title: "Digital Marketing Mastery",
    subtitle: "Reach Your Audience Effectively",
  },
];

export const servicesData = [
  {
    id: 1,
    img: simg1,
    title: "Web Design And Development Solutions",
    slug: "web-design-development",
    desc: "At Orbit Media Solutions, we specialize in designing and developing bespoke, high-performance websites and web applications that not only engage users but also deliver seamless experiences across all.",
  },
  {
    id: 2,
    img: simg2,
    title: "E-Commerce Website Development",
    slug: "e-commerce-single-multi-vendor",
    desc: "Whether you want a single vendor online store or a full multi-vendor marketplace like Amazon, Etsy, or eBay, Orbit Media Solutions helps UK businesses launch high-performance e-commerce platforms.",
  },
  {
    id: 3,
    img: simg3,
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Want more leads, higher conversions, and increased revenue? That’s exactly what Orbit Media Solutions delivers.",
  },
  {
    id: 4,
    img: simg4,
    title: "News Portal Development",
    slug: "news-portal",
    desc: "We build fast, secure and engaging news portal websites for digital publishers and media organisations.",
  },
  {
    id: 5,
    img: simg5,
    title: "Mobile & Desktop App Development",
    slug: "mobile-desktop-application",
    desc: "Powerful, secure, and scalable mobile and desktop applications for modern businesses.",
  },
  {
    id: 6,
    img: simg6,
    title: "Custom Software Development Services",
    slug: "customed-software-solution",
    desc: "Custom software solutions that streamline operations and drive growth.",
  },
  {
    id: 7,
    img: simg7,
    title: "Blog Site Development",
    slug: "blog-site",
    desc: "High-performance blog websites that rank on Google and convert readers.",
  },
];
export const designSolutionContent = {
  title: "Web Design And \n Development Solutions",
  description:
    "At Orbit Media Solutions, we specialize in designing and developing bespoke, high-performance websites and web applications that not only engage users but also deliver seamless experiences across all devices. Our team combines modern design principles with scalable, robust technology to ensure every project meets the unique needs of our clients. Focusing on the UK market, our web development services are tailored to help businesses strengthen their online presence, improve user engagement, and drive measurable results. From responsive website design and intuitive user interfaces to complex web applications and e-commerce solutions, we prioritize a user-first approach that balances functionality, aesthetics, and performance. By partnering with Orbit Media Solutions, businesses gain a strategic digital partner capable of translating their vision into innovative, reliable, and future-proof digital solutions that scale as they grow.",
  image: designSolImg,
  alt: "Web Design and Development Team",
  btnText: "Read More...",
  btnTextLess: "Read Less",
};

export const webFeaturedContent = {
  image: s1,
  alt: "Web Development Multi-Channel",
  
  
  titlePrefix: "Web Development for",
  titleHighlight: "Multi-Channel Engagement",
  
 
  desc1_part1: "A website is more than just an online presence—it’s a strategic tool for business growth. At ",
  companyName: "Orbit Media Solutions", 
  desc1_part2: ", we design and develop scalable, secure, and intuitive digital platforms that combine superior UI/UX, lightning-fast performance, and robust functionality.",
  
 
  description2: "Our solutions are fully customizable and future-proof, including tailor-made content management systems (CMS), threat-resistant architectures, and continuous maintenance and updates. We focus on creating platforms engineered for seamless user experiences, high conversion rates, and long-term scalability.",
};

export const webDevelopmentServices = {
  mainTitle: "Comprehensive Web Development Services",
  mainImage: s2,
  alt: "Web Development Illustration",
  services: [
    {
      title: "UI/UX Web Design",
      description: "We craft visually stunning, accessible, and brand-consistent interfaces using Figma and Adobe Creative Cloud. Every design is pixel-perfect, cross-platform responsive, and conversion-focused.",
      highlights: ["Figma", "Adobe Creative Cloud"]
    },
    {
      title: "Frontend Development",
      description: "Our team builds fast, SEO-friendly interfaces using modern frameworks that work seamlessly on all devices. Whether monolithic or micro-frontend architecture, your website performs flawlessly.",
      highlights: ["SEO-friendly"]
    },
    {
      title: "Backend Development",
      description: "From Node.js to Python, we create secure, scalable server-side solutions with efficient data processing, robust APIs, and smooth frontend integration.",
      highlights: ["Node.js", "Python"]
    },
    {
      title: "Full-Stack Development",
      description: "Our full-stack services provide end-to-end solutions, delivering connected, maintainable, and dynamic web applications for a seamless user experience.",
      highlights: ["end-to-end solutions"]
    },
    {
      title: "No/Low-Code Development",
      description: "Accelerate your projects with no-code and low-code platforms like OutSystems and Appian, building robust applications faster without compromising scalability.",
      highlights: ["no-code", "low-code platforms", "OutSystems", "Appian"]
    },
    {
      title: "Cloud Development",
      description: "Maximise performance and uptime with AWS, Azure, or Google Cloud, ensuring security, cost-effectiveness, and effortless scaling.",
      highlights: ["AWS", "Azure", "Google Cloud"]
    }
  ]
};

// NEW: Web Solutions Section Data
export const webSolutionsContent = {
  mainHeader: {
    title: "Web Solutions for UK Businesses",
    description: "We provide a complete range of web solutions that help your business thrive online.",
  },
  solutions: [
    {
      title: "Dynamic Websites",
      description:
        "We create responsive, visually compelling websites with scalable architectures that ensure smooth navigation, fast loading times, and effortless interaction on any device. Designed with both users and search engines in mind, our dynamic websites help drive engagement, capture leads, and strengthen your brand presence online.",
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Our mobile-first e-commerce solutions are built for security, speed, and scalability. Each online store is optimized for SEO, intuitive browsing, and seamless checkout experiences, helping businesses maximize sales, improve user retention, and expand into new markets with confidence.",
    },
    {
      title: "Web Applications",
      description:
        "We develop progressive web applications (PWAs) that deliver interactive, app-like experiences across all devices and platforms. With a focus on performance, offline capabilities, and real-time functionality, our web applications enhance user engagement while providing robust, enterprise-level functionality.",
    },
    {
      title: "Custom CMS",
      description:
        "Our tailor-made content management systems empower businesses to manage content efficiently, securely, and with minimal effort. With intuitive dashboards, automated workflows, and personalized features, our custom CMS solutions accelerate time-to-market, streamline operations, and give teams the tools they need to adapt quickly in a fast-paced digital environment.",
    },
  ],
  whyChooseHeader: "Why Choose Orbit Media Solutions?",
  whyChoose: [
    {
      icon: FaBolt ,
      title: "Optimised Performance",
      description:
        "We build lightning-fast websites using efficient, clean coding practices and modern frameworks, ensuring your digital platforms load quickly, respond seamlessly, and provide smooth navigation on every device. Fast, reliable performance enhances user experience and boosts SEO and conversion rates.",
    },
    {
      icon: FaShieldAlt,
      title: "Robust Security",
      description:
        "Your digital assets are protected with enterprise-level security measures, including data encryption, secure authentication, and continuous monitoring. We proactively defend against vulnerabilities, ensuring your website or application is resilient against cyber threats and compliant with industry standards.",
    },
    {
      icon: FaExpandArrowsAlt,
      title: "Scalable Architecture",
      description:
        "Our web solutions are designed to grow with your business, accommodating increased traffic, additional features, and evolving workflows without compromising performance. From start-ups to enterprise-level operations, our flexible architecture ensures your platform remains future-proof and adaptable.",
    },
    {
      icon: FaIndustry,
      title: "Industry Expertise",
      description:
        "With experience across a wide range of sectors—including eCommerce, FinTech, Healthcare, Education, Real Estate, Travel & Tourism, and more—we understand the unique challenges and compliance requirements of each industry. This allows us to deliver tailored solutions that meet your business objectives and provide measurable results.",
    },
  ],
};

export const webDarkHeroContent = {
  image: sBack,
  title: "Grow Your Business with a Powerful Web Presence",
  description1: "Your website is your digital storefront. A well-designed, SEO-optimised platform attracts more visitors, generates leads, and builds credibility.",
  description2: "Orbit Media Solutions ensures your website drives measurable growth and delivers an exceptional user experience."
};

// NEW: Features Section Data
export const webFeaturesContent = {
  header: {
    title: "Web Design & Development Solutions Features",
    description: "Powerful, scalable, and user-centric web solutions designed to drive performance, engagement, and business growth."
  },
  features: [
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description: "In an era where mobile usage surpasses desktop, responsive design is non-negotiable. We ensure your website looks and functions flawlessly across all devices and screen sizes.",
    },
    {
      icon: FaCompass,
      title: "User-friendly Navigation",
      description: "We design intuitive navigation structures and clear pathways so users can quickly find the information they need, enhancing usability and engagement.",
    },
    {
      icon: FaRocket,
      title: "Fast Loading Speeds",
      description: "Optimized performance ensures fast loading times, reducing bounce rates and delivering a smooth, frustration-free user experience.",
    },
    {
      icon: FaSearch,
      title: "SEO Integration",
      description: "SEO best practices are integrated into development, including optimized metadata, content structure, and performance for higher search visibility.",
    },
    {
      icon: FaCogs,
      title: "Content Management System (CMS)",
      description: "We provide robust, user-friendly CMS solutions that allow you to manage and update website content easily without technical expertise.",
    },
    {
      icon: FaPalette,
      title: "Customizable Design",
      description: "Your website is tailored to reflect your brand identity with customizable layouts, colors, and visuals that align with your business values.",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Functionality",
      description: "Secure and scalable e-commerce solutions that support smooth transactions, intuitive browsing, and an excellent shopping experience.",
    },
    {
      icon: FaLock,
      title: "Security Features",
      description: "Enterprise-grade security including SSL encryption, regular updates, and firewall protection to safeguard your website and user data.",
    },
    {
      icon: FaChartLine,
      title: "Analytics & Reporting",
      description: "Integrated analytics tools help track traffic, conversions, and engagement, enabling data-driven decisions and continuous optimization.",
    },
  ]
};