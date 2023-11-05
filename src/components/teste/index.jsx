
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "../Editor/initialContent";
import React, { useEffect } from "react";

export default () => {
    const Editor = useEditor({
        extensions: [StarterKit],
        content: InitialContent
    });

    const [isEditable, setIsEditable] = React.useState(true);

    useEffect(() => {
        if (Editor) {
            Editor.setEditable(isEditable);
        }
    }, [isEditable, Editor]);

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={isEditable}
                    onChange={() => setIsEditable(!isEditable)}
                />
                Editable
            </div>
            {Editor && (
                <BubbleMenu Editor={Editor} tippyOptions={{ duration: 100 }}>
                    <button
                        onClick={() =>
                            Editor.chain().focus().toggleBold().run()
                        }
                        className={Editor.isActive("bold") ? "is-active" : ""}
                    >
                        bold
                    </button>
                    <button
                        onClick={() =>
                            Editor.chain().focus().toggleItalic().run()
                        }
                        className={Editor.isActive("italic") ? "is-active" : ""}
                    >
                        italic
                    </button>
                    <button
                        onClick={() =>
                            Editor.chain().focus().toggleStrike().run()
                        }
                        className={Editor.isActive("strike") ? "is-active" : ""}
                    >
                        strike
                    </button>
                </BubbleMenu>
            )}
            <EditorContent editor={Editor} />
        </>
    );
};
