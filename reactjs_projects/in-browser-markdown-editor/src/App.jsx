import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("src/markdown/test.md")
      .then((response) => {
        return response.text(); // return the promise here
      })
      .then((text) => {
        setContent(text);
      });
  }, [content]); // the dependency array should be outside the fetch call

  return (
    <div className="container m-0 p-0">
      <nav className="flex flex-row justify-start items-center gap-10">
        <p>MARKDOWN</p>
        <div className="flex flex-row justify-between items-center w-full">
          <p>Document</p>
          <p>Save changes</p>
        </div>
      </nav>
      <div className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-col justify-start items-start w-full">
          <p>EDITOR</p>
          <textarea
            className="w-full"
            value="content"
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p>PREVIEW</p>
          {/* <textarea className="w-full h-full" value={content} disabled /> */}
          <ReactMarkdown className="w-full">{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
