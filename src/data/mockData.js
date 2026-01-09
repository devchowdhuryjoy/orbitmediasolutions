// src/data/mockData.js
import { SlHome } from "react-icons/sl";
// src/data/mockData.js


import pimg1 from "../assets/images/p1.webp";
import pimg2 from "../assets/images/p2.webp";
import pimg3 from "../assets/images/p3.webp";
import pimg4 from "../assets/images/p4.webp";
import pimg5 from "../assets/images/p5.webp";
import pimg6 from "../assets/images/p6.webp";
import pimg7 from "../assets/images/p7.webp";
import pimg8 from "../assets/images/p8.webp";
import pimg9 from "../assets/images/p9.webp";
import pimg10 from "../assets/images/p11.webp";
import pimg11 from "../assets/images/p11.webp";
import pimg12 from "../assets/images/p12.webp";
import pimg13 from "../assets/images/p13.webp";
import erp1 from "../assets/products/ERP.webp";
import erp2 from "../assets/products/ERP2.webp";
import erp3 from "../assets/products/ERP2.jpg";
import e1 from "../assets/products/e1.png";
import erpukbusiness from "../assets/products/e2.png";
import erpsoft from "../assets/products/e3.jpg";
import erphero2 from "../assets/products/ERPHero2.webp";

// src/data/mockData.js

export const productPageContent = {
  title: "Our Products",
  subtitle: "Complete Digital Solutions for Your Business",
  description:
    "We develop robust digital products to help businesses grow and succeed in the digital era.",
};

export const productsData = [
  {
    id: 1,
    img: pimg1,
    icon: "SlHome",
    title: "ERP Software Services UK",
    slug: "erp-software",
    desc: "Orbit Media Solutions provides modern ERP Software Services to help UK businesses streamline operations, automate processes, reduce cost, and gain real-time insights.",
    btnText: "Details",
    // Dynamic Page informaton
    details: {
      heroTitle: "Complete ERP Solution for Your Business",
      heroImages: [erp1, erp2, erp3],
      features: [
        "Financial Management",
        "Supply Chain",
        "CRM Integration",
        "Real-time Analytics",
      ],
      erpFeaturesTitle: "ERP Software Services UK Features",
      erpSystemFeatures: [
        {
          id: 1,
          title: "Financial Management",
          subtitle: "Financial Management",
          desc: "Automates accounting tasks like accounts payable and receivable, manages general ledger, budgeting, and financial reporting.",
        },
        {
          id: 2,
          title: "Human Resources (HR)",
          subtitle: "Human Resources (HR)",
          desc: "Manages employee data, payroll, and other human capital functions.",
        },
        {
          id: 3,
          title: "Supply Chain Management",
          subtitle: "Supply Chain Management",
          desc: "Oversees the flow of goods and services, from procurement to customer delivery, and includes inventory and warehouse management.",
        },
        {
          id: 4,
          title: "Customer Relationship Management (CRM)",
          subtitle: "Customer Relationship Management (CRM)",
          desc: "Handles sales, customer service, and tracks customer interactions, orders, and marketing campaign performance.",
        },
        {
          id: 5,
          title: "Analytics and Reporting",
          subtitle: "Analytics and Reporting",
          desc: "Provides real-time dashboards, data visualization, and reporting tools for insights into performance.",
        },
        {
          id: 6,
          title: "Automation",
          subtitle: "Automation",
          desc: "Streamlines repetitive tasks, such as data entry and workflow approvals, to increase productivity.",
        },
        {
          id: 7,
          title: "Integration",
          subtitle: "Integration",
          desc: "Connects with other business systems like e-commerce platforms and third-party applications to create a unified data view.",
        },
        {
          id: 8,
          title: "Cloud Deployment",
          subtitle: "Cloud Deployment",
          desc: "Offers benefits like scalability, lower IT costs, and easier updates.",
        },
        {
          id: 9,
          title: "Security and Compliance",
          subtitle: "Security and Compliance",
          desc: "Includes tools for data security, user access control, and managing regulatory compliance.",
        },
        {
          id: 10,
          title: "Mobile Accessibility",
          subtitle: "Mobile Accessibility",
          desc: "Allows employees to access critical data and perform tasks on the go.",
        },
        {
          id: 11,
          title: "Manufacturing and Production Management",
          subtitle: "Manufacturing and Production Management",
          desc: "Manages production schedules, quality control, and traceability for manufacturing businesses.",
        },
      ],
      benefits: [
        "Reduce 30% operational cost",
        "Automated Reporting",
        "Data Security",
      ],
      fullDesc:
        "Our ERP system integrates all facets of an operation — including product planning, development, manufacturing, sales and marketing — in a single database.",
      serviceTitle: ["ERP Software", "Services UK"],
      serviceSubtitle: [
        { text: "By Orbit Media Solutions — ", bold: true },
        {
          text: "Smart, Scalable & Custom ERP Solutions for UK Businesses",
          bold: false,
        },
      ],
      serviceDesc:
        "Orbit Media Solutions provides modern ERP (Enterprise Resource Planning) Software Services to help UK businesses streamline operations, automate processes, reduce cost, and gain real-time control over Finance, HR, Inventory, CRM, Supply Chain, and Manufacturing — all in one platform. We deliver fully customisable, scalable and secure ERP solutions tailored for SMEs and enterprises across the UK.",
      serviceImage: e1,
      // softwareService
      softwareServiceTitle: "Our ERP Software Services",
      softwareServiceDesc:
        "We offer end-to-end ERP development, implementation, customisation, migration, and ongoing support for UK-based businesses.",
      softwareServiceImage: erpsoft,
      softwareTableTitle: "ERP Modules We Provide",
      softwareTableHeaders: ["ERP Module", "Features"],
      softwareModules: [
        {
          module: "Finance & Accounting",
          features:
            "Billing, UK tax compliance, budgeting, reporting, automation",
        },
        {
          module: "HR & Payroll",
          features:
            "Automated payroll, attendance, onboarding, performance tracking",
        },
        {
          module: "Inventory & Warehouse",
          features:
            "Stock control, barcode, multi-location management, forecasting",
        },
        {
          module: "Supply Chain Management",
          features: "Vendor sourcing, order tracking, procurement automation",
        },
        {
          module: "CRM & Sales ERP",
          features: "Lead management, sales automation, pipeline tracking",
        },
        {
          module: "Manufacturing ERP",
          features:
            "BOM, production planning, cost control, quality management",
        },
      ],
      // ===== ERP Industries Section =====
      industriesTitle: "Industries We Serve Across the UK",
      industriesSubtitle:
        "Our ERP system is custom-tailored to meet the unique operational needs of businesses across multiple industries.",

      industriesList: [
        {
          title: "Manufacturing & Engineering",
          desc: "Streamline production processes and optimize inventory management. Enhance operational efficiency across all units. Reduce downtime and improve resource utilization.",
        },
        {
          title: "Retail & E-commerce",
          desc: "Manage sales, stock, and online platforms seamlessly. Improve customer experience and speed up order fulfillment. Track orders and inventory in real-time for better decision making.",
        },
        {
          title: "Logistics & Supply Chain",
          desc: "Optimize shipping, tracking, and supply management. Reduce delays and increase operational transparency. Enhance coordination between suppliers, warehouses, and customers.",
        },
        {
          title: "Construction & Real Estate",
          desc: "Track projects, contracts, and resources effectively. Ensure timely completion and maintain cost control. Improve collaboration between teams and stakeholders.",
        },
        {
          title: "Pharmaceuticals & Healthcare",
          desc: "Maintain regulatory compliance while managing patient or product data efficiently. Streamline operations and reduce administrative workload. Enhance accuracy and reliability in critical processes.",
        },
        {
          title: "Food & Beverage",
          desc: "Control inventory, manage production, and ensure quality assurance. Ensure timely delivery and consistent product quality. Improve operational efficiency across supply chain and kitchens.",
        },
        {
          title: "Education & Training Institutions",
          desc: "Automate student records, scheduling, and reporting. Streamline administrative processes for teachers and staff. Enhance management of courses, exams, and student progress.",
        },
        {
          title: "Technology & Software Companies",
          desc: "Organize projects, resources, and client management efficiently. Improve team collaboration and productivity. Enable smooth project tracking and reporting in real-time.",
        },
        {
          title: "Service & Consultancy Firms",
          desc: "Optimize client interactions, billing, and project workflows. Deliver faster, reliable, and scalable services. Improve internal efficiency and customer satisfaction.",
        },
      ],

      erpBenefitsTitle: "Benefits of Orbit’s ERP Solutions",
      erpBenefitsDesc1:
        "Orbit’s ERP solutions help businesses reduce operational costs by up to 40% while boosting workforce productivity and efficiency. Our system enables full automation of business operations, provides real-time analytics for smarter decision-making, and ensures high-level security with reliable cloud backup support.",
      erpBenefitsDesc2:
        "Fully customised to comply with UK business regulations, Orbit ERP seamlessly integrates with CRM, POS, HR, Accounting, and E-commerce platforms.",

      erpWhyChooseTitle: "Why Choose Orbit Media Solutions",
      erpWhyChooseList: [
        "Fully customisable ERP modules for UK businesses",
        "Affordable subscription and development costs",
        "Fast implementation with training and onboarding",
        "Dedicated remote and on-site support",
        "Scalable solutions for startups to enterprises",
        "ERP systems designed around your business needs",
      ],
      // ===== ERP Implementation Section =====
      erpImplementationTitle: "How We Implement ERP Software",

      erpImplementationSteps: [
        "Business Requirements & Analysis",
        "Workflow Mapping & UI Design",
        "ERP Customisation",
        "System Integration (CRM, POS, HR, Accounting, Banking etc.)",
        "Employee Training & Onboarding",
        "Security Testing, Support & Maintenance",
      ],

      erpImplementationNote:
        "We provide secure data migration and backup with every ERP implementation to ensure zero data loss and maximum system reliability.",

      erpImplementationBg: erphero2,
      // 👇 ADD FAQ SECTION HERE 
      faqs: [
        {
          id: 1,
          question: "What is a customized ERP software?",
          answer: "Tailor-made software that fits your exact workflow, unlike off-the-shelf solutions that force you to change your processes.",
        },
        {
          id: 2,
          question: "Why choose custom ERP over generic software?",
          answer: "No irrelevant features—only what makes your business efficient. It scales with your growth and provides better security.",
        },
        {
          id: 3,
          question: "Do you offer free consultation?",
          answer: "Yes, we analyze your business needs, workflow, and pain points before proposing a development plan.",
        },
        {
          id: 4,
          question: "Can it integrate with my existing bank or Xero/QuickBooks?",
          answer: "Yes, our ERP supports API integrations with UK banks, Xero, QuickBooks, Sage, and other third-party systems.",
        },
        {
          id: 5,
          question: "Is the data stored securely in the UK?",
          answer: "Absolutely. We use GDPR-compliant, secure cloud servers with daily backups to ensure your data is safe and accessible.",
        },
      ],
    },
    ukBusiness: {
      title: "Why Do UK Businesses Need ERP Software?",
      description:
        "Today, UK companies are rapidly shifting towards automation and data-driven decision-making. ERP is now an essential part of achieving operational excellence.",
      benefits: [
        "Centralise business operations",
        "Minimise manual tasks",
        "Automate key processes",
        "Improve productivity & efficiency",
        "Ensure UK compliance & accounting standards",
        "Make accurate real-time decisions based on data",
      ],
      conclusion:
        "ERP is a long-term investment that boosts growth, reduces cost, and improves business performance.",
      image: erpukbusiness,
    },
  },
  {
    id: 2,
    img: pimg2,
    icon: "SlHome",
    title: "HR Management Software in the UK",
    slug: "hr-management",
    desc: "Orbit Media Solutions brings you a complete, cloud-based Human Resources Management (HRM) Software designed specifically for UK companies.",
    btnText: "Details",
    details: {
      heroTitle: "Smart HR Management System",
      features: [
        "Payroll Automation",
        "Employee Portal",
        "Attendance Tracking",
        "Recruitment Module",
      ],
      benefits: [
        "HMRC Compliant",
        "Save HR Admin Time",
        "Employee Satisfaction",
      ],
      fullDesc:
        "Manage your entire employee lifecycle from recruitment to retirement. Our HR software automates payroll, attendance, and performance reviews seamlessly.",
    },
  },
  {
    id: 3,
    img: pimg3,
    icon: "SlHome",
    title: "Smart Cloud Inventory Control",
    slug: "inventory-management",
    desc: "Managing stock shouldn’t be complicated. If you’re dealing with overstocking, stockouts, or messy spreadsheets, it’s time for a smarter solution.",
    btnText: "Details",
    details: {
      heroTitle: "Cloud-Based Inventory Control",
      features: [
        "Stock Tracking",
        "Barcode Scanning",
        "Multi-warehouse",
        "Low Stock Alerts",
      ],
      benefits: ["Prevent Stockouts", "Reduce Waste", "Real-time Visibility"],
      fullDesc:
        "Track stock levels in real-time across multiple warehouses. Predict demand and automate reordering with our smart inventory solution.",
    },
  },
  {
    id: 4,
    img: pimg4,
    icon: "SlHome",
    title: "Power Your UK Business with Smarter POS Software",
    slug: "pos-software",
    desc: "Modern Point of Sale (POS) software has evolved into a strategic business tool that helps you manage sales and customers.",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 5,
    img: pimg5,
    icon: "SlHome",
    title: "All-in-One Hotel Management Software in UK",
    slug: "hotel-management",
    desc: "Looking for the ultimate hotel management software UK? Orbit Media Solutions helps hoteliers streamline operations, increase revenue, and create exceptional guest experiences. Trusted by..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 6,
    img: pimg6,
    icon: "SlHome",
    title: "Accounting Software for Growing Businesses",
    slug: "accountant-software",
    desc: "Take control of your business finances with easy-to-use, cloud-based accounting software designed for UK small businesses, medium enterprises, and self-employed professionals. Automate..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 7,
    img: pimg7,
    icon: "SlHome",
    title: "Payroll Software for UK Businesses",
    slug: "payroll",
    desc: "At Orbit Media Solutions, we provide modern, cloud-based payroll software designed specifically for UK employers. Our HMRC-recognised system helps HR and payroll teams run payroll..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 8,
    img: pimg8,
    icon: "SlHome",
    title: "Education Management Software",
    slug: "education-management",
    desc: "At Orbit Media Solutions, we provide industry-leading education management software designed to streamline school operations, enhance learning, and empower educators. Our solutions are..",
    btnText: "Details",
  },
  {
    id: 9,
    img: pimg9,
    icon: "SlHome",
    title: "Law Firm Management Software UK",
    slug: "law-firm-management",
    desc: "At Orbit Media Solutions, we specialise in providing industry-leading law firm management software built specifically for UK solicitors, legal teams and growing practices. Our powerful, cloud-..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 10,
    img: pimg10,
    icon: "SlHome",
    title: "Restaurant / Takeaway Management Software UK",
    slug: "restaurant-management",
    desc: "Manage your restaurant with ease using our complete restaurant management software designed for the UK hospitality industry. Orbit Media Solutions provides one powerful platform that reduce..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 11,
    img: pimg11,
    icon: "SlHome",
    title: "Pharmacy Management Software",
    slug: "pharmacy-management",
    desc: "At Orbit Media Solutions, we provide advanced Pharmacy Management Software (PMS) in the UK designed to streamline day-to-day pharmacy operations. From automated prescriptions to..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 12,
    img: pimg12,
    icon: "SlHome",
    title: "Warehouse Management Software UK",
    slug: "warehouse-management-software",
    desc: "At Orbit Media Solutions, we provide advanced Warehouse Management Software (WMS) for UK ecommerce, 3PL, logistics and wholesale companies. Our powerful cloud-based WMS helps you..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
  {
    id: 13,
    img: pimg13,
    icon: "SlHome",
    title: "Web Hosting",
    slug: "hosting-site",
    desc: "Looking for reliable UK web hosting that delivers speed, security and 24/7 support? Orbit Media Solutions provides premium hosting solutions designed for businesses, startups and e-commerce..",
    btnText: "Details",
    details: {
      heroTitle: "Next-Gen POS Software",
      features: ["Fast Billing", "Offline Mode", "Inventory Sync", "CRM"],
      benefits: ["Faster Checkout", "Customer Loyalty", "Easy Accounting"],
      fullDesc:
        "A simple cash register is no longer enough. Our POS helps you manage your retail or hospitality business efficiently.",
    },
  },
];

export const blogsData = [
  {
    id: 1,
    slug: "pharmacy-management-software", // URL এর জন্য এই স্লাগ ব্যবহার হবে
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Pharmacy Management Software",
    description:
      "Pharmacy Management Software UK: The Key to Faster, Safer, and Smarter Pharmacy Operations",
    image:
      "https://theorbit.one/uploads/blogs/banner_images/banner_1766316141_Pharmacy%20Blog.png",
    // ডিটেইলস পেজের জন্য বড় কন্টেন্ট
    content: `
      <p>In today’s fast-paced healthcare environment, UK pharmacies face growing demands. Manual systems are no longer sufficient to keep up with modern pharmacy operations.</p>
      <h3 class="text-xl font-bold mt-4">Why Pharmacy Software is Essential?</h3>
      <p>Pharmacy Management Software helps streamline workflows, reduce errors, and improve overall patient satisfaction. It automates prescriptions, manages stock levels, and ensures compliance with UK regulations.</p>
    `,
  },
  {
    id: 2,
    slug: "react-best-practices",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "React Best Practices",
    description: "Write clean and scalable React applications.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>React is a powerful library, but writing clean code is essential for scalability. Always use functional components and Hooks over class components.</p>
      <ul class="list-disc pl-5 mt-4">
        <li>Keep components small and reusable.</li>
        <li>Use meaningful variable names.</li>
        <li>Optimize performance with useMemo and useCallback.</li>
      </ul>
    `,
  },
  {
    id: 3,
    slug: "tailwind-css-tips",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Tailwind CSS Tips",
    description: "Speed up your workflow with Tailwind CSS.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>Tailwind CSS allows you to build modern designs without leaving your HTML. Use utility classes like 'flex', 'grid', and 'hidden' to control layout easily.</p>
      <p>Tip: Use the @apply directive in your CSS file to extract repeated patterns into reusable classes.</p>
    `,
  },
  {
    id: 4,
    slug: "javascript-performance",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "JavaScript Performance",
    description: "Optimize JS code for better performance.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>Performance is key for a good user experience. Avoid long blocking tasks on the main thread.</p>
      <p>Use asynchronous programming (Async/Await) and lazy loading for images and components to speed up load times.</p>
    `,
  },
  {
    id: 5,
    slug: "frontend-architecture",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Frontend Architecture",
    description: "Build scalable frontend architectures.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>A good frontend architecture separates concerns. Keep your logic separate from your UI components.</p>
      <p>Folder structure matters: Organize by features rather than file types for larger applications.</p>
    `,
  },
  {
    id: 6,
    slug: "ui-component-design",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "UI Component Design",
    description: "Design reusable UI components.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>Reusable components save time and ensure consistency. Use props to make components dynamic.</p>
      <p>Tools like Storybook can help you build and test components in isolation before using them in your app.</p>
    `,
  },
  {
    id: 7,
    slug: "accessibility-matters",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Accessibility Matters",
    description: "Make your website accessible to everyone.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>Web accessibility ensures that people with disabilities can use your website. Always use semantic HTML tags.</p>
      <p>Don't forget 'alt' text for images and 'aria-labels' for buttons that rely on icons.</p>
    `,
  },
  {
    id: 8,
    slug: "web-animations",
    category: "Web Development",
    date: "Dec 20, 2025",
    title: "Web Animations",
    description: "Add smooth animations to your UI.",
    image:
      "https://plus.unsplash.com/premium_photo-1765228499795-e58288bc382b?q=80&w=725&auto=format&fit=crop",
    content: `
      <p>Animations can guide user attention and make the interface feel responsive. Use CSS transitions for simple effects.</p>
      <p>For complex sequences, libraries like Framer Motion (for React) or GSAP are industry standards.</p>
    `,
  },
];
