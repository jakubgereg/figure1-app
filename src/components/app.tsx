import React from "react";
import { AppComponentState } from "../types";

import { Switch, Route } from "react-router-dom";

import BlogPostDetailContainer from "../containers/blog-post/detail";
import BlogPostPreviewContainer from "../containers/blog-post/preview";

import "./app.scss";

class App extends React.Component<any, AppComponentState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="app-wrapper">
          <header className="main-header">
            <h1>Figure1 App</h1>
          </header>
          <main className="main-content-wrapper">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <BlogPostPreviewContainer {...props} data={data} />
                )}
              />
              <Route
                path="/post/:id"
                render={props => (
                  <BlogPostDetailContainer {...props} data={data} />
                )}
              />
            </Switch>
          </main>
          <footer>
            <div className="content">
              <p>
                <a href="https://github.com/wramp/figure1-app" target="_blank">
                  GitHub
                </a>
                {" · "}
                <a href="#">Lorem</a>
                {" · "}
                <a href="#">Ipsum</a>
                {" · "}
                <a href="#">Dolor</a>
              </p>
              <p>
                <span className="light-color">Figure1 App - </span>Jakub Gereg
              </p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }

  fetchData() {
    fetch("https://staging-app.figure1.com/mock/feed")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }
}

export default App;
