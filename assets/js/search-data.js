// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a brief and general version. For more detailed and updated version, please check the pdf above. Thank you!!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-graduated-from-iit-kharagpur",
          title: 'I graduated from IIT Kharagpur',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-i-joined-mechanics-of-solids-group-at-brown-university-school-of-engineering-as-a-doctoral-student",
          title: 'I joined Mechanics of Solids group at Brown University School of Engineering as...',
          description: "",
          section: "News",},{id: "news-i-joined-prof-miguel-a-bessa-s-lab-for-my-doctoral-thesis",
          title: 'I joined Prof. Miguel A. Bessa’s lab for my doctoral thesis.',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-prestigious-e-paul-sorensen-graduate-endowment-fellowship-2025-at-brown-university",
          title: 'I have been awarded the prestigious E. Paul Sorensen Graduate Endowment Fellowship (2025)...',
          description: "",
          section: "News",},{id: "news-i-attended-the-2025-u-s-national-committee-on-theoretical-and-applied-mechanics-usnc-tam-s-amerimech-symposium",
          title: 'I attended the 2025 U.S. National Committee on Theoretical and Applied Mechanics (USNC/TAM)’s...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-i-have-passed-my-qualifying-exams-today",
          title: 'I have passed my qualifying exams today!',
          description: "",
          section: "News",},{id: "news-i-presented-a-poster-at-brown-university-national-labs-day-2026",
          title: 'I presented a poster at Brown University National Labs Day 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
