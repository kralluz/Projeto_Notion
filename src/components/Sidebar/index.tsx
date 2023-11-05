import { OpenAndClose } from "../openAndClose/styles";
import { SideBarItem } from "../sidebarItem";
import { SideBarComponent, SideBarContainer } from "./styles";
import { IoMdAddCircle } from "react-icons/io";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";

export const SideBar = ({ isopensidebarvalue, switchOpenOrClose }: any) => {
    return (
        <>
            <SideBarComponent
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                isopensidebarvalue={isopensidebarvalue}
            >
                <SideBarContainer isopensidebarvalue={isopensidebarvalue}>
                    <OpenAndClose>
                        <img src="src\assets\notion.ico" alt="notion icon" />
                        <div onClick={switchOpenOrClose}>
                            {isopensidebarvalue ? (
                                <MdKeyboardDoubleArrowLeft />
                            ) : (
                                <MdKeyboardDoubleArrowRight />
                            )}
                        </div>
                    </OpenAndClose>
                    <SideBarItem
                        content="Nova página"
                        icon={<IoMdAddCircle />}
                    />
                    <SideBarItem
                        content="Nova página"
                        icon={<IoMdAddCircle />}
                    />
                </SideBarContainer>
            </SideBarComponent>
        </>
    );
};
