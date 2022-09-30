import {Menu} from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const _Menu = () => {

  return (
    <div className='flex h-full'>
      <div className="basis-1/4 text-white">
        <Link to="/" className="font-black text-2xl">
          {/*<img className="cursor-pointer" width={65} src={require('../image/logo-header.png')} />*/}
          LOGO
        </Link>        
      </div>
      <div className="basis-2/4 flex justify-center">      
        <Menu
          style={{            
            backgroundColor: '#15395b',                        
          }}          
          theme="dark"
          mode="horizontal"                                    
        >
          <Menu.Item key={1} style={{fontSize: '18px'}} className="gh-text-white"><Link to="nhan-su">Nhân viên</Link></Menu.Item>          
          <Menu.Item key={3} style={{fontSize: '18px'}} className="gh-text-white"><Link to="bao-cao">Báo cáo</Link></Menu.Item>          
        </Menu>       
      </div>  
      <div className="basis-1/4 flex justify-end">
        <span className="cursor-pointer font-semibold text-2xl text-white mt-2"><UnorderedListOutlined /></span>
      </div>      
    </div>
  );
};

export default _Menu;