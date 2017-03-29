const renderApp = () => (
  `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Voice Activated Lamp with Johnny-Five</title>
      <style>

        * {
          margin: 0;
          padding: 0;
          border: 0;
        }

        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          display: flex;
          height: 100vh;
          align-items: center;
          justify-content: center;
          background: #55ffee;
          color: #00bbaa;
          font-family: 'Fira Sans', sans-serif;
        }

        .container {
          // display: flex;
          text-align: center;
          width: 100%;
        }

        button {
          margin: 40px 0;
          padding: 10px 30px;
          font-family: inherit;
          font-size: 1em;
          background: #77eecc;
          color: #00bbaa;
          border: 1px solid currentcolor;
          border-radius: 4px;
          font-weight: 600;
        }

      </style>
    </head>
    <body class="">

      <div class="container">
        <h1>Voice Activated Lamp with Johnny-Five</h1>
        <button id="audio-activation-button">Activate the Lamp</button>
      </div>

      <script src="/static/bundle.js"></script>
    </body>
  </html>
`
);

export default renderApp;
