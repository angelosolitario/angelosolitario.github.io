import HomePage from "../static/img/home-page-gatorstore.png";
import TodoPage from "../static/img/todo-list.gif";
import TankGame from '../static/img/tank-game.jpg'
import NoteTaking from '../static/img/note-taking-app.png'
const projects = [
    {
        title: "Gator Store",
        image: HomePage,
        link:"https://gatorstore.duckdns.org/",
        tech: {
            frontend: "HTML, CSS, JavaScript, BootStrap and EJS templates",
            backend: "MySQL, Node.js",
        },
        desc:
            "An online buy and sell website dedicated to San Francisco State Students. Allows users to login/register and buy/sell.",
    },
    {
        title: "Todo List",
        image: TodoPage,
        link:"https://github.com/angelosolitario/Full-Stack-Todo-List",
        tech: {
            frontend: "HTML, CSS, JavaScript, BootStrap and EJS templates",
            backend: "MongoDB, Node.js",
        },
        desc: "A Full Stack Todo List that allows users to add and delete an item.",
    },
    {
        title: "Note Taking App",
        image: NoteTaking,
        link:"https://github.com/angelosolitario/NoteTakingApp",
        tech: {
            frontend: "HTML, CSS, JavaScript, React, Redux",
            backend: "MongoDB, Express, Node.js",
        },
        desc: "A Note Taking application that allows users to login/register, add/delete/edit a note item.",
    },
    {
        title: "Multiplayer Tank Game",
        image: TankGame,
        link:"https://github.com/angelosolitario/Multiplayer-Tank-Game",
        tech: {
            frontend: "Java",
            backend: "Java",
        },
        desc: "A Multiplayer Tank Game using Java/GUI",
    },
];

export default projects