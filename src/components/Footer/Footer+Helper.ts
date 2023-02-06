import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import LinkedIn from "../../assets/img/LinkedIn.png";
import Twitter from "../../assets/img/Twitter.png";
import Youtube from "../../assets/img/Youtube.png";

export const footerArray = [
  {
    title: "Our company",
    content: ["About us", "FAQ", "Partnerships", "Sustainability", "Blog"],
  },
  {
    title: "How can we help",
    content: ["Place a ticket", "Track your order", "Help center"],
  },
  {
    title: "Information",
    content: ["Contact us", "Live chat", "Privacy", "Terms of use"],
  },
];

type IconDTO = {
  src: string;
  alt: string;
};

export const socialIconsArray: IconDTO[] = [
  {
    src: Facebook,
    alt: "Facebook",
  },
  {
    src: Instagram,
    alt: "Instagram",
  },
  {
    src: LinkedIn,
    alt: "LinkedIn",
  },
  {
    src: Twitter,
    alt: "Twitter",
  },
  {
    src: Youtube,
    alt: "Youtube",
  },
];
