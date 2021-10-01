// React
import React from 'react'

// Componentes
import HeaderList from '../components/header-list'
import FooterList from '../components/footer-list';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ListItem from '../components/list-item'

// AntDesign
import { Row, Col, List } from 'antd';

// MobX
import { observer } from 'mobx-react'

// Models
import { ListOfTodoItem } from '../models/todo';
import { FilterOption } from '../models/list'

function Home() {

  return (

    <>

      <PageHeader />

      <Row>

        <Col span={15} offset={4} style={{ top: 20 }}>

          <List
            bordered
            dataSource={

              FilterOption.getSelectedOption === 'completed' ?
                ListOfTodoItem.getCompletedItems
                :
                FilterOption.getSelectedOption === 'active' ?
                  ListOfTodoItem.getActiveItems
                  :
                  ListOfTodoItem.getAllItems

            }
            header={<HeaderList />}
            footer={<FooterList />}
            renderItem={x => <ListItem item={x} />} />

        </Col>

      </Row>

      <PageFooter />

    </>
  )
}

export default observer(Home);