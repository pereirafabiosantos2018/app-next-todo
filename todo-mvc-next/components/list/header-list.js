// React
import React from 'react'

import { Colors } from '../../Enums/enums';

// AntDesign
import { Row, Col, Button, Input } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';

// Models
import { ListOfTodoItem } from '../../models/todo'
import { Task } from '../../models/list'
import { observer } from 'mobx-react-lite';

let idAtual = 1;

function HeaderList() {

    return (
  
      <Row>
  
        <Col span={2}>
  
          <Button 
            style={{ border: 0, height: 25, borderColor: 'transparent' }}
            onClick={() => ListOfTodoItem.markAllDone() }>

            <ScheduleOutlined style={{ color: Colors.Azul_Claro, fontSize: 22 }} />

          </Button>
  
        </Col>
  
        <Col span={22}>
  
          <Input
            style={{borderRadius: 5}}
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

  export default observer(HeaderList);