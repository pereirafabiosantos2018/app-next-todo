// React
import React, { useEffect } from 'react'

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
import { onSnapshot, applySnapshot } from 'mobx-state-tree';

function Home() {

  onSnapshot(ListOfTodoItem, (snapshot) => {
    localStorage.setItem('dados', JSON.stringify(snapshot));
    console.log('tirou snapshot', snapshot);
  });

  useEffect(() => {

    if (localStorage.getItem('dados')) {

      let items = localStorage.getItem('dados');

      console.log('dados do localstorage -> ', JSON.parse(items))
      applySnapshot(ListOfTodoItem.items, JSON.parse(items).items);
    }

  }, []
    // Evita o loading infinito ao aplicar o snapshot ao modelo atual da árvore
  );

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
            dataSource={ListOfTodoItem.getListOfToDoDataSource}
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