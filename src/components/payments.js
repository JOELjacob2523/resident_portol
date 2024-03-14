import React from "react";
import { Table, Pagination, Button } from "antd";
import "../css/payments.css";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    width: 200,
  },
  {
    title: "Memo",
    dataIndex: "memo",
    width: 400,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 200,
  },
  {
    title: "Balance",
    dataIndex: "balance",
    width: 200,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: new Date().toLocaleString(),
    memo: `Payment or Charge ${i + 1}`,
    amount: `$150.00`,
    balance: `$380.00`,
  });
}

const Payments = () => {
  return (
    <div className="payments-container">
      <Table
        className="payments-table"
        columns={columns}
        dataSource={data}
        pagination={<Pagination defaultCurrent={6} total={500} />}
        scroll={{
          y: 600,
        }}
      />
      <div className="make-payment-container">
        Current Balance
        <div className="current-balance">$380.00</div>
        <div className="make-payment-inner">
          <Button type="primary" block className="make-payment-btn">
            Make payment
          </Button>
          <div className="autopay-container">
            <Button block className="autopay-btn">
              Set up autopay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payments;
