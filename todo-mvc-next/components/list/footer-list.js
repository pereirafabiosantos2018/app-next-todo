// React
import React from 'react'

// AntDesign
import { Row, Col, Button, Divider, Radio, Tooltip } from 'antd';

// Estilos
import { selectedStyle, unselectedStyle } from '../../Enums/estilos'

// Mobx
import { ListOfTodoItem } from '../../models/todo'
import { FilterOption } from '../../models/list'
import { observer } from 'mobx-react-lite';

function FooterList() {

    return (

        <Row
            style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

            <Col span={24}
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                <Button style={{ border: 0 }}>
                    {ListOfTodoItem.totalItems}
                </Button>

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

                <Tooltip 
                    title={ListOfTodoItem.hasCompletedItems === true ? '' : 'Não há itens concluídos'}>

                    <Button
                        disabled={ListOfTodoItem.hasCompletedItems === false}
                        onClick={() => ListOfTodoItem.removeCompletedTasks()}>

                        Clear completed
                    </Button>

                </Tooltip>

            </Col>

        </Row>
    )
}

export default observer(FooterList);