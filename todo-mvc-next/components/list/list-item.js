// React
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

// AntDesign
import { Row, Col, Checkbox, List, Button, Typography, Input } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

// Enums
import { Colors } from '../../Enums/enums'
import { ListOfTodoItem } from '../../models/todo';

const { Text } = Typography;

const renderInput = (item) => {

    if (item.edit === true && item.completed === false) {

        return (
            <Input
                style={{ borderRadius: 5 }}
                value={item.description}
                placeholder="Edição"
                onPressEnter={() => item.toggleEdit()}
                onChange={(e) => item.changeDescription(e.target.value)} />
        )
    }
    else if (item.edit === false && item.completed === true) {
        return <Text delete>{item.description}</Text>
    }
    else {
        return <Text>{item.description}</Text>
    }
}

const onDrag = (event, dados) => {
    event.dataTransfer.setData("text", event.target.id);
    console.log('gravando os dados no onDrag...', event.target.id);
}


const onDrop = (event) => {

    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log('dado obtido no onDrop -> ', data);
}

function ListItem({ item }) {

    const [up, setUp] = useState(0);

    return (

        <div
            id={item.id}
            draggable={true}
            style={
                {
                    // backgroundColor: up === 0 ? '#fff' : Colors.Azul_Claro,
                    // borderRadius: 5,
                    // marginLeft: up === 0 ? 0 : 25,
                    // width: up === 0 ? '100%' : '95%',
                    cursor: 'grab'
                }}
            onDragStart={(event) => {
                setUp(1);
                onDrag(event, item); // Salva os dados que estão sendo movidos
            }}
            onDragOver={(event) => {
                event.preventDefault(); // "Desabilita" a manipulação padrão do elemento
                console.log('só passando, rs ->', event);
            }}
            onDrop={(event) => {
                setUp(0);
                onDrop(event);
            }}>

            <List.Item
                key={item.id}
                actions={
                    [
                        item.edit === false && item.completed === false ?

                            <Button
                                style={{ borderColor: Colors.Azul_Claro }}
                                onClick={() => item.toggleEdit()}>

                                <EditOutlined style={{ color: Colors.Azul }} />

                            </Button>

                            : null
                        ,
                        <Button
                            ghost
                            style={{ backgroundColor: '#ff4d4f', borderRadius: 5 }}
                            onClick={() => ListOfTodoItem.deleteItem(item)}>

                            <DeleteOutlined style={{ color: '#fff' }} />

                        </Button>
                    ]
                }>

                <List.Item.Meta
                    title={

                        <Row
                            style={
                                {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start'
                                }}>

                            <Col
                                style={
                                    {
                                        position: 'absolute',
                                        left: 40
                                    }}>

                                <Checkbox
                                    checked={item.completed}
                                    key={item.id}
                                    onChange={(e) => { item.changeCompleted() }} />

                            </Col>

                            <Col
                                style={{ position: 'relative', left: 60, width: '90%' }}>
                                { renderInput(item) }
                            </Col>

                        </Row>

                    }>
                </List.Item.Meta>

            </List.Item>

        </div>
    )

}

export default observer(ListItem);