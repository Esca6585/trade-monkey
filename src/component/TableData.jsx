import { Row, Table } from 'antd';
import './TableData.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 'This is production name',
    math: 60,
    english: 70,
    address: 'This is production name',
    sanction: 'This is production name',
    listedID: 'This is production name',
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
    address: 'This is production name',
    sanction: 'This is production name',
    listedID: 'This is production name',
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
    address: 'This is production name',
    sanction: 'This is production name',
    listedID: 'This is production name',
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
    address: 'This is production name',
    sanction: 'This is production name',
    listedID: 'This is production name',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableData = () => {
  return (
    <div className='TableData'>
      <Row className='Header__left'>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </Row>
    </div>
  );
}

export default TableData;