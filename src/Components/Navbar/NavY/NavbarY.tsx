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
        <li><FiAlignJustify color="white"  /></li>
        <li><RiComputerLine color="white"  /></li>
        <li>< MdOutlineCalendarMonth color="white" /></li>
        <li>< AiOutlineAppstore color="white" /></li>
        <li>< IoTimeOutline color="white" /></li>
        <li>< FaUserPlus color="white" /></li>
        <li>< BsFillMortarboardFill color="white" /></li>
        <li>< LuFileSpreadsheet color="white" /></li>
        <li>< BiMoneyWithdraw color="white" /></li>
        <li>< MdOutlineMarkChatRead color="white" /></li>
        <li>< TbReportSearch color="white" /></li>
        <li>< BsChatText color="white" /></li>
    </ContainerY>
  )
}

export default NavbarY