import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { InitialContent } from "./initialContent";
import { BubbleMenuButtons } from "../BubbleMenuButtons";

export function Editor() {
    const extensions = [StarterKit];
    const content = InitialContent;

    return (
        <>
            <EditorProvider extensions={extensions} content={content}>
                <FloatingMenu>This is the floating menu</FloatingMenu>
                <BubbleMenu>
                    <BubbleMenuButtons />
                </BubbleMenu>
            </EditorProvider>
        </>
    );
}
