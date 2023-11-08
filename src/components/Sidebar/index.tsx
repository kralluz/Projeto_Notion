import { OpenAndClose } from "../OpenAndClose/styles";
import { SideBarItem } from "../sidebarItem";
import { SideBarComponent, SideBarContainer } from "./styles";
import { IoMdAddCircle } from "react-icons/io";
import { IoSearchSharp } from 'react-icons/io5';
import { PiGearSixBold } from 'react-icons/pi';
import { BiTimeFive } from 'react-icons/bi';
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
                        content="Pesquisar"
                        icon={<IoSearchSharp />}
                    />
                    <SideBarItem
                        content="Atualizações"
                        icon={<BiTimeFive />}
                    />
                    
                    <SideBarItem
                        content="Configurações e membros"
                        icon={<PiGearSixBold />}
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
