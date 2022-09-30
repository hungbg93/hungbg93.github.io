import {useState} from 'react';
import { Row, Button, Col, Table, Input, Modal, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import Create from './Create';

let rowSelected = {};

const Home = () => {
  const [visibleAdd, setVisibleAdd] = useState(false);

  const dataSource = [
    {
      id: 1,
      trang_thai: 1,
      ten: 'Long',
      ngay_sinh: '1991-06-10',
      dia_chi: '10 Downing Street',
      chuc_vu: 1
    },
    {
      id: 2,
      trang_thai: 2,
      ten: 'Sơn',
      ngay_sinh: '1994-05-02',
      dia_chi: '10 Downing Street',
      chuc_vu: 2
    },
    {
      id: 3,
      trang_thai: 1,
      ten: 'Vũ',
      ngay_sinh: '1999-06-02',
      dia_chi: '10 Downing Street',
      chuc_vu: 2
    },
    {
      id: 4,
      trang_thai: 1,
      ten: 'Hải',
      ngay_sinh: '1998-03-20',
      dia_chi: '10 Downing Street',
      chuc_vu: 2
    },
    {
      id: 5,
      trang_thai: 1,
      ten: 'Hùng',
      ngay_sinh: '1990-05-02',
      dia_chi: '10 Downing Street',
      chuc_vu: 1
    },
  ];
  

  const columns = [
    {
      title: 'Trạng thái',
      dataIndex: 'trang_thai',
      key: 'trang_thai',
    },
    {
      title: 'Tên',
      dataIndex: 'ten',
      key: 'ten',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'ngay_sinh',
      key: 'ngay_sinh',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'dia_chi',
      key: 'dia_chi',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'chuc_vu',
      key: 'chuc_vu',
    },
    {
      title: '',
      dataIndex: 'event',
      width: '50px',
      key: 'event',
      render: (text, record) => <Tooltip title="Sửa"><EditOutlined onClick={() => handleEdit(record)}/></Tooltip>
    },
  ];

  const handleEdit = (record) => {    
    rowSelected = record;
    setVisibleAdd(true);
  };

  const handleAdd = () => {
    rowSelected = {};
    setVisibleAdd(true);
  };

  return (
    <>
      <Row>
        <Col span={24} className="my-3">
          <Row>
          <Col span={12}>
            <Button className="w-40" type="primary" onClick={() => handleAdd()}>
              + Thêm
            </Button>
          </Col>          
          <Col span={12}>
            <Input.Search 
              placeholder="Tìm kiếm"              
            />  
          </Col>        
          </Row>
        </Col>
        <Col span={24}>
          <Table
            pagination={false}            
            scroll={{
              y: 500
            }}
            dataSource={dataSource} 
            columns={columns} />
        </Col>        
      </Row>

      <Modal
        title={<span className="uppercase">{rowSelected.id ? <span>Sửa thông tin <span className="font-bold">{rowSelected.ten}</span></span> : "Thêm nhân viên"}</span>}
        style={{
          top: 20,
        }}
        visible={visibleAdd}        
        onCancel={() => setVisibleAdd(false)}
        width={'50%'}        
        footer={false}
        destroyOnClose={true}
      >
        <Create 
          rowSelected={rowSelected}
          onCancel={() => setVisibleAdd(false)}
        />
      </Modal>
    </>
  );
};

export default Home;