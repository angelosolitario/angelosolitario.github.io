import HomePage from "../../static/img/home-page-gatorstore.png";
import TodoPage from "../../static/img/todo-list.gif";
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
];

export default projects