import React, { Component } from 'react'
import { Cascader } from 'igroot'


export default class Adrress extends Component {
  static displayName = 'Adrress'

  constructor(props) {
    super(props)
    const { showOptions, value } = props
    this.showOptions = showOptions || ['region', 'province', 'city']

    this.state = { value }
  }



  createOptions = () => {
    const { options } = this.props 
    const { region, province, city } = options 
    const regionMapProvince = []
    const provinceMapcity = []

    city.map(item => {
      provinceMapcity[item.province_id] || (provinceMapcity[item.province_id] = [])
      provinceMapcity[item.province_id].push(item)
    })

    province.map(item => {
      regionMapProvince[item.region_id] || (regionMapProvince[item.region_id] = [])
      regionMapProvince[item.region_id].push(item) 
    })

    const getProvinceChildren = (id) => {
      return provinceMapcity[id].map(({ id, name }) => ({
        value: id,
        label: name
      }))
    }

    const getRegionChildren = (id) => {
      return regionMapProvince[id].map(({ id, name }) => {
        if (this.showOptions.includes('city')) {
          return {
            value: id,
            label: name,
            children: getProvinceChildren(id)
          }
        } else {
          return {
            value: id,
            label: name
          }
        }
        
      })
    }

    return region.map(({ id, name }) => {
      const children = getRegionChildren(id)

      if (this.showOptions.includes('province')) {
        return {
          value: id,
          label: name,
          children
        }
      } else {
        return {
          value: id,
          label: name
        }
      }
      
    })
  }

  handleChange = (value) => {
    const { onChange } = this.props 

    this.setState({
      value
    })
    onChange && onChange(value)
  }

  render() {
    const { style } = this.props 
    const { value } = this.state 
    const options = this.createOptions()

    return (
      <Cascader 
        value={value || []} 
        style={style}
        options={options} 
        onChange={this.handleChange} 
        placeholder="选择地址"
      />
    )
  }
}

