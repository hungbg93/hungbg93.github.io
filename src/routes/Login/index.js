import { useNavigate } from "react-router-dom";
import {Button, Form, Input, Divider, notification, Space } from 'antd';
import {FacebookOutlined, GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
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
  const navigate = useNavigate();
  
  useEffect(() => {        
    window.sessionStorage.removeItem("user");
  }, []);

  const onFinish = (values) => {
    if(values.tai_khoan !== 'admin' && values.mat_khau !== 'admin') {
      notification.warning({
        message: 'Thông báo',
        description: 'Tài khoản hoặc mật khẩu không đúng'
      });
      return;
    }

    notification.warning({
      message: 'Thông báo',
      description: 'Đăng nhập thành công'
    });

    redirect({
      name: 'Administrator',
      token: 123
    });
  };

  const redirect = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));

    navigate('/');
  };

  const onFinishFailed = () => {

  };

  const loginWithFB = () => {
    window.FB.getLoginStatus(function(response) {   
        if (response.status !== 'connected') {
          return window.FB.login((res) => {
            console.log(res)    
            if (res.status === 'not_authorized') {              
              return;
            }
            const accessToken = res.authResponse.accessToken;
            handleToken(accessToken);
          }, {scope: 'email'})
        }

        const accessToken = response.authResponse.accessToken;
        handleToken(accessToken);
    });
  };

  const handleToken = (accessToken) => {
    window.FB.api('/me', function(response) {      
      redirect({
        name: response.name,
        token: accessToken
      });
    });
  };

  return (
    <div className='h-screen gh-login-bg'>
      <div className="grid justify-items-center" >
        <div className="rounded-2xl mx-4 px-8 py-20 gh-login-bg-item" style={{position: 'absolute', top: '25%'}}>
          <Form           
            style={{width: '300px'}} 
            name="login"
            form={form}
            // {...formItemLayout}      
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              // label={<b>Tài khoản</b>}
              name="tai_khoan"
              style={{marginBottom: '20px'}}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên đăng nhập',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} className='gh-ip' placeHolder='Tài khoản'/>
            </Form.Item>

            <Form.Item            
              // label={<b>Mật khẩu</b>}
              name="mat_khau"
              style={{marginBottom: '20px'}}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
              ]}
            >
              <Input prefix={<LockOutlined />} className='gh-ip' placeHolder='Mật khẩu' type="password"/>
            </Form.Item>        

            <Form.Item            
              colon={false}
              style={{marginBottom: '0px'}}
              
            >
              <Button className='gh-btn' htmlType="submit" style={{width: '100%'}} type="primary"><span className='tracking-wider'>Đăng nhập</span></Button>                  
            </Form.Item>
          </Form>

          <Divider />          

          <div className="text-center">
            <Space size={[20]}>
              <Button onClick={() => loginWithFB()} className='gh-fb-bg gh-btn' type="primary" ><FacebookOutlined style={{fontSize: '20px'}}/></Button>
              <Button className='gh-gg-bg gh-btn' type="primary" ><GoogleOutlined style={{fontSize: '20px'}}/></Button>
            </Space>
          </div>
        </div>
      </div>     
    </div>   
  );
};

export default Login;