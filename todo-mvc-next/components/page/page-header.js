// React
import React from 'react'

// AntDesign
import { Image, Row, Col, Typography } from 'antd'

// Enums
import { Colors } from '../../Enums/enums'

const { Text } = Typography;

export default function PageHeader() {

    return (

        <Row
            style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.PadraoHeader,
                    height: 200
                }} >

            <Col span={8}>

                <div
                    style={
                        { 
                            display: 'flex',
                            flexDirection: 'row',
                            minWidth: 400,
                            justifyContent: 'center', // Alinha os itens horizontalmente dentro do container flex
                            alignItems: 'center', // Alinha os itens verticalmente dentro do container flex
                        }}>

                    <Image
                        width={130} height={130}
                        src={'/todo.png'} />

                    <Text style={{ fontSize: 36, color: Colors.Branco}}>
                        Fabin TodoMVC
                    </Text>

                </div>

            </Col>

        </Row>

    )

}