import { OpenAndClose } from "../openAndClose/styles";
import { SideBarItem } from "../../assets/sidebarItem";
import { SideBarComponent, SideBarContainer } from "./styles";
import { IoMdAddCircle } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'

export const SideBar = ({isOpenSideBarValue, switchOpenOrClose}:any) => {
    return(
       <>
            <SideBarComponent isOpenSideBarValue={isOpenSideBarValue}>
                <SideBarContainer isOpenSideBarValue={isOpenSideBarValue}>
                    <OpenAndClose onClick={switchOpenOrClose}>
                        <img src="src\assets\notion.ico" alt="notion icon" />
                        {isOpenSideBarValue ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight /> }
                    </OpenAndClose>
                    <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
                    <SideBarItem content="Nova página" icon={<IoMdAddCircle />}/>
                </SideBarContainer>
            </SideBarComponent>
       </>
    )
};