import {Button, Form, Input, DatePicker, Select} from 'antd';
import {FacebookOutlined, GoogleOutlined} from '@ant-design/icons';
import { useEffect } from 'react';
import moment from 'moment';

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const Login = () => {
  const [form] = Form.useForm();
  
  // useEffect(() => {
  //   if(rowSelected.id) {      
  //     form.setFieldsValue({
  //       ten: rowSelected.ten,
  //       ngay_sinh: rowSelected.ngay_sinh ? moment(rowSelected.ngay_sinh) : null,
  //       dia_chi: rowSelected.dia_chi,
  //       chuc_vu: rowSelected.chuc_vu,
  //     });
  //   }
  // }, [rowSelected]);

  const onFinish = () => {

  };

  const onFinishFailed = () => {

  };

  return (
    <div className="grid justify-items-center">
      <div className="rounded-2xl" style={{position: 'absolute', top: '30%'}}>
        <Form
          name="login"
          form={form}
          {...formItemLayout}      
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label={<b>Tài khoản</b>}
            name="user"
            style={{marginBottom: '5px'}}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên đăng nhập',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item            
            label={<b>Mật khẩu</b>}
            name="password"
            style={{marginBottom: '10px'}}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            ]}
          >
            <Input type="password"/>
          </Form.Item>        

          <Form.Item
            // label=" "
            colon={false}
            style={{marginBottom: '0px'}}
            
          >
            <Button htmlType="submit" style={{width: '100%'}} type="primary">Đăng nhập</Button>                  
          </Form.Item>
          <Form.Item
            label=" "
            colon={false}
            style={{marginBottom: '0px'}}
            
          >
            <Button className='gh-fb-bg' htmlType="submit" style={{width: '100%'}} type="primary" icon={<FacebookOutlined style={{fontSize: '20px'}}/>}>Đăng nhập với Facebook</Button>
            <Button className='gh-gg-bg mt-2' htmlType="submit" style={{width: '100%'}} type="primary" icon={<GoogleOutlined style={{fontSize: '20px'}}/>}>Đăng nhập với Google</Button>
          </Form.Item>
        </Form>
      </div>
    </div>        
  );
};

export default Login;