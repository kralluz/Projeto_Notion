import { BiBold } from "react-icons/bi";
import { TbItalic } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

import { BubbleMenuButton, BubbleMenuDiv } from "./style";

export const BubbleMenuButtons = () => {
    return (
        <>
            <BubbleMenuDiv>
                <BubbleMenuButton>
                    <BiText size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <HiMiniArrowUpRight size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <BiCommentDetail size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <BiBold size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <TbItalic size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <MdOutlineFormatUnderlined size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <BsCodeSlash size="25"/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <AiOutlineBgColors size="25"/>
                </BubbleMenuButton>
            </BubbleMenuDiv>
        </>
    );
};
