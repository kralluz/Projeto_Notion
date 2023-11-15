import React from "react";
import { BubbleMenuDiv } from "./style";
interface BubbleMenuButtonProps {
    title: string;
    onClick: () => void;
    children: React.ReactNode;
    isActive: boolean;
}

export const BubbleMenuButton: React.FC<BubbleMenuButtonProps> = (props) => {
    const { title, onClick, children, isActive } = props;
    return (
        <>
            <BubbleMenuDiv>
                <button
                    title={title}
                    onClick={onClick}
                    className={isActive ? "is-active" : ""}
                >
                    {children}
                </button>
            </BubbleMenuDiv>
        </>
    );
};
