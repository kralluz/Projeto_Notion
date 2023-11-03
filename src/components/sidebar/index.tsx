import { OpenAndClose } from "./openAndClose/styles";
import { SideBarItem } from "./sidebarItem";
import { SideBarContainer } from "./styles";
import { IoMdAddCircle } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useState } from 'react'
export const SideBar = () => {

    const [isOpen, setIsOpen ] = useState(true)
    return(
       <>
            <SideBarContainer>
                <OpenAndClose>
                    <img src="src\assets\notion.ico" alt="notion icon" />
                    {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight /> }
                </OpenAndClose>
                <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
                <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
            </SideBarContainer>
       </>
    )
};