import "../../styles/global.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import { BiBold } from "react-icons/bi";
import { TbItalic } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import { InitialContent } from "./initialContent";
import { BubbleMenuButton, BubbleMenuDiv } from "../BubbleMenuButtons/style";
import Underline from '@tiptap/extension-underline'

export const Article = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline
        ],
        content: InitialContent,
        editorProps: {
            attributes: {
                class: "prose",
            },
        },
    });

    const [isEditable, setIsEditable] = React.useState(true);

    useEffect(() => {
        if (editor) {
            editor.setEditable(isEditable);
        }
    }, [isEditable, editor]);


    
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
                {editor && (
                    <BubbleMenu
                        editor={editor}
                        tippyOptions={{ duration: 100 }}
                    >
                        <BubbleMenuDiv>
                        <BubbleMenuButton onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={
                                editor.isActive("bold") ? "is-active" : ""
                            }>
                            <BiText />
                            <MdKeyboardArrowDown />
                        </BubbleMenuButton>
                        <BubbleMenuButton>
                            <HiMiniArrowUpRight />
                            <span>Link</span>
                        </BubbleMenuButton>
                        <BubbleMenuButton>
                            <BiCommentDetail />
                        </BubbleMenuButton>
                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={
                                editor.isActive("bold") ? "is-active" : ""
                            }
                        >
                            <BiBold />
                        </BubbleMenuButton>
                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={
                                editor.isActive("italic") ? "is-active" : ""
                            }
                        >
                            <TbItalic />
                        </BubbleMenuButton>
                        <BubbleMenuButton
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            className={editor.isActive('underline') ? 'is-active' : ''}
                        >
                            <MdOutlineFormatUnderlined />
                        </BubbleMenuButton>
                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                            className={
                                editor.isActive("strike") ? "is-active" : ""
                            }
                        >
                            <BsCodeSlash />
                        </BubbleMenuButton>
                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                            className={
                                editor.isActive("strike") ? "is-active" : ""
                            }
                        >
                            <AiOutlineBgColors />
                        </BubbleMenuButton>
                        </BubbleMenuDiv>
                    </BubbleMenu>
                )}
                <EditorContent editor={editor} />
            
        </>
    );
};
