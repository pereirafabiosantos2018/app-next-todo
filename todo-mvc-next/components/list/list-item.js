// React
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

// AntDesign
import { Row, Col, Checkbox, List, Button, Typography, Input } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

// Enums
import { Colors } from '../../Enums/enums'
import { ListOfTodoItem } from '../../models/todo';

import { arrayMoveImmutable } from 'array-move';
import { applySnapshot } from 'mobx-state-tree';

const { Text } = Typography;

const renderInput = (item, up) => {

    if (item.edit === true && item.completed === false) {

        return (
            <Input
                id={item.index}
                style={{ borderRadius: 5 }}
                value={item.description}
                placeholder="Edição"
                onPressEnter={() => item.toggleEdit()}
                onChange={(e) => item.changeDescription(e.target.value)} />
        )
    }
    else if (item.edit === false && item.completed === true) {
        return <Text id={item.index} delete>{item.description}</Text>
    }
    else {
        return <Text style={{ color: up === true ? Colors.Branco : 'black' }} id={item.index}>{item.description}</Text>
    }
}

let newIndex = 0;
let indiceItemMovendo = 0;

function ListItem({ item }) {

    const [isMovingElement, setIsMovingElement] = useState(false);
    const [array, setArray] = useState(ListOfTodoItem.items);

    return (

        <>
            <div
                id={item.index}
                key={item.index}
                draggable={true}
                onDoubleClick={() => item.toggleEdit()}
                onDragStart={(event) => {
                    setIsMovingElement(true);

                    console.log('item que arrastei', event.target)
                    indiceItemMovendo = event.target.id;
                }}
                onDragOver={(event) => {
                    newIndex = parseInt(event.target.id);
                    console.log('movendo item para o indice ', newIndex);
                }}
                onDragEnd={() => {

                    setIsMovingElement(false);

                    let i = 0;

                    let arrayTemp = array.map(x => {
                        return {
                            id: x.id,
                            index: x.index,
                            completed: x.completed,
                            description: x.description,
                            edit: x.edit
                        }
                    });

                    // Reordena o array
                    let newArray = arrayMoveImmutable(arrayTemp, indiceItemMovendo, newIndex);

                    // Arrumo o indice
                    newArray.forEach(x => x.index = i++);

                    // Aplica no estado
                    applySnapshot(ListOfTodoItem.items, newArray);
                }}
                style={
                    {
                        backgroundColor: isMovingElement === true ? Colors.Azul_Claro : '#fff',
                        borderRadius: 5,
                        marginLeft: isMovingElement === true ? 0 : 25,
                        width: isMovingElement === true ? '100%' : '95%',
                        cursor: 'grab'
                    }}>

                <List.Item
                    id={item.index}
                    key={item.id}
                    actions={
                        [
                            item.edit === false && item.completed === false ?

                                <Button
                                    id={item.index}
                                    style={{ borderColor: Colors.Azul_Claro }}
                                    onClick={() => item.toggleEdit()}>

                                    <EditOutlined
                                        id={item.index}
                                        style={{ color: Colors.Azul }} />

                                </Button>

                                : null
                            ,
                            <Button
                                ghost
                                id={item.index}
                                style={{ backgroundColor: '#ff4d4f', borderRadius: 5 }}
                                onClick={() => ListOfTodoItem.deleteItem(item)}>

                                <DeleteOutlined style={{ color: '#fff' }} />

                            </Button>
                        ]
                    }>

                    <List.Item.Meta
                        id={item.index}
                        title={

                            <Row
                                id={item.index}
                                style={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start'
                                    }}>

                                <Col
                                    id={item.index}
                                    style={
                                        {
                                            position: 'absolute',
                                            left: 60
                                        }}>

                                    <Checkbox
                                        id={item.index}
                                        checked={item.completed}
                                        key={item.id}
                                        onChange={(e) => { item.changeCompleted() }} />

                                </Col>

                                <Col
                                    id={item.index}
                                    style={{ position: 'relative', left: 60, width: '90%' }}>
                                    {renderInput(item, isMovingElement)}
                                </Col>

                            </Row>

                        }>
                    </List.Item.Meta>

                </List.Item>

            </div>

        </>
    )

}

export default observer(ListItem);