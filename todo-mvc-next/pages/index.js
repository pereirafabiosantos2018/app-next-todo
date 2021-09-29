// React
import React from 'react'

// AntDesign
import { Row, Col, Image, Button, Input, Space, Divider, Radio, List, Checkbox } from 'antd';
import { HeartTwoTone, DeleteOutlined, ScheduleOutlined, EditOutlined } from '@ant-design/icons';

// Estilos
import { selectedStyle, unselectedStyle } from '../Enums/estilos'

import { observer } from 'mobx-react'

// Next
import Link from 'next/link'

// Enums
import { Colors } from '../Enums/enums';

// Models
import { ListOfTodoItem, ToDoItem } from '../models/todo';
import { FilterOption, Task } from '../models/list'

let idAtual = 1;

export const renderHeaderList = () => {

  return (

    <Row>

      <Col span={2}>

        <Button style={{ border: 0, height: 25, borderColor: 'transparent' }}>
          <ScheduleOutlined style={{ color: Colors.Azul_Claro, fontSize: 22 }} />
        </Button>

      </Col>

      <Col span={22}>

        <Input
          id={'task'}
          value={Task.getText}
          placeholder="What needs to be done?"
          onChange={(e) => { Task.setTask(e.target.value) }}
          onPressEnter={(prop) => {

            ListOfTodoItem.addItem({
              id: idAtual,
              completed: false,
              description: Task.getText,
              edit: false
            });

            idAtual = idAtual + 1;

            Task.setTask('');
          }} />

      </Col>

    </Row>
  )
}

export const renderItemList = (item) => {

  return (

    <Row>

      <List.Item>

        <Space>

          <Checkbox
            key={item.id}
            onChange={(e) => { }} />

          <Col span={24}>
            {
              item.edit === true ?

                <Input
                  value={item.description}
                  onChange={(e) => { }}
                  placeholder="Edição"
                  onPressEnter={(prop) => { }} />

                :

                item.description + ' - Completado: ' + item.completed.toString()
            }
          </Col>

        </Space>

        {
          item.edit === false ?

            <Button style={{ backgroundColor: '#fff', position: 'absolute', right: 70 }} ghost>

              <EditOutlined
                style={{ color: Colors.Azul }}
                onClick={() => { }} />

            </Button>

            : null
        }

        <Button style={{ backgroundColor: '#ff4d4f', position: 'absolute', right: 20, borderRadius: 5 }} ghost>

          <DeleteOutlined
            style={{ color: '#fff' }}
            onClick={() => { }} />

        </Button>

      </List.Item>

    </Row>
  )

}

export const renderFooterList = () => {

  return (

    <Col span={20} offset={4}>

      <Space split={<Divider type="vertical" style={{ height: 20 }} />}>

        <Button style={{ border: 0 }}>
          {ListOfTodoItem.totalItems} items left
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

        <Button
          onClick={() => { }}>
          Clear completed
        </Button>

      </Space>

    </Col>
  )

}

function Home() {

  return (

    <>
      <div style={{ backgroundColor: '#001529', height: 250, width: '100%' }}>

        <Row>

          <Col span={2} offset={7} style={{ marginTop: 50 }}>
            <Image width={150} height={150} src={'/todo.png'} />
          </Col>

          <Col span={8} offset={1}>
            <p style={{ marginTop: 100, fontSize: 40, color: Colors.Branco }}>Fabin TodoMVC</p>
          </Col>

        </Row>

      </div>

      <Row>

        <Col span={15} offset={4} style={{ top: 20 }}>

          <List
            bordered
            dataSource={ListOfTodoItem.items}
            header={renderHeaderList()}
            footer={renderFooterList()}
            renderItem={item => renderItemList(item)} />

        </Col>

      </Row>

      <Row>

        <Col span={10} offset={7} style={{ bottom: 20, position: 'absolute' }}>
          Feito com  <HeartTwoTone twoToneColor="#eb2f96" /> por Fabin Pereira dos Santos. Based on

          <Link href="https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality">
            <a target={'_blank'}>{' '} TodoMVC functionality</a>
          </Link>

        </Col>

      </Row>
    </>
  )
}

export default observer(Home);