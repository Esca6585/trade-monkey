import { Alert, Avatar, Row, Select, Space, Button, Search } from 'antd';
import { UserOutlined, SearchOutlined, SwapOutlined, SettingOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import DowJonesLogo from './DowJonesLogo';
import './HeaderSecond.css';

const { Option } = Select;

const HeaderSecond = () => {
  return (
    <div className='Header'>
      <Row className='Header__left'>
        <Row>
          <Space wrap size={16}>
            <Avatar size="small" icon={<UserOutlined />} />
            <p>Mandant Test AG</p>
            <br />
            <Space wrap>
              <Button icon={<SearchOutlined />}>Search</Button>
            </Space>

            <Alert message="Success Tips data is updated" type="success" showIcon />
          </Space>
        </Row>
      </Row>

      <Row className='Header__right'>
        <Space wrap>
            <Button className='btn' type="default" icon={<SwapOutlined /> } size={25} >Dow Jones</Button>
            <Button className='btn' type="default" icon={<SettingOutlined /> } size={25} >Settings</Button>
            <Button className='btn' type="default" icon={<QuestionCircleOutlined /> } size={25} >Support</Button>
        </Space>
      </Row>
    </div>
  );
}

export default HeaderSecond;