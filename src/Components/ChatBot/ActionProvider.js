class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet = () => {
    const greetingMessage = this.createChatBotMessage("Hi, how are you");
    this.updateChatbotState(greetingMessage);
  };
  bye = () => {
    const byeMessage = this.createChatBotMessage(
      "Goodbye Friend!  Hope to see you soon.👋"
    );
    this.updateChatbotState(byeMessage);
  };

  joke = () => {
    const jokeMessage = this.createChatBotMessage(
      "Q: What does JavaScript call his son? A: JSON "
    );
    this.updateChatbotState(jokeMessage);
  };

  fact = () => {
    const factMessage = this.createChatBotMessage("Linux runs on everything");
    this.updateChatbotState(factMessage);
  };

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Web Develpoment:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleBashList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Bash :",
      {
        widget: "BashLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleCList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on C :",
      {
        widget: "CLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleCppList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on C++ :",
      {
        widget: "CppLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleJavaList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Java :",
      {
        widget: "JavaLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handlePythonList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Python :",
      {
        widget: "PythonLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
