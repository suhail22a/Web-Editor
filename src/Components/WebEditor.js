import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Editor from "./WebEditor/Editor";
import Footer from "./Footer";
import { useLocalStorage } from "../Hooks/LocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function LaunguageManager() {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const htmlDefault = `<h2>Hello User</h2>`;
  const cssDefault = `body{ text-align:center; }`;

  const [htmlVal, updateHtmlStorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStorage] = useLocalStorage("js", "");

  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
      <body>
        ${html}
        ${js && `<script src="${jsURL}"></script>`}
      </body>
      </html>`;

  useEffect(() => {
    updateHtmlStorage(html);
    updateCssStorage(css);
    updateJsStorage(js);
  }, [html, css, js]);

  return (
    <div>
      <Container fluid={true} className="pane pane-top">
        <Row noGutters={true} className="flex-column">
          <Col className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-html5"></i> HTML
            </div>
            <Editor
              language="xml"
              value={html}
              onChange={(newVal) => {
                updateHtml(newVal);
              }}
            />
          </Col>

          <Col className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-css3-alt"></i> CSS
            </div>
            <Editor
              language="css"
              value={css}
              onChange={(newVal) => {
                updateCss(newVal);
              }}
            />
          </Col>

          <Col className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-js-square"></i> JS
            </div>
            <Editor
              language="javascript"
              value={js}
              onChange={(newVal) => {
                updateJs(newVal);
              }}
            />
          </Col>
        </Row>
      </Container>

      <div
        style={{
          height: "40vh",
          width: "100%",
          overflow: "hidden",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <iframe
          title="output"
          srcDoc={srcDoc}
          style={{
            height: "100%",
            width: "100%",
            border: "none",
            borderRadius: "10px",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default LaunguageManager;
