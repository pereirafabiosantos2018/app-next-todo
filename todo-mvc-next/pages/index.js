// AntDesign
import { Row, Col, Image } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

// Next
import Link from 'next/link'

// Enums
import { Colors } from '../Enums/enums';

export default function Home() {

  return (

    <>
      <div style={{ backgroundColor: Colors.Azul, height: 250, width: '100%'}}>
          
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
