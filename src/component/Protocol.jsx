import {useState} from 'react';
import { Row, Button } from 'antd';
import './Protocol.css';

const Protocol = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className='Protocol'>
      <Row className='Header__left'>
        <div className='activeBottom'>
          <Button type="link" 
            onClick={toggleClass}
          >Dow Jones</Button>
          <span 
            className={isActive ? 'active': null} 
          ></span>
        </div>
      </Row>

      <Row className='Header__right'>
        <Button type="link" 
            onClick={toggleClass}
          >PROTOCOL</Button>
      </Row>
    </div>
  );
}

export default Protocol;