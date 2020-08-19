module.exports = {
  siteTitle: 'Fahad Kamraan',
  siteDescription: 'Fahad Kamraan personal portfolio website.',
  siteKeywords:
    'Fahad Kamran, fahad kamran, fahad, kamran,Fahad Kamraan, Fahad, Kamraan,fahad kamraan, fahad, kamraan, SFK, S-FK, My personal Website, Fahad Kamraan personal website, home page, Fahad kamraan home page',
  siteUrl: 'https://s-fk.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-126194313-1',
  name: 'Fahad Kamraan',
  email: 'fahadkamraan@gmail.com',
  github: 'https://github.com/s-fk',
  twitterHandle: '@fahadkamraans',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/s-fk',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fahad-kamraan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fahadkamraan',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/fahadkamraans',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/fahad.kamraan',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
