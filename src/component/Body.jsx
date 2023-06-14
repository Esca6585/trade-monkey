import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Row,
  Col
} from 'antd';
import './Body.css';

const Body = () => {
  return (
    <Row className='Body'>
      <Col span={12} className="BodyLeft">
        <div className="container">
          <Form.Item label="EINZELBUFUNG"></Form.Item>
          <Row>
            <Col span={10}>
                <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 18,
                }}
                layout="horizontal"
                style={{
                  maxWidth: 1000,
                }}
              >
                <Form.Item label="Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Refenz">
                  <Input />
                </Form.Item>
                <Form.Item label="Strasse">
                  <Input />
                </Form.Item>
                <Form.Item label="Land">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col span={10}>
              <Form
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 18,
                  }}
                  layout="horizontal"
                  style={{
                    maxWidth: 1000,
                  }}
                >
                  <Form.Item label="Typ">
                    <Input />
                  </Form.Item>
                  <Form.Item label="ID#">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Ort">
                    <Input />
                  </Form.Item>
                </Form>
            </Col>
          </Row>
        </div>
        <Row className="flex-end">
          <div className="space-align-block">
          <Col span={12} align="right">
            <Space align="start">
              <Button type="primary">Prufen starten</Button>
              <Button type="default" className='default'>Aktualisiren</Button>
            </Space>
          </Col>
          </div>
        </Row>
      </Col>
      <Col span={12} className="BodyRight">
        <div className="container">
          <Form.Item label="BEGRUNDUG ENTHEISHED SWISS SANCTIONS"></Form.Item>
          <Row>
            <Col span={12}>
                <Form
                labelCol={{
                  span: 10,
                }}
                wrapperCol={{
                  span: 24,
                }}
                layout="horizontal"
                style={{
                  maxWidth: 1000,
                }}
              >
                <Form.Item>
                  <Select defaultValue="Begrundug">
                    <Select.Option value="Begrundug" selected>Begrundug</Select.Option>
                    <Select.Option value="Begrundug2" selected>Begrundug2</Select.Option>
                    <Select.Option value="Begrundug3" selected>Begrundug3</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <br />
                </Form.Item>
                <Form.Item>
                  <Select
                    placeholder='Bemerkung'
                  />
                </Form.Item>
                <Radio.Group>
                  <Radio value={1} checked="true">WhiteList</Radio>
                  <Radio value={2}>Blacklist</Radio>
                </Radio.Group>
              </Form>
            </Col>
          </Row>
        </div>
        <Row className="flex-end">
          <div className="space-align-block">
            <Col span={12} align="right">
              <Space align="start">
                <Button type="primary">Speichern</Button>
              </Space>
            </Col>  
          </div>
        </Row>
      </Col>
    </Row>
  );
}

export default Body;