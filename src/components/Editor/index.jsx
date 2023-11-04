import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./initialContent";


export function Editor() {

    const extensions = [StarterKit];

    const content = InitialContent;

    return (
        <>
            <EditorProvider extensions={extensions} content={content}>
                <FloatingMenu>This is the floating menu</FloatingMenu>
                <BubbleMenu>
                    <button>Texto</button>
                    <button>Link</button>
                    <button>Comentário</button>
                    <button>Bold</button>
                    <button>italic</button>
                    <button>Sublinhado</button>
                    <button>Marcar como Código</button>
                    <button>Cor do texto</button>
                </BubbleMenu>
            </EditorProvider>
        </>
    );
}
