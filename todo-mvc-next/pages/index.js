// React
import React from 'react'

// Componentes
import PageHeader from '../components/page/page-header';
import PageFooter from '../components/page/page-footer';
import HeaderList from '../components/list/header-list'
import FooterList from '../components/list/footer-list';
import ListItem from '../components/list/list-item'

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