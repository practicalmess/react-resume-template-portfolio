import {ArrowDownTrayIcon, BuildingOffice2Icon, IdentificationIcon, MapIcon} from '@heroicons/react/24/outline';
import {StaticImageData} from 'next/image';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import heroImage from '../images/sea-turtle.jpeg';
import heroImage from '../images/background-coral.jpg';
import portfolioImage from '../images/deep-jellyfish.jpeg';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
// import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Sid's Home Studio",
  description: "Sid Hackney's professional, bespoke web solutions",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: "Hi, I'm Sid",
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Boston based <strong className="text-stone-100">Full Stack Web Developer</strong> with experience building
        web solutions for e-commerce, government, small businesses, and local non-profits. My passion is making the web
        more <strong className="text-stone-100">accessible for everyone</strong>, whether they want to browse as a user
        or build something entirely new to share with the world.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My goal is to be able to find a solution for every budget, from a brief consultation to a fully managed website
        with ongoing maintenance and support.{' '}
        <strong className="text-stone-100">Step into the studio and let's make something together!</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
    {
      href: 'https://snackney.nyc3.cdn.digitaloceanspaces.com/Freelance/Portfolio/resume.pdf',
      text: 'Resume',
      primary: false,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With over four years of professional full stack development experience, I specialize in crafting user-friendly, accessible, and engaging web applications tailored to the diverse needs of audiences. I have extensive experience in many of the tools that power much of the internet today. Beyond technical prowess, my passion lies in web accessibility and user engagement. I find great joy in not only creating seamless web applications but also in demystifying the intricacies of maintaining a modern website. My goal is to make the digital landscape more approachable, ensuring that technology serves as an empowering tool rather than an intimidating barrier. Join me on this journey as we explore the intersection of technology, innovation, and creating meaningful user experiences that resonate with simplicity and accessibility.`,
  aboutItems: [
    {label: 'Location', text: 'Boston, MA', Icon: MapIcon},
    {label: 'Pronouns', text: 'they/them', Icon: IdentificationIcon},
    // {label: 'Interests', text: '', Icon: SparklesIcon},
    {label: 'Employment', text: 'Focus Consulting, LLC', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'PMRP Digital Program',
    description:
      'A responsive, single page displaying cast and crew information in the style of a paper program for the local theater group the Post Meridian Radio Players.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

export const portfolioInfo: {src: string | StaticImageData; items: PortfolioItem[]} = {
  src: portfolioImage,
  items: portfolioItems,
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - Present',
    location: 'Focus Consulting, LLC',
    title: 'Software Engineer',
    content: (
      <p>
        Wrote and reviewed code both front end and back end code as part of a scrum team responsible for the
        Massachusetts Paid Family and Medical Leave (PFML) website
      </p>
    ),
  },
  {
    date: 'November 2019 - February 2022',
    location: 'Wayfair, LLC',
    title: 'Software Engineer II',
    content: (
      <p>
        Acted as the team's "stability captain," taking ownership of critical aspects of the application such as real
        time error monitoring and alerting, documentation, test coverage, and code quality
      </p>
    ),
  },
  {
    date: 'October 2017 - October 2018',
    location: 'Wayfair, LLC',
    title: 'Software Engineer',
    content: (
      <p>
        Played a key role in refactoring the Category Management tool utilized by internal merchandisers, participating
        in a complete rewrite of the tool using React.js from the ground up
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: portfolioImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch!',
  description: "Drop me a line and let's talk about how I can best serve your needs, whatever your budget.",
  items: [
    {
      type: ContactType.Email,
      text: 'hacksid.official@gmail.com',
      href: 'mailto:hacksid.official+portfolioleads@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Boston, MA',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'Sid Hackney on LinkedIn',
      href: 'https://www.linkedin.com/in/sidney-j-hackney/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/practicalmess'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sidney-j-hackney'},
];
