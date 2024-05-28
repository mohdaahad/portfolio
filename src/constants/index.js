import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    Ajio,
    BB,
    Zoomcar,
    ET,
    AD,
    livedemo,
    django,
    express,
    car_showcase,
    python,
    mysql,
    postgresql,
    nextjs,
    aws
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full-Stack Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Django",
        icon: django,
    },
    
    {
        name: "Express",
        icon: express,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    }
    
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2022 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];





const projects = [
    {
        name: "HHC(NGO)",
        description:
            "Helping Hands Community (HHC) is a web project for an NGO dedicated to aiding underserved populations through education, healthcare, and development. The site offers detailed project information, impact stories, volunteer opportunities, and a donation portal. It's a user-friendly platform for anyone interested in supporting or learning about HHC's mission.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "pink-text-gradient",
            },
        ],
        image: car_showcase,
        source_code_link: "https://github.com/mohdaahad/helping-hand-community",
        live_demo_link: "https://hhc4u.org/",
    },

    {
        name: "Entertainment App",
        description:
            "Entertainment App offers detailed information on movies, TV shows, music, and events, ensuring a seamless and enjoyable entertainment experience for all users. With personalized recommendations, reviews, interactive features, and a user-friendly interface, it's your go-to platform for exploring various entertainment options.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "React Query",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: AD,
        source_code_link: "https://github.com/mohdaahad/Entertainment-App",
        live_demo_link: "https://entertainment-web-fhghnvpl0-aleksfedotov1.vercel.app/",
    },
    {
        name: "Weather Forecasting",
        description: "Weather Forecasting is a project designed to provide users with accurate and up-to-date weather information. The app offers detailed forecasts, real-time updates, and weather alerts. With features like interactive maps, personalized weather reports, and a user-friendly interface, this app ensures that users are always informed about the latest weather conditions.",
        tags: [
            {
                name: "react-js",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "pink-text-gradient",
            },
        ],
        image: BB,
        source_code_link: "https://github.com/mohdaahad/weatherForecasting",
        live_demo_link: "https://mohdaahad.github.io/weatherForecasting/"
    },
    {
        name: "My Reports",
        description:
            "My Reports is a medical project designed to provide users with a comprehensive platform for managing their health records. The app offers secure storage of medical reports and the ability to share information with healthcare providers. With its user-friendly interface, My Reports ensures that users can efficiently manage their medical information. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "pink-text-gradient",
            },
            {
                name: "redux",
                color: "dark-green-text-gradient",
            },
        ],
        image: ET,
        source_code_link: "https://github.com/mohdaahad/my-reports/",
        live_demo_link: "hhttps://mohdaahad.github.io/my-reports/sign-in"
        
    },
    {
        name: "Islamic school",
        description:
            "Islamic School offers a diverse range of courses, lectures, and resources on various aspects of Islam. With features like interactive lessons, quizzes, Islamic School enables students to deepen their understanding of Islamic teachings.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: Zoomcar,
        source_code_link: "https://github.com/mohdaahad/jfya",
        live_demo_link: "https://mohdaahad.github.io/jfya/"
    },
    {
        name: "Ecommerce Website",
        description:
            "Ecommerce Website simplifies online shopping with its intuitive interface and secure payment options, ensuring a hassle-free experience for customers. Explore a wide array of products and enjoy convenient browsing and purchasing all in one place",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: Ajio,
        source_code_link: "https://github.com/mohdaahad/Ecommerce-Website",
        live_demo_link: "https://mohdaahad.github.io/Ecommerce-Website/"
    },
   
];

export { services, technologies, experiences, projects, testimonials };
