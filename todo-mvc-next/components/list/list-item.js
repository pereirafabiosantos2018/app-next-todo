// React
import React from 'react'
import { observer } from 'mobx-react-lite'

// AntDesign
import { Row, Col, Space, Checkbox, List, Button, Typography, Input } from 'antd'
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

function ListItem({ item }) {

    return (

        <List.Item
            key={item.id}
            actions={
                [
                    item.edit === false && item.completed === false ?

                        <Button
                            style={{ borderColor: Colors.Azul_Claro}}
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

                    <Row>

                        <Col span={1}>

                            <Checkbox
                                checked={item.completed}
                                key={item.id}
                                onChange={(e) => { item.changeCompleted() }} />

                        </Col>

                        <Col span={23}>
                            {renderInput(item)}
                        </Col>

                    </Row>

                }>
            </List.Item.Meta>

        </List.Item>

    )

}

export default observer(ListItem);