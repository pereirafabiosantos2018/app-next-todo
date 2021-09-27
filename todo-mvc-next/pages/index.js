// AntDesign
import { Row, Col, Image, Table, Button, Input, Space, Divider, Radio } from 'antd';
import { HeartTwoTone, DeleteOutlined, ScheduleOutlined, EditOutlined } from '@ant-design/icons';

const { Search } = Input;

// Next
import Link from 'next/link'

// Enums
import { Colors } from '../Enums/enums';
import { useState } from 'react';


const columns = [
  {
    // title: 'Tarefa',
    dataIndex: 'tarefa',

    render: (valor) => {
      return (
        <>
          {valor}

          <Button style={{ backgroundColor: '#fff', position: 'absolute', right: 70 }} ghost>
            <EditOutlined style={{ color: Colors.Azul }} />
          </Button>

          <Button style={{ backgroundColor: '#ff4d4f', position: 'absolute', right: 20, borderRadius: 5 }} ghost>
            <DeleteOutlined style={{ color: '#fff' }} />
          </Button>

        </>
      )
    }
  }
];

const onSelectChange = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  // this.setState({ selectedRowKeys });
};

let data = [
  {
    tarefa: 'eita',
  }
];

const AddItem = (item) => {
  console.log('adicionando item na lista -> ', item);

  data.push({
    tarefa: item
  });

}

export default function Home() {

  const selectedStyle = {
    backgroundColor: Colors.Azul_Claro,
    color: Colors.Branco
  };

  const unselectedStyle = {
    backgroundColor: Colors.Branco,
    color: Colors.Preto
  };

  const [selected, setSelected] = useState('all');

  const rowSelection = {
    // selectedRowKeys,
    onChange: onSelectChange,
  };

  return (

    <>
      <div style={{ backgroundColor: '#001529', height: 250, width: '100%' }}>

        <Row>

          <Col span={2} offset={6} style={{ marginTop: 50 }}>

            <Image
              width={150}
              height={150}
              src={'/todo.png'} />

          </Col>

          <Col span={8} offset={1}>
            <p style={{ marginTop: 100, fontSize: 40, color: Colors.Branco }}>Fabin TodoMVC</p>
          </Col>

        </Row>

      </div>

      <Row>

        <Col span={12} offset={5} style={{ top: 20 }}>

          <Table
            title={() =>
              <Row>

                <Col span={24}>

                  <Input
                    addonBefore={
                      <Button style={{ border: 0, height: 25, borderColor: 'transparent' }}>
                        <ScheduleOutlined style={{ color: '#003380', fontSize: 18 }} />
                      </Button>
                    }
                    placeholder="What needs to be done?"
                    onPressEnter={() => AddItem('1')} />

                </Col>

              </Row>
            }
            footer={() =>

              <Row>
                {
                  <>
                    <Col span={24} offset={2}>

                      <Space split={<Divider type="vertical" style={{ height: 20 }} />}>

                        <Button style={{ border: 0 }}>
                          2 items left
                        </Button>

                        <Space>

                          <Radio.Group value={'large'} onChange={(prop) => console.log('alteração do radio -> ', prop.target)}>

                            <Radio.Button value="all" 
                              style={selected === 'all' ? selectedStyle : unselectedStyle}
                              onClick={() => setSelected('all')}>

                              All
                            </Radio.Button>

                            <Radio.Button value="active"
                              style={selected === 'active' ? selectedStyle : unselectedStyle}
                              onClick={() => setSelected('active')}>

                              Active
                            </Radio.Button>

                            <Radio.Button value="completed"
                              style={selected === 'completed' ? selectedStyle : unselectedStyle}
                              onClick={() => setSelected('completed')}>

                              Completed
                            </Radio.Button>

                          </Radio.Group>

                        </Space>

                        <Button>
                          Clear completed
                        </Button>

                      </Space>

                    </Col>

                  </>
                }
              </Row>
            }
            columns={columns}
            dataSource={data}
            rowSelection={rowSelection}
            pagination={false} />

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
