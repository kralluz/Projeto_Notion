import { ArticleStyle } from "./style";
import "../../styles/global.scss";
import { Editor } from "../Editor/" ;


export const Article = () => {
    return (
        <>
            <ArticleStyle>
                <div className="prose">
                <Editor/>
                </div>
            </ArticleStyle>
        </>
    );
};
