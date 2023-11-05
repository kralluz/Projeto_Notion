import {
    EditorProvider,
    FloatingMenu,
    BubbleMenu,
    useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./initialContent";
import { BubbleMenuButtons } from "../BubbleMenuButtons";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

export function Editor() {
    const extensions = [StarterKit];
    const content = InitialContent;

    // Obtém a instância do editor
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: InitialContent,
    });

    const applyBold = () => {
        editor.chain().focus().toggleBold().run();
    };

    return (
        <>
            <EditorProvider extensions={extensions} content={content}>
                <FloatingMenu>This is the floating menu</FloatingMenu>
                <BubbleMenu>
                    <BubbleMenuButtons />
                    <button onClick={applyBold}>
                        faça o onclick neste botão{" "}
                    </button>
                </BubbleMenu>
            </EditorProvider>
        </>
    );
}
