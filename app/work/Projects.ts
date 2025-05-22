export type Project = {
  num: string;
  name: string;
  category: string;
  description: string;
  stack: {
    name: string;
  }[];
  fe: {
    name: string;
  }[];
  be?: {
    name: string;
  }[];
  others: {
    name: string;
  }[];
  image: string;
  live: string;
  github1: string;
  github2?: string;
};

// type Projects = Project[];

export default [
  {
    num: "01",
    name: "Construction building",
    category: "frontend",
    description:
      "A Construction Build web experience — a sleek, modern platform developed with Next.js for high performance and Framer Motion to bring every interaction to life. From smooth scrolling to animated section reveals, . As users explore the site, they’re greeted with subtle transitions, sliding text, and fade-ins that enhance the narrative without overwhelming the user",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
      { name: "React-scroll" },
      { name: "Swiper" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
      { name: "React-scroll" },
      { name: "Swiper" },
    ],
    image: "/assets/construction.jpg",
    live: "https://construction-lilac-two.vercel.app/",
    github1: "https://github.com/mohammadrida990/construction",
  },
  {
    num: "02",
    name: "Blog system",
    category: "fullstack",
    description:
      "A project act as blog system that shows posts, comments, likes and manage your post lists after authentication",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "React" },
      { name: "GraphQl" },
      { name: "Prisma" },
      { name: "SqlLite" },
      { name: "Turborepo" },
      { name: "Supabase" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "Framer-motion" },
      { name: "Zod" },
      { name: "Argon2" },
      { name: "Jwt" },
      { name: "Nestjs-passport" },
      { name: "Tanstack-react-query" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "React" },
      ,
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "Framer-motion" },
      { name: "Zod" },
      { name: "Tanstack-react-query" },
    ],
    be: [
      { name: "Nest.js" },
      { name: "GraphQl" },
      { name: "Prisma" },
      { name: "SqlLite" },
      { name: "Argon2" },
      { name: "Jwt" },
      { name: "Nestjs-passport" },
    ],
    others: [{ name: "Supabase" }, { name: "Turborepo" }, { name: "Render" }],
    image: "/assets/blog.png",
    live: "https://blog-system-pi.vercel.app/",
    github1: "https://github.com/mohammadrida990/blog-system",
  },
  {
    num: "03",
    name: "Coffee shop",
    category: "frontend",
    description:
      "This project is a coffee shop as a creative exploration of modern web animations using tools like Framer Motion, GSAP and Tailwind CSS. It focuses purely on experimenting with scroll-based animations, transitions, and layout interactions. The goal was not to build a complete product, but to test how elements can move, transform, and respond to user actions in smooth and visually engaging ways.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "GSAP" },
      { name: "Locomotive-scroll" },
      { name: "gsap-react" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "GSAP" },
      { name: "Locomotive-scroll" },
      { name: "gsap-react" },
    ],
    image: "/assets/coffeeShop.jpg",
    live: "https://coffee-shop-two-red.vercel.app/",
    github1: "https://github.com/mohammadrida990/coffee-shop",
  },
  {
    num: "04",
    name: "E-commerce",
    category: "fullstack",
    description:
      "Small ecommerce project that shows some products, select products, add to cart and checkout",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "Zustand" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
    ],
    be: [{ name: "Nest.js" }, { name: "PostgreSQL" }],
    others: [{ name: "Stripe" }],
    image: "/assets/eccomerce.png",
    live: "",
    github1: "https://github.com/mohammadrida990/eccomerce_frontend",
    github2: "https://github.com/mohammadrida990/ecommerce-backend",
  },
  {
    num: "05",
    name: "Scrolling animation",
    category: "frontend",
    description:
      "This project is a creative exploration of modern web animations using tools like Framer Motion and Tailwind CSS. It focuses purely on experimenting with scroll-based animations, transitions, and layout interactions. The goal was not to build a complete product, but to test how elements can move, transform, and respond to user actions in smooth and visually engaging ways.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "GSAP" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "GSAP" },
    ],
    image: "/assets/scroll.png",
    live: "https://scrolling-animation-six.vercel.app/",
    github1: "https://github.com/mohammadrida990/scrolling-animation",
  },
  {
    num: "06",
    name: "Rida Portfolio",
    category: "frontend",
    description:
      "My portfolio project that describe my resume with skills, experience education and my contact information and social media.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
    ],
    fe: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
    ],
    image: "/assets/porfolio.png",
    live: "https://rida-portfolio-five.vercel.app/",
    github1: "https://github.com/mohammadrida990/rida-portfolio",
  },
  {
    num: "07",
    name: "Admin dashboard",
    category: "fullstack",
    description:
      "Small admin dashboard project that shows some analysis about users and products with ability to add users and products with info. with ability to login using username and password or login with google",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "Recharts" },
      { name: "SWR" },
      { name: "Date-fns" },
      { name: "PostgreSQL" },
      { name: "Bcrypt" },
      { name: "Prisma" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "Recharts" },
      { name: "SWR" },
      { name: "Date-fns" },
    ],
    be: [{ name: "Prisma" }, { name: "PostgreSQL" }, { name: "Bcrypt" }],
    others: [{ name: "Neon" }],
    image: "/assets/admin-dashboard.jpg",
    live: "https://admin-dashboard-puce-nine-24.vercel.app/dashboard",
    github1: "https://github.com/mohammadrida990/admin-dashboard",
  },
  {
    num: "08",
    name: "Animation sliders",
    category: "frontend",
    description:
      "This small project is a web experience built with React, focusing on smooth, engaging animations powered by GSAP and Framer Motion. It blends the precision and performance of GSAP with the intuitive React-based animation capabilities of Framer Motion to deliver dynamic UI transitions, fluid interactions, and immersive motion design. This combination enables us to create highly responsive and visually compelling interfaces that enhance user engagement and bring the application to life.",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "Gsap" },
      { name: "React-icons" },
    ],
    fe: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "Gsap" },
      { name: "React-icons" },
    ],
    image: "/assets/animation-sliders.jpg",
    live: "https://animation-sliders.vercel.app/",
    github1: "https://github.com/mohammadrida990/animation-sliders",
  },
  {
    num: "09",
    name: "Smokers vibes",
    category: "frontend",
    description:
      "This small project is a web experience built with React, focusing on smooth, engaging animations powered by GSAP and Framer Motion. It blends the precision and performance of GSAP with the intuitive React-based animation capabilities of Framer Motion to deliver dynamic UI transitions, fluid interactions, and immersive motion design. This combination enables us to create highly responsive and visually compelling interfaces that enhance user engagement and bring the application to life.",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "Gsap" },
      { name: "Locomotive-scroll" },
      { name: "React-router-dom" },
    ],
    fe: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "Gsap" },
      { name: "Locomotive-scroll" },
      { name: "React-router-dom" },
    ],
    image: "/assets/smokers.jpg",
    live: "https://smokers.vercel.app/",
    github1: "https://github.com/mohammadrida990/smokers",
  },
] as Project[];
