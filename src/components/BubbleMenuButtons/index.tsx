import { MdKeyboardArrowDown } from "react-icons/md";
import { BiBold } from "react-icons/bi";
import { TbItalic } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

import { BubbleMenuButton, BubbleMenuDiv } from "./style";

export const BubbleMenuButtons  = () => {
    return (
        <>
            <BubbleMenuDiv>
                <BubbleMenuButton>
                    <BiText />
                    <MdKeyboardArrowDown/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <HiMiniArrowUpRight/>
                    <span>Link</span>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <BiCommentDetail/>
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <BiBold />
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <TbItalic />
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <MdOutlineFormatUnderlined />
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <BsCodeSlash />
                </BubbleMenuButton>
                <BubbleMenuButton>
                    <AiOutlineBgColors />
                </BubbleMenuButton>
            </BubbleMenuDiv>
        </>
    );
};
