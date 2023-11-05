import { OpenAndClose } from "../openAndClose/styles";
import { SideBarItem } from "../sidebarItem";
import { SideBarComponent, SideBarContainer } from "./styles";
import { IoMdAddCircle } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion'

export const SideBar = ({isOpenSideBarValue, switchOpenOrClose}:any) => {
    return(
       <>
            <SideBarComponent as={motion.div} initial={{opacity: 0}} animate={{opacity:1}} isOpenSideBarValue={isOpenSideBarValue}>
                <SideBarContainer isOpenSideBarValue={isOpenSideBarValue}>
                    <OpenAndClose>
                        <img src="src\assets\notion.ico" alt="notion icon" />
                        <div  onClick={switchOpenOrClose}>{isOpenSideBarValue ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight /> }</div>
                    </OpenAndClose>
                    <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
                    <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
                </SideBarContainer>
            </SideBarComponent>
       </>
    )
};