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
            "Mohd quickly adapted to our fast-paced environment at Avtechfin. His expertise in full-stack development and attention to detail allowed us to implement complex features seamlessly. His innovative mindset and commitment to excellence make him a standout developer.",
        name: "Sara Lee",
        designation: "Senior Developer",
        company: "Avtechfin",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Mohd Aahad demonstrated exceptional skills as a Full Stack Web Developer Intern. His contributions significantly improved our platform's performance and user engagement. His ability to collaborate effectively and deliver high-quality solutions on time was invaluable to our team.",
        name: "Chris Brown",
        designation: "Project Manager",
        company: "Helping Hands Community",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "As a student, Mohd showcased outstanding dedication and talent in full-stack web development. He consistently delivered projects that exceeded expectations and demonstrated a strong grasp of both frontend and backend technologies. I have no doubt he will continue to excel in his career.",
        name: "Lisa Wang",
        designation: "Lead Instructor",
        company: "AlmaBetter",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Avtechfin",
        icon: tesla,
        iconBg: "#FFF",
        date: "09/2024 - Present",
        points: [
            "Software Developer with 6+ months of experience in full-stack development, specializing in B2B platforms, e-commerce, AI tools, and automation systems. Proficient in MERN stack, Django, Next.js, and cloud services. Built payment systems, live tracking, analytics, AI chatbots, and admin dashboards, improving efficiency and user experience. Passionate about scalable architectures and AI-driven solutions.",
        ],
    },
    {
        title: "Full Stack Web Developer Intern",
        company_name: "Helping Hands Community",
        icon: starbucks,
        iconBg: "#FFF",
        date: "07/2023 - 02/2024",
        points: [
            "Full Stack Web Developer Intern with hands-on experience in developing applications using Django and the MERN stack. Contributed to multiple projects, including a quiz platform and a CRM, enhancing performance and user satisfaction by 35%. Involved in the design and management of web applications, implementing features that improved operational efficiency by 30%. Skilled in collaborating within teams to deliver robust, user-focused solutions. Passionate about learning new technologies and enhancing web application functionality.",
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
