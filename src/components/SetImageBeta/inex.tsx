import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import { useCallback } from "react";

export function SetImageComponentBeta() {
    const editor: Editor | null = useEditor({
        extensions: [Document, Paragraph, Text, Image, Dropcursor],
        content: `
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        `,
    });

    const addImage = useCallback(() => {
        const url = window.prompt("URL");

        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <div>
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
            <button onClick={addImage}>setImage</button>
            <EditorContent editor={editor} />
        </div>
    );
};
