import React, {useState, useEffect} from 'react'
import {Table} from 'antd'

export default function TableDemo() {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: `${['h', 'l'][i % 2]}${i}${i}`,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    })
  }

  const [tableData, setTableData] = useState(data)
  const [sortedInfo, setSortedInfo] = useState({})
  const [columns, setColumns] = useState(calcColums())

  function calcColums(sorter = {}) {
    let columns = [
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'key',
        key: 'key',
        fixed: 'left',
        sorter: (a, b) => {
          // if (a.key.length === b.key.length) {
          return a.key.localeCompare(b.key)
          // } else {
          //   return a.key.length > b.key.length
          // }
        },
        sortOrder: sorter.columnKey === 'key' && sorter.order,
      },
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
      },
    ]
    return columns
  }

  function handleChange(pagination, filters, sorter) {
    // setTableData(filters)
    setSortedInfo(sorter)
    setColumns(calcColums(sorter))
  }

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={handleChange}
      scroll={{x: 1500}}
      pagination={{
        // pageSize: 20,
        pageSizeOptions: ['10', '20', '30', '40'],
      }}
    />
  )
}
