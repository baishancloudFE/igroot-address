import React, { Component } from 'react'
import Address from './Address'

const options = {
  "region": [
    {
      "id": 1,
      "name": "华中"
    },
    {
      "id": 2,
      "name": "华北"
    }
  ],
  "province": [
    {
      "id": 1,
      "region_id": 2,
      "name": "北京"
    },
    {
      "id": 2,
      "region_id": 2,
      "name": "天津"
    },
    {
      "id": 3,
      "region_id": 1,
      "name": "上海"
    },
    {
      "id": 4,
      "region_id": 2,
      "name": "重庆"
    },
    {
      "id": 5,
      "region_id": 2,
      "name": "河北"
    },
    {
      "id": 6,
      "region_id": 2,
      "name": "山西"
    }
  ],
  "city": [
    {
      "id": 270,
      "province_id": 1,
      "name": "呼和浩特"
    },
    {
      "id": 271,
      "province_id": 2,
      "name": "呼伦贝尔"
    },
    {
      "id": 272,
      "province_id":3,
      "name": "乌兰察布集宁区"
    },
    {
      "id": 273,
      "province_id": 4,
      "name": "通辽"
    },
    {
      "id": 274,
      "province_id": 5,
      "name": "通辽1"
    },
    {
      "id": 275,
      "province_id": 6,
      "name": "通辽2"
    }
  ]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Address options={options} showOptions={['region', 'province']}/>
        <Address options={options} showOptions={['province', 'city']}/>
      </div>
    )
  }
} 