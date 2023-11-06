import "../../styles/global.scss";

import { BubbleMenuButton, BubbleMenuDiv } from "../BubbleMenuButtons/style";

import { GrBlockQuote } from "react-icons/gr";
import { GrStrikeThrough } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiBold } from "react-icons/bi";
import { TbItalic } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

import React, { useState } from "react";
import { InitialContent } from "./initialContent";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import { LinkInputComponent } from "../LinkInputComponent";

export const Article = () => {
    const [isEditable, setIsEditable] = React.useState(true);
    const [isLinkInputVisible, setIsLinkInputVisible] = useState(false);
    const [linkInputValue, setLinkInputValue] = React.useState("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Code,
            Link.configure({
                protocols: ["ftp"],
            }),
        ],
        content: InitialContent,
        editorProps: {
            attributes: {
                class: "prose",
            },
        },
    });

    if (!editor) {
        return null;
    }

    if (editor) {
        editor.setEditable(isEditable);
    }

    const toggleLinkInput = () => {
        setIsLinkInputVisible(!isLinkInputVisible);
    };

    const setLink = () => {
        if (isLinkInputVisible) {
            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: linkInputValue })
                .run();
            setLinkInputValue("");
            toggleLinkInput();
        } else {
            toggleLinkInput();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setLink();
            setIsLinkInputVisible(false);
            setLinkInputValue("");
        }
    };

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
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <BubbleMenuDiv>

                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={
                                editor.isActive("bold") ? "is-active" : ""
                            }
                        >
                            <BiText />
                            <MdKeyboardArrowDown />
                        </BubbleMenuButton>

                        <BubbleMenuButton onClick={setLink}>
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
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }
                            className={
                                editor.isActive("underline") ? "is-active" : ""
                            }
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
                            <GrStrikeThrough />
                        </BubbleMenuButton>

                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleCode().run()
                            }
                            className={
                                editor.isActive("code") ? "is-active" : ""
                            }
                        >
                            <BsCodeSlash />
                        </BubbleMenuButton>

                        <BubbleMenuButton
                            onClick={() =>
                                editor.chain().focus().toggleBlockquote().run()
                            }
                            className={
                                editor.isActive("quote") ? "is-active" : ""
                            }
                        >
                            <GrBlockQuote />
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

                    <LinkInputComponent
                        isLinkInputVisible={isLinkInputVisible}
                        linkInputValue={linkInputValue}
                        setLinkInputValue={setLinkInputValue}
                        handleKeyPress={handleKeyPress}
                    />

                </BubbleMenu>
            )}
            <EditorContent editor={editor} />
        </>
    );
};
