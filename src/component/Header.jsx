import { Row, Select } from 'antd';
import TradeLogo from './TradeLogo';
import SwissLogo from './SwissLogo';
import DowJonesLogo from './DowJonesLogo';
import './Header.css';

const { Option } = Select;

const Header = () => {
  return (
    <div className='Header'>
      <Row className='Header__left'>
        <TradeLogo />
        <hr/>
        <SwissLogo />
      </Row>

      <Row className='Header__right'>
        <DowJonesLogo />
        <Select
          defaultValue="superadmin"
          style={{
            width: 180,
          }}
          options={[
            {
              value: 'superadmin',
              label: 'superadmin',
            },
            {
              value: 'benachrichtink',
              label: 'benachrichtink',
            },
            {
              value: 'adminuser',
              label: 'adminuser',
            },
            {
              value: 'abmelden',
              label: 'abmelden',
            },
          ]}
        />
      </Row>
    </div>
  );
}

export default Header;