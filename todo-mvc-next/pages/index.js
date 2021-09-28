// AntDesign
import { Row, Col, Image, Button, Input, Space, Divider, Radio, List, Checkbox } from 'antd';
import { HeartTwoTone, DeleteOutlined, ScheduleOutlined, EditOutlined } from '@ant-design/icons';

// Estilos
import { selectedStyle, unselectedStyle } from '../Enums/estilos'

// Next
import Link from 'next/link'

// Enums
import { Colors } from '../Enums/enums';

// React
import { useState } from 'react';

const onSelectChange = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  // this.setState({ selectedRowKeys });
};

let idAtual = 0;

const sortItems = (items) => {
  return items.sort((a, b) => a.id - b.id);
}

export default function Home() {

  const [selected, setSelected] = useState('all');
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [lista, setItem] = useState([]);
  const [empty, setEmpty] = useState('');

  const rowSelection = {
    // selectedRowKeys,
    onChange: onSelectChange,
  };

  return (

    <>
      <div style={{ backgroundColor: '#001529', height: 250, width: '100%' }}>

        <Row>

          <Col span={2} offset={7} style={{ marginTop: 50 }}>

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

        <Col span={15} offset={4} style={{ top: 20 }}>

          <List
            header={

              <Row>

                <Col span={2}>

                  <Button style={{ border: 0, height: 25, borderColor: 'transparent' }}>
                    <ScheduleOutlined style={{ color: Colors.Azul_Claro, fontSize: 22 }} />
                  </Button>

                </Col>

                <Col span={22}>

                  <Input
                    id={'task'}
                    value={tarefaAtual}
                    placeholder="What needs to be done?"
                    onChange={(e) => {
                      setTarefaAtual(e.target.value);
                    }}
                    onPressEnter={(prop) => {

                      setItem([...lista, {
                        id: idAtual,
                        edit: false,
                        completed: false,
                        description: tarefaAtual
                      }]);

                      idAtual++;

                      setTarefaAtual('')
                    }} />

                </Col>

              </Row>

            }
            footer={

              <Col span={20} offset={4}>

                <Space split={<Divider type="vertical" style={{ height: 20 }} />}>

                  <Button style={{ border: 0 }}>
                    {lista.length} items left
                  </Button>

                  <Space>

                    <Radio.Group value={'large'}>

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
                    Clear completed (hardcode)
                  </Button>

                </Space>

              </Col>
            }
            bordered
            dataSource={lista}
            renderItem={item => (

              <Row>

                <List.Item>

                  {console.log('item da lista -> ', item)}

                  <Space>

                    <Checkbox
                      key={item.id}
                      onChange={(e) => {

                        item.completed = !item.completed;
                        console.log('item atual -> ', item);

                        let itensRestantes = lista.filter(x => x.id !== item.id);
                        console.log('itens restantes -> ', itensRestantes);

                        itensRestantes.push(item);

                        setItem(sortItems(itensRestantes))
                      }} />

                    <Col span={24} style={{ backgroundColor: 'red' }}>
                      {
                        item.edit === true ?

                          <Input
                            value={item.description}
                            onChange={(e) => {
                              item.description = e.target.value;
                              console.log('valor ->', e.target.value);
                            }}
                            placeholder="Edição"
                            onPressEnter={(prop) => {
                              let valor = prop.target.value;
                              console.log('valor digitado -> ', valor);
                            }} />

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
                          onClick={() => {
                            item.edit = !item.edit;
                            console.log('item atual -> ', item);

                            let itensRestantes = lista.filter(x => x.id !== item.id);
                            console.log('itens restantes -> ', itensRestantes);

                            itensRestantes.push(item);

                            setItem(itensRestantes)
                          }} />

                      </Button>

                      : null
                  }

                  <Button style={{ backgroundColor: '#ff4d4f', position: 'absolute', right: 20, borderRadius: 5 }} ghost>

                    <DeleteOutlined
                      style={{ color: '#fff' }}
                      onClick={() => {
                        let itensRestantes = lista.filter(x => x.id !== item.id);
                        setItem(itensRestantes);
                      }} />

                  </Button>

                </List.Item>

              </Row>

            )} />

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
