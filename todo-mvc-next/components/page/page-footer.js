// React
import React from 'react'

// AntDesign
import { Col } from 'antd'
import { HeartTwoTone } from '@ant-design/icons';

// Next
import Link from 'next/link'

export default function PageFooter() {

    return (

        <Col span={10} style={{ justifyContent: 'center', marginTop: 20 }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 500 }}>

                Feito com <HeartTwoTone twoToneColor="#eb2f96" /> por Fabin Pereira dos Santos. De acordo com

                <Link href="https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality">
                    <a target={'_blank'}>TodoMVC functionality</a>
                </Link>

            </div>

        </Col>

    )

}