import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./initialContent";

export function Editor() {
    const extensions = [StarterKit];

    const content = InitialContent;

    const attributes = { outline: 'none' };

    return (
        <>
                <EditorProvider  extensions={extensions} content={content}>
                    
                    <FloatingMenu>This is the floating menu</FloatingMenu>
                    <BubbleMenu>This is the bubble menu</BubbleMenu>
                </EditorProvider>
        </>
    );
}
