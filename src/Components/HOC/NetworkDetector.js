import React, { Component } from "react";
import Swal from "sweetalert2";
export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false,
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener("online", this.handleConnectionChange);
      window.addEventListener("offline", this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.handleConnectionChange);
      window.removeEventListener("offline", this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      const condition = navigator.onLine ? "online" : "offline";
      if (condition === "online") {
        const webPing = setInterval(() => {
          fetch("//google.com", {
            mode: "no-cors",
          })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing);
              });
            })
            .catch(() => this.setState({ isDisconnected: true }));
        }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    };

    render() {
      const { isDisconnected } = this.state;
      return (
        <div>
          {isDisconnected && (
            <div className="internet-error">
              <p>Internet connection lost</p>
              {Swal.fire({
                title: "Internet connection lost!",
                icon: "error",
                width: 600,
                padding: "3em",
                background: '#fff url("./tumblr_lrbu1l9BJk1qgzxcao1_250.gif")',
                backdrop: `rgba(0,0,123,0.4)`,
              }).then(() => {
                window.location = "../";
              })}
            </div>
          )}
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}
