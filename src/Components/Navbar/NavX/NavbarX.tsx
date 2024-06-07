import { ContainerX, Nav1, Nav2, ContainerNav2, Nav2Rigth, StDiv2, Contrast } from "./Style";

import { CgProfile } from "react-icons/cg";
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from "react-icons/hi2";
import { LuClipboardCheck } from "react-icons/lu";
import { ImClipboard } from "react-icons/im";
import { BiMoneyWithdraw } from "react-icons/bi";

import Logo from "./assets/LogoBranca.png"



const NavbarX = () => {
  return (
    <ContainerX>
      <div>
        <Nav1>
          <li>SISTEMAS PARA INTERNET</li>
          <li>Alterar Curso</li>
          <li>RICHARD HENRIQUE NUNES DOS SANTOS (RA: 00000000000)</li>
          <li>
            <CgProfile size="1.5rem" />
          </li>
        </Nav1>
      </div>
      <ContainerNav2>
          <Nav2 src={Logo} alt="Logo" width="130px"/>
        <Nav2Rigth>
          <StDiv2>
            <span><LuClipboardCheck /></span>
            <span>Notas</span>
          </StDiv2>
          <StDiv2>
            <span><ImClipboard /></span>
            <span>Faltas</span>
          </StDiv2>
          <StDiv2>
            <span><BiMoneyWithdraw /></span>
            <span>Financeiro</span>
          </StDiv2>
          <li>
            <HiMagnifyingGlassPlus  />
          </li>
          <li>
            <HiMagnifyingGlassMinus  />
          </li>
          <Contrast>A</Contrast>
        </Nav2Rigth>
      </ContainerNav2>
    </ContainerX>
  );
};

export default NavbarX;
