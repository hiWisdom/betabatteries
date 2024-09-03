export type SubLinks = {
  header?: string;
  subMenu?: { label: string; href: string }[];
  subImages?: { label: string; href: string; image: string }[];
};

export type Links = {
  label: string;
  href: string;
  navImage?: string;
  caption?: string;
  subLinks?: SubLinks[];
};

export const links: Links[] = [
  // {
  //   label: "Discovery",
  //   href: "/mens",
  //   navImage: "/aidsday.jpeg",
  //   caption: "Discover Good Health",
  //   subLinks: [
  //     {
  //       header: "Health & Wellness",
  //       subMenu: [
  //         {
  //           label: "Keep Fit",
  //           href: "/",
  //         },
  //         {
  //           label: "Gastro and Nutritional Health",
  //           href: "/",
  //         },
  //         {
  //           label: "Mental Health",
  //           href: "/",
  //         },
  //       ],
  //     },
  //     // {
  //     //   header: "Accessories",
  //     //   subMenu: [
  //     //     {
  //     //       label: "Gloves",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Hats & Beanies",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Socks",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Helmets",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Goggles",
  //     //       href: "/",
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   header: "Clothing",
  //     //   subMenu: [
  //     //     {
  //     //       label: "Hoodies",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Jackets",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Sweatshirts",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "T-Shirts",
  //     //       href: "/",
  //     //     },
  //     //     {
  //     //       label: "Snowpants",
  //     //       href: "/",
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  {
    label: "Services",
    href: "/services",
    navImage: "/bookcolonoscopy.jpeg",
    caption: "Services we offer",
    subLinks: [
      {
        header: "Health Management Enterprise",
        subMenu: [
          {
            label: "Check your Body Mass Index",
            href: "/bmi",
          },
          {
            label: "Find a Doctor",
            href: "/tele",
          },
          {
            label: "Find an Ambulance",
            href: "/error",
          },
        ],
      },
      {
        header: "Gastro Procedures and Services",
        subMenu: [
          {
            label: "Colonoscopy",
            href: "https://timobhealthinternational.org//Product_pages/Products/product1.php",
          },
          {
            label: "Gastroscopy",
            href: "https://timobhealthinternational.org//Product_pages/Products/product2.php",
          },
          {
            label: "Liver Drainage",
            href: "https://timobhealthinternational.org//Product_pages/Products/product6.php",
          },
          {
            label: "Liver Biopsy",
            href: "https://timobhealthinternational.org//Product_pages/Products/product7.php",
          },
          {
            label: "Barium Swallow",
            href: "https://timobhealthinternational.org//Product_pages/Products/product3.php",
          },
          {
            label: "Barium Enema",
            href: "https://timobhealthinternational.org//Product_pages/Products/product4.php",
          },
          {
            label: "Pancreas Scan",
            href: "https://timobhealthinternational.org//Product_pages/Products/product5.php",
          },

        ],
      },
    ],
  },
  {
    label: "Contact us",
    href: "/contact",
    navImage: "/kindnessday.jpeg",
    caption: "Keep in touch and know you better everyday!",
    subLinks: [
      {
        header: "Telephone",
        subMenu: [
          {
            label: "+234 (0)803 576 8694",
            href: "tel:+23408035768694",
          },
          {
            label: "+234 (0)902 436 2969",
            href: "tel:+2309024362969",
          },
          {
            label: "+234 (0)7003 761 6991",
            href: "tel:+234070037616991",
          },
          {
            label: "+234 (0)813 056 2585",
            href: "tel:+23408130562585",
          },
        ],
      },
      {
        header: "Email",
        subMenu: [
          {
            label: "info@timobhealthinternational.org",
            href: "mail:info@timobhealthinternational.org",
          },
          {
            label: "timobhealthinternational@gmail.com",
            href: "mail:timobhealthinternational@gmail.com",
          },
        ],
      },
      {
        header: "Social Network",
        subMenu: [
          {
            label: "Whatsapp",
            href: "https://wa.me/+23408035768694?text=hi",
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/toyin.asaolu.1/",
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/hepatitiscorner/",
          },
          {
            label: "Youtube",
            href: "https://www.linkedin.com/in/toyin-asaolu-5608a668/?originalSubdomain=ng",
          },
        ],
      },
      {
        header: "About us",
        subMenu: [
          {
            label: "Find a Doctor",
            href: "/find-doctor",
          },
          {
            label: "Contact us",
            href: "/contact",
          },
          {
            label: "Testimonials",
            href: "/testimonials",
          },
          {
            label: "Hepatitis Corner",
            href: "/blog",
          },
        ],
      },
    ],
  },

  {
    label: "Check BMI",
    href: "/bmi",
  },
  
  {
    label: "Join our Doctor Team",
    href: "/auth/signup",
  },
];
