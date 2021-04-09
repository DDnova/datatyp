import React, { Component } from "react";
import Terminal from "react-bash";
import "./Terminal.css";

const history = [{ value: "Type `help` to begin" }];
const structure = {
  public: {
    file1: {
      content: "The is the content for file1 in the <public> directory.",
    },
    file2: {
      content: "The is the content for file2 in the <public> directory.",
    },
    file3: {
      content: "The is the content for file3 in the <public> directory.",
    },
  },
  "README.md": {
    content: "Extendable bash terminal component built with ReactJS.",
  },
};
export default class TerminalAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandData: "",
    };
  }
  render() {
    const extensions = {
      sudo: {
        exec: ({ structure, history, cwd }) => {
          return {
            structure,
            cwd,
            history: history.concat({ value: "Nice try..." }),
          };
        },
      },
    };
    return (
      <div id="app" class="top -2">
        <center>
          <div className="parentContainer">
            <h4>Run YOUR commands here</h4>
            <div style={{ flex: 1 }}>
              <Terminal
                history={history}
                structure={structure}
                extensions={extensions}
                prefix={"user@BSCIT"}
              />
            </div>
            <div>{this.state.commandData}</div>
          </div>
        </center>
      </div>
    );
  }
}
