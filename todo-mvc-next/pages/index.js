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

      <Row
        style={
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20
          }}>

        <Col span={16}>

          <List
            style={{ minWidth: 580 }}
            bordered={true}
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

        <PageFooter />

      </Row>

    </>
  )
}

export default observer(Home);