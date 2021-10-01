// React
import React from 'react'

// AntDesign
import { Col, Button, Space, Divider, Radio } from 'antd';

// Estilos
import { selectedStyle, unselectedStyle } from '../Enums/estilos'

// Mobx
import { ListOfTodoItem } from '../models/todo'
import { FilterOption } from '../models/list'
import { observer } from 'mobx-react-lite';

function FooterList() {

    return (

        <Col span={20} offset={4}>

            <Space split={<Divider type="vertical" style={{ height: 20 }} />}>

                <Button style={{ border: 0 }}>
                    {ListOfTodoItem.totalItems}
                </Button>

                <Space>

                    <Radio.Group value={'large'}>

                        <Radio.Button value="all"
                            style={FilterOption.getSelectedOption === 'all' ? selectedStyle : unselectedStyle}
                            onClick={() => { FilterOption.setSelectedOption('all') }}>

                            All
                        </Radio.Button>

                        <Radio.Button
                            value="active"
                            style={FilterOption.getSelectedOption === 'active' ? selectedStyle : unselectedStyle}
                            onClick={() => { FilterOption.setSelectedOption('active') }}>

                            Active
                        </Radio.Button>

                        <Radio.Button value="completed"
                            style={FilterOption.getSelectedOption === 'completed' ? selectedStyle : unselectedStyle}
                            onClick={() => { FilterOption.setSelectedOption('completed') }}>

                            Completed
                        </Radio.Button>

                    </Radio.Group>

                </Space>

                <Button>Clear completed</Button>

            </Space>

        </Col>
    )
}

export default observer(FooterList);