import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useHistory } from "react-router-dom";

import './styles.css'

interface ChoicePageProps {
    sabores: any;
    tamanhos: any;
    handleSabor: Function;
    handleTamanho: Function;
}

const ChoicePage: React.FC<ChoicePageProps> = ({sabores, tamanhos, handleSabor, handleTamanho}) => {
    const [click, setClick] = useState(9);
    const [click2, setClick2] = useState(9);
    // const [selectedSabor, setSelectedSabor] = useState();
    // const [selectedTamanho, setSelectedTamanho] = useState();
    const valor = "destaque";
    const valor2 = "";
    const history = useHistory();
    // console.log(valor?.replace(/"([^"]+(?="))"/g, "$1"))
    const openUrl = useCallback(
        (path: string) => {
          history.push(path);
        },
        [history],
    );
    const selectSabor = (sabor:any) => {
        // setSelectedSabor(sabor);
        handleSabor(sabor)
    }
    const selectTamanho = (tamanho:any) => {
        // setSelectedTamanho(tamanho);
        handleTamanho(tamanho);
    }

    return (
        <>
            <div style={{backgroundColor: '#fff', width: '30vw', height: '38vh', margin: '25vh auto',borderRadius: '8px', padding: '32px 64px'}}>
                <h1 style={{color: '#46295A'}} >Escolha seu açaí</h1>
                <h2 style={{color: '#46295A', marginBottom: '0px'}} >Sabor:</h2>
                <div style={{display: 'flex'}}>
                    {
                        sabores && sabores.map((sabor:any, index:any) => <Card
                            title={sabor.nome}
                            onclick={() => {
                                setClick(index)
                                selectSabor(sabor)
                            }}
                            className={click === index ? valor : valor2}
                        />
                        
                        )
                    }
                </div>
                <h2 style={{color: '#46295A', marginBottom: '0px'}} >Tamanho:</h2>
                <div style={{display: 'flex'}}>
                    {
                        tamanhos && tamanhos.map((tamanho:any, index:any) => <Card
                            title={tamanho.nome}
                            onclick={() => {
                                setClick2(index)
                                selectTamanho(tamanho)
                            }}
                            className={click2 === index ? valor : valor2}
                        />
                        
                        )
                    }
                </div>
                <div onClick={() => click !== 9 && click2 !== 9 ? openUrl(`/sistema-acai/personalização`): console.log("Precisa selecionar uma opção de sabor/tamanho")}>
                    <Button text="Avançar" />
                </div>
            </div>
        </>
    )

}

export default ChoicePage;