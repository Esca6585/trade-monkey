import { Row, Select } from 'antd';
import './Footer.css';

const { Option } = Select;

const Header = () => {
  return (
    <div className='Footer'>
      <Row className='Header__left'>
        © Copyright Trade Monkey all right reserved.
      </Row>
    </div>
  );
}

export default Header;