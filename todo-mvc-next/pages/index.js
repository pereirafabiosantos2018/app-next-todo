import { Button, Row, Col, Image } from 'antd';

// import Image from 'next/image'

import { Colors } from '../Enums/enums';

export default function Home() {

  return (

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
  )
}
