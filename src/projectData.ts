export type ProjectData = {
    name: string;
    description: string;
    image?: string;
    link: string;
    github: string;
};
const projectData: ProjectData[] = [
    {
        name: "WanderNest",
        description:
            "A comprehensive travel planning application designed to simplify the process of organizing trips. It provides personalized itineraries, budget management, accommodation suggestions, dining options, and activity recommendations based on user preferences and location.",
        image: "wandernest.png",
        link: "https://wandernest-drab.vercel.app/",
        github: "https://github.com/NhatPhucNguyen/wandernest",
    },
    {
        name: "BookFinder",
        description:
            "An online bookstore web application designed to provide a seamless and intuitive book shopping experience. Built with modern technologies like Next.js, React, and TypeScript, BookFinder offers a robust and scalable solution for book lovers and readers of all kinds",
        image: "bookfinder.png",
        link: "https://bookstore-lyart-omega.vercel.app/",
        github: "https://bookstore-lyart-omega.vercel.app/",
    },
    {
        name: "QQuizzes",
        description:
            "A quiz-generate web application where people can create, share and play with others",
        link: "https://q-quizzes-frontend-react.vercel.app/",
        github: "https://github.com/NhatPhucNguyen/QQuizzes_Frontend_React",
        image:"qquizzes.png"
    },
    {
        name:"The Weather Forecast",
        description:"Predict the conditions of the atmosphere for a given city or user's current location, using the Weather API - OpenWeatherMap",
        link:"https://the-weather-forecast.vercel.app/",
        github:"https://github.com/NhatPhucNguyen/the-weather-forecast"
    }
];
export default projectData;
