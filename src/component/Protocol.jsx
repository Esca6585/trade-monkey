import { Row } from 'antd';
import './Protocol.css';

const Protocol = () => {
  return (
    <div className='Protocol'>
      <Row className='Header__left'>
        <a>Dow Jones</a>
      </Row>

      <Row className='Header__right'>
        <p>PROTOCOL</p>
      </Row>
    </div>
  );
}

export default Protocol;