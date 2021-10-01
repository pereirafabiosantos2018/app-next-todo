// React
import React from 'react'

// AntDesign
import { Row, Col } from 'antd'
import { HeartTwoTone } from '@ant-design/icons';

// Next
import Link from 'next/link'

export default function PageFooter() {

    return (

        <Row>

            <Col span={10} offset={7} style={{ top: 30, position: 'relative' }}>
                Feito com  <HeartTwoTone twoToneColor="#eb2f96" /> por Fabin Pereira dos Santos. Based on

                <Link href="https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality">
                    <a target={'_blank'}>{' '} TodoMVC functionality</a>
                </Link>

            </Col>

        </Row>

    )

}