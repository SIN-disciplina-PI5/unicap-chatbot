import portal from "./assets/portal.png";
import Edu from "./assets/Edu.png";

import { ContainerHeader, ContainerImg, ContainerText } from "./styleH";

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerImg>
        <img src={portal} alt="" width="100%" />
      </ContainerImg>
      <hr />
      <h2>SEJA BEM-VINDO AO PORTAL DO ALUNO</h2>
      <ContainerText>
        
        <p>Prezado(a) estudante</p>
        <p>Alunos do EAD clique no link para acesso às aulas:</p>
        <a href="http://ava.unicap.br//">http://ava.unicap.br//</a>
        <p>O início das aulas de 2024.1 dos cursos de graduação (presencial e EAD) será em 15-FEV-2024. Para consultar o calendário administrativo-escolar 2024 completo acesse o link: </p>
        <a href="https://portal.unicap.br/documentos-oficiais">https://portal.unicap.br/documentos-oficiais</a>
        <p>Para acesso à consulta dos horários das disciplinas do semestre 2024.1, clique no link abaixo:</p>
        <a href="https://www1.unicap.br/TurmasDisciplinas/html/index.html">https://www1.unicap.br/TurmasDisciplinas/html/index.html</a>
        <img src={Edu} alt="" width="500px" />
      </ContainerText>
    </ContainerHeader>
  );
};

export default Header;
