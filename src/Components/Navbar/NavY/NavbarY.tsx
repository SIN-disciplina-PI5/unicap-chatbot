import { ContainerY } from "./StyleY";

import { FiAlignJustify } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineCalendarMonth, MdOutlineMarkChatRead } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { BsFillMortarboardFill, BsChatText  } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";





const NavbarY = () => {
  return (
    <ContainerY>
        <li><FiAlignJustify color="white" size="1.5rem" /></li>
        <li><RiComputerLine color="white" size="1.5rem" /></li>
        <li>< MdOutlineCalendarMonth color="white" size="1.5rem"/></li>
        <li>< AiOutlineAppstore color="white" size="1.5rem"/></li>
        <li>< IoTimeOutline color="white" size="1.5rem"/></li>
        <li>< FaUserPlus color="white" size="1.5rem"/></li>
        <li>< BsFillMortarboardFill color="white" size="1.5rem"/></li>
        <li>< LuFileSpreadsheet color="white" size="1.5rem"/></li>
        <li>< BiMoneyWithdraw color="white" size="1.5rem"/></li>
        <li>< MdOutlineMarkChatRead color="white" size="1.5rem"/></li>
        <li>< TbReportSearch color="white" size="1.5rem"/></li>
        <li>< BsChatText color="white" size="1.5rem"/></li>
    </ContainerY>
  )
}

export default NavbarY