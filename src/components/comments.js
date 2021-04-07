import React, { Component } from "react";
import { ThemeContext } from '../context/themeContext';

export default class Comments extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }
  componentDidMount() {
    const { theme } = this.context;
    const utteranceTheme = theme === "dark" ? "github-dark" : "github-light";
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("repo", "sadanand-singh/reckoning.dev.comments");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", utteranceTheme);
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div id="comments" className="comment-box-wrapper container pt-9">
        <h2 className="my-0">Comments {''}</h2>

        <hr className="my-0" />
        <div ref={this.commentBox} className="comment-box"></div>
      </div>
    );
  }
}