import axios from "axios";
import { Item, type userType } from "../components/Lista";
import { useState } from "react";

import { Container, GenerateItemButton, Title } from "./styles";

export function Home() {
  const app = axios;
  const [user, setUser] = useState<userType[]>([]);
  const [isLoading] = useState(false);

  const handleUser = async () => {
    try {
      const response = await app.get("https://randomuser.me/api/");
      const data = await response.data.results;
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Container>
 
      <GenerateItemButton onClick={handleUser} disabled={isLoading}>
        {isLoading ? "Buscando..." : "Gerar Novo Usuário"}
      </GenerateItemButton>{" "}
      {user.map((item) => (
        <Item key={item.cell} {...item} />
      ))}{" "}
     
    </Container>
  );
}
