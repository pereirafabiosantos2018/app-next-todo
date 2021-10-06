import { arrayMoveImmutable } from 'array-move';
import React, { useState } from 'react'

export default function Drop() {

    let newIndex = 0;
    let indiceItemMovendo = 0;

    const [array, setArray] = useState(
    [
        {
            index: 0,
            name: 'Item 1',
        },
        {
            index: 1,
            name: 'Item 2',
        },
        {
            index: 2,
            name: 'Item 3'
        }
    ]);

    return (

        <div
            id={'container'}
            style={
                {
                    backgroundColor: 'lightgray',
                    display: 'flex',
                    flexDirection: 'column', // Em que direção os itens serão posicionados, em colunas ou linhas
                    flexWrap: 'wrap', // Indica se ao chegar no final do tamanho da tela passa para a próxima "linha"
                    justifyContent: 'flex-start', // Alinhar os itens do flex
                }}>

            {
                array.map(x => {

                    return (

                        <>
                            <div
                                id={x.index}
                                key={x.index}
                                draggable={true}
                                onDragStart={(event) => {
                                    indiceItemMovendo = event.target.id;
                                }}
                                onDragOver={(event) => {
                                    newIndex = parseInt(event.target.id);
                                    console.log('movendo item para o indice ', newIndex);
                                }}
                                onDragEnd={() => {

                                    let i = 0;

                                    let newArray = arrayMoveImmutable(array, indiceItemMovendo, newIndex);

                                    newArray.forEach(x => x.index = i++);

                                    console.log('novo array -> ', newArray);

                                    setArray(newArray);
                                }}
                                style={{ backgroundColor: 'lightgray', color: 'black', minWidth: 400, minHeight: 100 }}>

                                {x.name + ' está no indice ' + x.index}

                            </div>

                            <p>___________________________________________________________________________________________</p>
                        </>
                    )
                })
            }

        </div>
    )
}
