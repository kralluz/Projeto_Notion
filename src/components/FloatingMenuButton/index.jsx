
export const FloatingMenuButton = ({ editor, levelNumber, src, title, levelName }) => {
    const level = { level: levelNumber };
    return (
        <>
            <button 
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: level }).run()
                }
                className={
                    editor.isActive("heading", { level: level })
                        ? "is-active"
                        : ""
                }
            >
                <img
                    src={src}
                    title={title}
                />
                <p>{levelName}</p>
            </button>
        </>
    );
};
