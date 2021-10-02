import React from 'react'

export default function Drop() {

    return (

        <div 
            id={'container'} 
            style={
            {
                backgroundColor: 'lightgray', 
                display: 'flex',
                flexDirection: 'row', // Em que direção os itens serão posicionados, em colunas ou linhas
                flexWrap: 'wrap', // Indica se ao chegar no final do tamanho da tela passa para a próxima "linha"
                justifyContent: 'flex-end', // Alinhar os itens do flex
            }}>

            <div style={{ backgroundColor: 'blue', color: '#fff', minWidth: 400, minHeight: 100}}>
                Item 1
            </div>

            <div style={{ backgroundColor: 'yellow', color: 'black', minWidth: 500, minHeight: 100}}>
                Item 2
            </div>

            <div style={{ backgroundColor: 'green', color: '#fff', minWidth: 500, minHeight: 100}}>
                Item 3
            </div>

        </div>
    )
}
