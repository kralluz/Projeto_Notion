import React from 'react';
interface FloatingMenuButtonProps {
    editor: any;
    level: number;
    src: string;
    alt: string;
    text: string;
}

export const FloatingMenuButton: React.FC<FloatingMenuButtonProps> = (props) => {
    const { editor, level, src, alt, text } = props;
    const handleClick = () => {
        editor.chain().focus().toggleHeading({ level }).run();
    };

    const isActive = editor.isActive("heading", { level });

    return (
        <button
            onClick={handleClick}
            className={isActive ? "is-active" : ""}
        >
            <img
                src={src}
                alt={alt}
                title={text}
            />
            <p>{text}</p>
        </button>
    );
};