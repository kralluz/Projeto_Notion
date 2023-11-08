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

import {
    BubbleMenu,
    EditorContent,
    FloatingMenu,
    useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import { LinkInputComponent } from "../LinkInputComponent";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

export const Article = () => {
    const [isEditable, setIsEditable] = React.useState(true);

    const [isLinkInputVisible, setIsLinkInputVisible] = useState(false);
    const [linkInputValue, setLinkInputValue] = React.useState("");

    const [isTextOptionsVisible, setIsTextOptionsVisible] = useState(false);

    const getInitialContentFromLocalStorage = () => {
        const initialContent = localStorage.getItem("editorContent");
        return initialContent || "";
    };
    
    const [editorContent, setEditorContent] = useState(
        JSON.parse(localStorage.getItem("editorContent"))
    );

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Code,
            Text,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Placeholder.configure({
                emptyEditorClass: "is-editor-empty",
                placeholder: ({ node }) => {
                    if (node.type.name === "text") {
                        return "What’s the title?";
                    }
                    return `Pressione "/" para ver os comandos`;
                },
            }),
            Link.configure({
                protocols: ["ftp"],
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: editorContent,
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

    let newContent = editor.view.dom.innerHTML;
    console.dir(editor)
    localStorage.setItem("editorContent", JSON.stringify(newContent) );

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

    const insertLinkKeyPress = (event) => {
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
                <FloatingMenu
                    editor={editor}
                    shouldShow={({ state }) => {
                        const { $from } = state.selection;
                        const currentLineText = $from.nodeBefore?.textContent;
                        return currentLineText === "/";
                    }}
                >
                    <div className="FloatingMenuMainContainer">
                        <div className="FloatingMenuContainer">
                            <button
                                onClick={() =>
                                    editor.chain().focus().setHardBreak().run()
                                }
                            >
                                <img
                                    src="https://www.notion.so/images/blocks/text/en-US.png"
                                    alt="texto sem formatação"
                                    title="Texto sem formatação"
                                />
                                <h4>Texto</h4>
                                <p>Comece a escrever um texto sem formatação</p>
                            </button>

                            <button
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleTaskList()
                                        .run()
                                }
                                className={
                                    editor.isActive("taskList")
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <img
                                    src="https://www.notion.so/images/blocks/to-do.f8d20542.png"
                                    alt="task List"
                                    title="Inserir lista de tarefas"
                                />
                                <p>Adicionar lista de tarefas</p>
                            </button>

                            <button
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleHeading({ level: 1 })
                                        .run()
                                }
                                className={
                                    editor.isActive("heading", { level: 1 })
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <img
                                    src="https://www.notion.so/images/blocks/header.57a7576a.png"
                                    alt="texto sem formatação"
                                    title="Texto sem formatação"
                                />
                                <p>Titulo de seção grande</p>
                            </button>

                            <button
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleHeading({ level: 2 })
                                        .run()
                                }
                                className={
                                    editor.isActive("heading", { level: 2 })
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <img
                                    src="https://www.notion.so/images/blocks/subheader.9aab4769.png"
                                    alt="texto sem formatação"
                                    title="Texto sem formatação"
                                />
                                <p>Titulo de seção médio</p>
                            </button>
                            <button
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleHeading({ level: 3 })
                                        .run()
                                }
                                className={
                                    editor.isActive("heading", { level: 3 })
                                        ? "is-active"
                                        : ""
                                }
                            >
                                <img
                                    src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
                                    alt="texto sem formatação"
                                    title="Texto sem formatação"
                                />
                                <p>Titulo de seção pequeno</p>
                            </button>
                            <button
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .insertTable({
                                            rows: 3,
                                            cols: 3,
                                            withHeaderRow: true,
                                        })
                                        .run()
                                }
                            >
                                <div className="branco">
                                    <img
                                        src="https://i.imgur.com/zz2taOF.png"
                                        alt="texto sem formatação"
                                        title="Texto sem formatação"
                                    />
                                </div>
                                <p>Titulo de seção pequeno</p>
                            </button>
                        </div>
                    </div>
                </FloatingMenu>
            )}

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
                        handleKeyPress={insertLinkKeyPress}
                    />
                </BubbleMenu>
            )}
            <EditorContent 
                editor={editor}

            >
            </EditorContent>
        </>
    );
};
