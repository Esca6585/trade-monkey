import { Row, Table } from 'antd';
import {useState} from 'react';
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
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: {
      compare: (a, b) => a.address - b.address,
      multiple: 1,
    },
  },
  {
    title: 'Saction',
    dataIndex: 'sanction',
    sorter: {
      compare: (a, b) => a.sanction - b.sanction,
      multiple: 1,
    },
  },
  {
    title: 'ListedID',
    dataIndex: 'listedID',
    sorter: {
      compare: (a, b) => a.listedID - b.listedID,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 'This is production name',
    english: 70,
    address: 'This is production name',
    sanction: 'This is production name',
    listedID: 'This is production name',
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    english: 89,
    address: 'This is address name 1',
    sanction: 'This is sanction name 1',
    listedID: 'This is listedID 1',
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    english: 70,
    address: 'This is address name 2',
    sanction: 'This is sanction name 2',
    listedID: 'This is listedID 2',
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    english: 89,
    address: 'This is address name 2',
    sanction: 'This is sanction name 2',
    listedID: 'This is listedID 2',
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    english: 70,
    address: 'This is address name 2',
    sanction: 'This is sanction name 2',
    listedID: 'This is listedID 2',
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    english: 89,
    address: 'This is address name 2',
    sanction: 'This is sanction name 2',
    listedID: 'This is listedID 2',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableData = () => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className='TableData'>
      <Row className='Header__left'>
        <div>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} scroll={{
      y: 240,
    }} />
        </div>
      </Row>
    </div>
  );
}

export default TableData;