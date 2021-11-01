import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

interface CustomizePageProps {
  adicionais: any;
  handleAdicional: Function;
}

const CustomizePage: React.FC<CustomizePageProps> = ({
  adicionais,
  handleAdicional,
}) => {
  const [click, setClick] = useState(9);
  const valor = "destaque";
  const valor2 = "";
  const history = useHistory();
  const openUrl = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history]
  );
  const selectAdicional = (adicional: any) => {
    handleAdicional(adicional);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          width: "30vw",
          height: "36vh",
          margin: "25vh auto",
          borderRadius: "8px",
          padding: "32px 64px",
        }}
      >
        <h1 style={{ fontSize: "30px", color: "#46295A", textAlign: "center" }}>
          Personalize seu açaí
        </h1>
        <h2 style={{ color: "#46295A", marginBottom: "0px" }}>
          Personalização:
        </h2>
        <div style={{ display: "flex" }}>
          {adicionais &&
            adicionais.map((adicional: any, index: any) => (
              <Card
                title={adicional.nome}
                onclick={() => {
                  setClick(index);
                  selectAdicional(adicional);
                }}
                className={click === index ? valor : valor2}
              />
            ))}
        </div>
        <div
          onClick={() =>
            click !== 9
              ? openUrl(`/sistema-acai/resumo`)
              : console.log("Precisa selecionar uma opção de sabor/tamanho")
          }
        >
          <Button text="Finalizar pedido" />
        </div>
      </div>
    </>
  );
};

export default CustomizePage;
