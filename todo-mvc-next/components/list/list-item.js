// React
import React from 'react'
import { observer } from 'mobx-react-lite'

// AntDesign
import { Row, Col, Space, Checkbox, List, Button, Typography } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

// Enums
import { Colors } from '../../Enums/enums'
import { ListOfTodoItem } from '../../models/todo';

const { Text } = Typography;

function ListItem({ item }) {

    return (

        <Row>

            <List.Item>

                <Space>

                    {/* Altera o status da tarefa */}
                    <Checkbox
                        checked={item.completed}
                        key={item.id}
                        onChange={(e) => { item.changeCompleted() }} />

                    <Col span={24}>
                        {
                            item.edit === true ?

                                <Input
                                    value={item.description}
                                    placeholder="Edição" />

                                :

                                item.completed === true ?

                                    <Text delete>{item.description}</Text>
                                    :
                                    <Text>{item.description}</Text>

                        }
                    </Col>

                </Space>

                {
                    item.edit === false && item.completed === false ?

                        <Button style={{ backgroundColor: '#fff', position: 'absolute', right: 70 }} ghost>

                            <EditOutlined style={{ color: Colors.Azul }} />

                        </Button>

                        : null
                }

                <Button 
                    ghost
                    style={{ backgroundColor: '#ff4d4f', position: 'absolute', right: 20, borderRadius: 5 }} 
                    onClick={() => ListOfTodoItem.deleteItem(item)}>

                    <DeleteOutlined style={{ color: '#fff' }} />

                </Button>

            </List.Item>

        </Row>
    )

}

export default observer(ListItem);