import { Row, Space } from 'antd';
import Header from './component/Header';
import HeaderSecond from './component/HeaderSecond';
import Body from './component/Body';
import Protocol from './component/Protocol';
import TableData from './component/TableData';
import Footer from './component/Footer';

const App = () => (
  <>
    <Row>
      <Header />
      <HeaderSecond />
      <Body />
      <Protocol />
      <TableData />
      <Footer />
    </Row>
  </>
);

export default App;