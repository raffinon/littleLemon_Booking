
import { Button, Select, Form, Input, InputNumber, DatePicker, TimePicker } from 'antd'
import { useState } from "react";

const AccountForm = (props) => {

  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [times, setTimes] = useState("");

  const onFinish = (values) => {
    console.log('Success:', values);
    handleSumbit(values);

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSumbit = (values) => {
    props.submitForm(values);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  return (
    <header>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={value => setUserName(value)} />
        </Form.Item>

        <Form.Item
          label="Date"
          name="book-date"
          rules={[
            {
              required: true,
              message: 'Please input date!',
            },
          ]}
        >
          <DatePicker onChange={onChange} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="times"
          name="times"
          rules={[
            {
              required: true,
              message: 'Please input your times!',
            },
          ]}
        >
          <TimePicker onChange={(time, timeString) => setTimes(timeString)} />
        </Form.Item>

        <Form.Item
          label="Number of Guest"
          name="book-guest"
          rules={[
            {
              required: true,
              message: 'Please input your number of guest!',
            },
          ]}
        >
          <InputNumber min={1} max={10} onChange={(value) => setGuests(value)} />
        </Form.Item>

        <Form.Item
          label="Occasion"
          name="occasion"
          rules={[
            {
              required: true,
              message: 'Please input your occaion!',
            },
          ]}
        >
          <Select
            style={{
              width: 120,
            }}
            onChange={value => setOccasion(value)}
            options={[
              {
                value: 'Birthday',
                label: 'Birthday',
              },
              {
                value: 'Anniversary',
                label: 'Anniversary',
              }
            ]} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
          Make Your Reservation
          </Button>
        </Form.Item>
      </Form>
    </header>
  );
};

export default AccountForm;
