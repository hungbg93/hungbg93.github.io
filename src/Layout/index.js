import React from 'react';
import { Layout } from 'antd';
import Route from '../routes';

import Menu from './Menu';

const { Header, Content } = Layout;

const _Layout = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#15395b',
        }}
      >        
        <Menu/>
      </Header>
      <Content        
        style={{
          padding: '0 50px',
          marginTop: 64,   
          // backgroundColor: '#d5f2bb',
          minHeight: 'calc(100vh - 64px)'                 
        }}
      >        
        <Route />
      </Content>
      {/*<Footer        
        style={{
          padding: '10px 50px',          
          position: 'fixed',
          width: '100%',
          bottom: '0px'
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>*/}
    </Layout>
  );
};

export default _Layout;