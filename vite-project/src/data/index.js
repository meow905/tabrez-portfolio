import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import figma from "../assets/skills/figma.png";
import tailwind from "../assets/skills/Tailwind_CSS_Logo.svg.png";
import nextJS from "../assets/skills/nextjs-icon-svgrepo-com.svg";
import internetShop from "../assets/internetShop.png"
import promoWorld from "../assets/promoWorld.png"


export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "NextJS",
    imageSrc: nextJS,
  },
  {
    title: "TailwindCSS",
    imageSrc: tailwind,
  },
 
  {
    title: "Figma",
    imageSrc: figma,
  },
];


export const projects = [
  {
    title: "Доставка еды",
    imageSrc: internetShop,
    description: "Сайт по доставке фастфуда",
    demo: "https://internet-shop-weld.vercel.app/",
  },
  {
    title: "Веб-магазин",
    imageSrc: promoWorld,
    description: "Сайт с многообразной продукцией",
    demo: "https://promo-world.vercel.app/",
  },
];
