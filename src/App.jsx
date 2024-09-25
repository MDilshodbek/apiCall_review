import { Button, Card, Form, Input, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const { Meta } = Card;

function App() {
  const [flowers, setFlowers] = useState([]);

  // const onSubmit = (values) => {
  //   console.log(values);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        url: "http://localhost:8080/api/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7",
        method: "GET",
      });

      setFlowers(data.data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4 m-auto mt-[50px]">
      {flowers.map(({ _id, main_image, title, short_description }) => (
        <Card
          key={_id}
          className="m-auto mt-[50px]"
          hoverable
          style={{
            width: 400,
          }}
          cover={<img alt="example" src={main_image} />}
        >
          <Meta title={title} description={short_description} />
        </Card>
      ))}
    </div>
  );
}

export default App;

{
  /* <Form
  onFinish={onSubmit}
  className="m-auto"
  layout="horizontal"
  style={{
    maxWidth: 600,
  }}
>
  <Form.Item
    label="Title"
    name={"title"}
    rules={[
      {
        required: true,
        message: "Please input!",
      },
    ]}
  >
    <Input name="title" placeholder="Enter title" />
  </Form.Item>

  <Form.Item
    label="Upload"
    name="main_image"
    rules={[
      {
        required: true,
        message: "Please upload image!",
      },
    ]}
  >
    <Upload
      name={"image"}
      action="http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
    >
      <Button>Upload</Button>
    </Upload>
  </Form.Item>
  <Form.Item label="Button">
    <Button htmlType="submit">Upload</Button>
  </Form.Item>
</Form>; */
}
