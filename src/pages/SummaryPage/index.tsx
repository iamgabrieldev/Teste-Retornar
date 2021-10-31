import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

interface SummaryPageProps {
    sabor: any;
    tamanho: any;
    adicional: any;
}

const SummaryPage: React.FC<SummaryPageProps> = ({sabor, tamanho, adicional}) => {
    const history = useHistory();
    const openUrl = useCallback(
        (path: string) => {
          history.push(path);
        },
        [history],
      );

    return (
        <>
            <div style={{backgroundColor: '#fff', width: '30vw', height: '60vh', margin: '25vh auto',borderRadius: '8px', padding: '32px 64px'}}>
                <h1 style={{fontSize: '30px',color: '#46295A', textAlign: 'center'}} >Resumo do Pedido</h1>
                <h2 style={{fontSize: '22px', color: '#46295A', marginBottom: '0px'}} >Tamanho:</h2>
                <div>
                    <p>-{tamanho.nome}</p>
                    <p>R${tamanho.preco}</p>
                </div>
                <h2 style={{fontSize: '22px', color: '#46295A', marginBottom: '0px'}} >Sabor:</h2>
                <div>
                    <p>-{sabor.nome}</p>
                    <p>R${parseFloat(sabor.preco).toFixed(2)}</p>
                </div>
                <h2 style={{fontSize: '22px', color: '#46295A', marginBottom: '0px'}} >Personalizações:</h2>
                <div>
                    <p>-{adicional.nome}</p>
                    <p>R${parseFloat(adicional.preco).toFixed(2)}</p>
                </div>
                <h3 style={{color: '#46295A', fontSize: '16px'}}><strong>Valor total:</strong>{(tamanho.preco + sabor.preco + adicional.preco).toFixed(2)}</h3>
                <h3 style={{color: '#46295A', fontSize: '16px'}}><strong>Tempo de Preparo:</strong>{(tamanho.tempo + sabor.tempo + adicional.tempo)}</h3>
                <div onClick={() => openUrl(`/sistema-acai/escolha`)}>
                    <Button text="Refazer pedido" />
                </div>
            </div>
        </>
    )
}

export default SummaryPage;