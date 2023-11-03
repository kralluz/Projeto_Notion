import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";


const CodeBlock = ({ language, code }) => {
    return (
        <div className="prose prose-code">
            <SyntaxHighlighter language={language} style={darcula}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
