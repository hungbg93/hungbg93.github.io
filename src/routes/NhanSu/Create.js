import {Button, Form, Input, DatePicker, Select} from 'antd';
import { useEffect } from 'react';
import moment from 'moment';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 14,
  },
};

const Create = ({onCancel, rowSelected = {}}) => {
  const [form] = Form.useForm();
  
  useEffect(() => {
    if(rowSelected.id) {      
      form.setFieldsValue({
        ten: rowSelected.ten,
        ngay_sinh: rowSelected.ngay_sinh ? moment(rowSelected.ngay_sinh) : null,
        dia_chi: rowSelected.dia_chi,
        chuc_vu: rowSelected.chuc_vu,
      });
    }
  }, [rowSelected]);

  const onFinish = () => {

  };

  const onFinishFailed = () => {

  };

  return (
    <Form
      name="basic"
      form={form}
      {...formItemLayout}      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên"
        name="ten"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ngày sinh"
        name="ngay_sinh"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn ngày sinh',
          },
        ]}
      >
        <DatePicker format="DD/MM/YYYY" style={{width: '100%'}}/>
      </Form.Item> 

      <Form.Item
        label="Địa chỉ"
        name="dia_chi"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập địa chỉ',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Chức vụ"
        name="chuc_vu"
        initialValue={2}
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn chức vụ',
          },
        ]}
      >
        <Select>          
          <Select.Option key={1} value={1}>
            Quản lý
          </Select.Option>
          <Select.Option key={2} value={2}>
            Nhân viên
          </Select.Option>
        </Select>
      </Form.Item> 

      <Form.Item
        wrapperCol={{span: 24}}
        className="text-center"
      >        
        <Button className="w-40 mr-2 mt-8" onClick={() => onCancel()}>Đóng</Button>
        <Button htmlType="submit" className="w-40 ml-2"type="primary">Lưu</Button>                  
      </Form.Item>
    </Form>    
  );
};

export default Create;