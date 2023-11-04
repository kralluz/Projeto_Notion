import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeHighlighter({ code }) {
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            {code}
        </SyntaxHighlighter>
    );
}

export default CodeHighlighter;
