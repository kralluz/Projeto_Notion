import "./styles.scss";

import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";


export function TesteEditor  () {
    const editor = useEditor({
        extensions: [StarterKit],
        content: `
        <p>
            Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
        </p>
    `,
    });

    const [isEditable, setIsEditable] = React.useState(true);

    useEffect(() => {
        if (editor) {
            editor.setEditable(isEditable);
        }
    }, [isEditable, editor]);

    return (

};


export const boboca = TesteEditor();
