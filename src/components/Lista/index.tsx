import { Card, Avatar, Name, Info, LoginInfo } from "./styles";
type UserLastType = {
  last: string;
  first: string;
};
type PictureType = {
  medium: string;
};
type DobType = {
  age: number;
  date: string;
  email: string;
  gender: string;
};
type StreetType = {
  name: string;
  number: number;
};
type LocationType = {
  country: string;
  city: string;
  street: StreetType;
};
type LoginType = {
  md5: string;
  username: string;
  password: string;
};

export type UserType = {
  name: UserLastType;
  location: LocationType;
  login: LoginType;
  cell: string;
  dob: DobType;
  picture: PictureType;
  email: string;
  gender: string;
};

export function Item(props: UserType) {
  const { name, location, login, picture, cell, dob, email, gender } = props;
  const dataNascimento = new Date(dob.date).toLocaleDateString("pt-BR");

  const traduzGenero = (gender: any) => {
    if (gender === "female") return "Mulher";
    if (gender === "male") return "Homem";
    return "Não informado";
  };

  const tradutorGender = traduzGenero(gender);

  return (
    <Card>
      <Avatar src={picture.medium} alt={`${name.first} ${name.last}`} />{" "}
      <Name>
        {name.first} {name.last}{" "}
      </Name>{" "}
      <Info>
        <strong>Email:</strong> {email}{" "}
      </Info>{" "}
      <Info>
        <strong>Genero:</strong> {tradutorGender}{" "}
      </Info>{" "}
      <Info>
        <strong>Data de nascimento:</strong> {dataNascimento}{" "}
      </Info>{" "}
      <Info>
        <strong>Telefone:</strong> {cell}{" "}
      </Info>{" "}
      <Info>
        <strong>País:</strong> {location.country}{" "}
      </Info>{" "}
      <Info>
        <strong>Cidade:</strong> {location.city}{" "}
      </Info>{" "}
      <Info>
        <strong>Rua:</strong> {location.street.name}{" "}
      </Info>{" "}
      <Info>
        <strong>Número:</strong> {location.street.number}{" "}
      </Info>{" "}
      <LoginInfo>
        <hr /> <strong>Privacidade</strong>{" "}
      </LoginInfo>{" "}
      <LoginInfo>
        <strong>Login:</strong> {login.md5}{" "}
      </LoginInfo>{" "}
      <LoginInfo>
        <strong>Nome de usuário:</strong> {login.username}{" "}
      </LoginInfo>{" "}
      <LoginInfo>
        <strong>Senha:</strong> {login.password}{" "}
      </LoginInfo>{" "}
    </Card>
  );
}
