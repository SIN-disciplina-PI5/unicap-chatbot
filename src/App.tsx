import { ContainerApp, ContainerApp2 } from "./Style";

import NavbarX from "./Components/Navbar/NavX/NavbarX";
import NavbarY from "./Components/Navbar/NavY/NavbarY";
import  Header  from "./Components/Header/Header";

function App() {
  return (
    <ContainerApp>
      <NavbarX />
      <ContainerApp2>
         <NavbarY />
         <Header/>
      </ContainerApp2>
     
    </ContainerApp>
  );
}

export default App;
