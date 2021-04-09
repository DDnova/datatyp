import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./LinkList";
import LearningOptions from "./LearningOptions";

const config = {
  botName: "ChatBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    // botMessageBox: {
    //   backgroundColor: "#376B7E",
    // },
    chatButton: {
      backgroundColor: "orange",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Web Development",
            url: "https://www.w3schools.com/whatis/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "CSS",
            url: "https://css-tricks.com/almanac/",
            id: 3,
          },
          {
            text: "Online Editor",
            url: "../Editor",
            id: 4,
          },
        ],
      },
    },
    {
      widgetName: "BashLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Bash",
            url: "https://cs.lmu.edu/~ray/notes/bash/",
            id: 1,
          },
          {
            text: "Bash Documentation",
            url: "https://www.gnu.org/software/bash/manual/bash.html",
            id: 2,
          },
          {
            text: "Try Bash",
            url: "../Compiler",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "CLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to C",
            url: "https://www.programiz.com/c-programming",
            id: 1,
          },
          {
            text: "C Documentation",
            url: "https://devdocs.io/c/",
            id: 2,
          },
          {
            text: "C Compiler",
            url: "../Compiler",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "CppLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to C++",
            url: "https://www.programiz.com/cpp-programming",
            id: 1,
          },
          {
            text: "C++ Documentation",
            url: "https://devdocs.io/cpp/",
            id: 2,
          },
          {
            text: "C++ Compiler",
            url: "../Compiler",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "JavaLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Java",
            url: "https://www.programiz.com/java-programming",
            id: 1,
          },
          {
            text: "Java Documentation",
            url: "https://docs.oracle.com/en/java/",
            id: 2,
          },
          {
            text: "Java Compiler",
            url: "../Compiler",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "PythonLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Python",
            url: "https://www.python.org/about/gettingstarted/",
            id: 1,
          },
          {
            text: "Python Documentation",
            url: "https://docs.python.org/3/",
            id: 2,
          },
          {
            text: "Try Python",
            url: "../Compiler",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
