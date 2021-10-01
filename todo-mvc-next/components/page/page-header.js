// React
import React from 'react'

// AntDesign
import { Image, Row, Col, Typography } from 'antd'

// Enums
import { Colors } from '../../Enums/enums'

const { Text } = Typography;

export default function PageHeader() {

    return (

        <Row style={{ backgroundColor: '#001529', height: 220, width: '100%' }} justify={'center'}>

            <Col span={8}>

                <div style={{ marginTop: 50}}>

                    <Image
                        width={130} height={130}
                        src={'/todo.png'} />

                    <Text style={{ fontSize: 36, color: Colors.Branco, position: 'absolute', bottom: 75 }}>Fabin TodoMVC</Text>

                </div>

            </Col>

        </Row>

    )

}