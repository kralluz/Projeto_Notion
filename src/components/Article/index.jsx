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
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";

export const Article = () => {
    const [isEditable, setIsEditable] = React.useState(true);

    const [isLinkInputVisible, setIsLinkInputVisible] = useState(false);
    const [linkInputValue, setLinkInputValue] = React.useState("");

    const [isTextOptionsVisible, setIsTextOptionsVisible] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Code,
            Text,
            Placeholder.configure({
                emptyEditorClass: "is-editor-empty",
                placeholder: ({ node }) => {
                    if (node.type.name === "title") {
                        return "What’s the title?";
                    }
                    return `Pressione "/" para ver os comandos` ;
                },
            }),
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

    const textOptions = () => {
        if (isTextOptionsVisible) {
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
                            title="Inserir texto"
                            onClick={textOptions}
                        >
                            <BiText />
                            <MdKeyboardArrowDown />
                        </BubbleMenuButton>

                        <BubbleMenuButton
                            title="Inserir Link"
                            onClick={setLink}
                        >
                            <HiMiniArrowUpRight />
                            <span>Link</span>
                        </BubbleMenuButton>

                        <BubbleMenuButton title="Inserir Comentário">
                            <BiCommentDetail />
                        </BubbleMenuButton>

                        <BubbleMenuButton
                            title="Negrito"
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
                            title="Itálico"
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
                            title="Sublinhado"
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
                            title="Tachado"
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
                            title="Código"
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
                            title="Citação"
                            onClick={() =>
                                editor.chain().focus().toggleBlockquote().run()
                            }
                            className={
                                editor.isActive("quote") ? "is-active" : ""
                            }
                        >
                            <GrBlockQuote />
                        </BubbleMenuButton>

                        <BubbleMenuButton title="Cores de Fundo">
                            <AiOutlineBgColors />
                        </BubbleMenuButton>
                    </BubbleMenuDiv>
                    <LinkInputComponent
                        isLinkInputVisible={isLinkInputVisible}
                        linkInputValue={linkInputValue}
                        setLinkInputValue={setLinkInputValue}
                        handleKeyPress={handleKeyPress}
                    />
                    {isTextOptionsVisible && (
                        <div className="ContainerSetLink">
                            <div className="ContainerSetLinkMenu">
                                <input
                                    className="InputSetLink"
                                    type="text"
                                    placeholder="Colar link"
                                    value={linkInputValue}
                                    onChange={(e) =>
                                        setLinkInputValue(e.target.value)
                                    }
                                    onKeyUp={handleKeyPress}
                                />
                                <div className="ContainerSetLinkMoreOptions">
                                    <div className="SetLinkMoreOptions">
                                        <div className="box">
                                            <div className="box1">
                                                <AiOutlineGlobal />
                                            </div>
                                            <div className="box2">
                                                <p>{linkInputValue}</p>
                                                <p className="SetLinkMoreOptions--description">
                                                    Digite uma URL completa para
                                                    vincular
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </BubbleMenu>
            )}
            <EditorContent editor={editor} />
        </>
    );
};
