'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import { API_BASE } from '@/middleware/API_BASE'

const Test = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': 987654,
    },
  }

  const body = {
    insured_name: 'Sam',
    contact_address: 'no 7 adeola road',
    // amount: '15000',
    email: 'profshubby@gmail.com',
    phonenumber: '09067508765',
    engine_no: '345673245677987',
    chasis_no: '87654321908765',
    year_of_make: '2019',
    registration_number: '56478698',
    engine_capacity: '1.3hl',
    category: 'Car',
    color: 'White',
    make: 'Toyota',
    model: 'Camry',
    type: 'Private',
  }

  const postData = async () => {
    try {
      const response = await axios.post(
        'https://mosquepay.org/insurance_api/v1/api/buy_insurance',
        qs.stringify(body),
        config
      )

      console.log('Response:', response.data)
    } catch (error) {
      console.log('Error posting data:', error)
    }
  }

  //   let data = qs.stringify({
  //     trans_reference: '2024050109014917490552102',
  //     contact_address: 'no 7 adeola road',
  //     email: 'profshubby@gmail.com',
  //     phonenumber: '09067508756',
  //     engine_no: '345673245677987',
  //     chasis_no: '87654321908765',
  //     year_of_make: '2019',
  //     registration_number: '56478698',
  //     engine_capacity: '1.3hl',
  //     category: 'Car',
  //     color: 'White',
  //     make: 'Toyota',
  //     model: 'Camry',
  //     type: 'Private',
  //     insured_name: 'Adebola',
  //   })

  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'https://mosquepay.org/insurance_api/v1/api/buy_insurance',
  //     headers: {
  //       'x-api-key': '987654',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     data: data,
  //   }

  //   const postData = () => {
  //     axios
  //       .request(config)
  //       .then((response) => {
  //         console.log(JSON.stringify(response.data))
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  postData()

  return (
    <div>
      <button>zget</button>
    </div>
  )
}

export default Test
