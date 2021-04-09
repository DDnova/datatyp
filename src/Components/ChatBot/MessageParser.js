class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("bye")) {
      this.actionProvider.bye();
    }
    if (lowerCaseMessage.includes("tell me a joke")) {
      this.actionProvider.joke();
    }
    if (lowerCaseMessage.includes("fun fact")) {
      this.actionProvider.fact();
    }
    if (lowerCaseMessage.includes("web development")) {
      this.actionProvider.handleJavascriptList();
    }
    if (lowerCaseMessage === "c") {
      this.actionProvider.handleCList();
    }

    if (lowerCaseMessage.includes("cpp")) {
      this.actionProvider.handleCppList();
    }
    if (lowerCaseMessage.includes("java")) {
      this.actionProvider.handleJavaList();
    }

    if (lowerCaseMessage.includes("python")) {
      this.actionProvider.handlePythonList();
    }
    if (lowerCaseMessage.includes("bash")) {
      this.actionProvider.handleBashList();
    }
  }
}

export default MessageParser;
