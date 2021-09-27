// AntDesign
import { Row, Col, Image, Table, Button, Input, Space, Divider, Radio } from 'antd';
import { HeartTwoTone, DeleteOutlined, ScheduleOutlined, EditOutlined } from '@ant-design/icons';

const { Search } = Input;

// Next
import Link from 'next/link'

// Enums
import { Colors } from '../Enums/enums';


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
  this.setState({ selectedRowKeys });
};

const data = [
  {
    tarefa: 'eita',
  }
];

export default function Home() {

  const rowSelection = {
    // selectedRowKeys,
    onChange: onSelectChange,
  };

  return (

    <>
      <div style={{ backgroundColor: Colors.Azul, height: 250, width: '100%' }}>

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
                    placeholder="O que precisa ser feito?"
                    onPressEnter={() => alert('apertei enter, aeeee')} />

                </Col>

              </Row>
            }
            footer={() =>

              <Row>
                {
                  <>
                    <Col span={24} offset={1}>

                      <Space split={<Divider type="vertical" style={{ height: 20 }} />}>

                        <Button style={{ border: 0 }}>
                          2 itens cadastrados
                        </Button>

                        <Space>

                          <Radio.Group value={'large'}>
                            <Radio.Button value="all" style={{ backgroundColor: Colors.Azul, color: '#fff' }}>All</Radio.Button>
                            <Radio.Button value="active">Active</Radio.Button>
                            <Radio.Button value="completed">Completed</Radio.Button>
                          </Radio.Group>

                          <Divider type="vertical" style={{ height: 20 }} />

                        </Space>

                      </Space>

                    </Col>

                  </>
                }
              </Row>
            }
            columns={columns}
            dataSource={data}
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
