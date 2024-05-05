'use client'

import Router from 'next/router'
import { useState, useEffect } from 'react'
import { API_BASE } from '@/middleware/API_BASE'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import qs from 'qs'
import BackButton from '@/components/back-button'
import CheckBox from '@/components/CheckBox'
import InputField from '@/components/InputField'
import SelectField from '@/components/SelectField'

const BuyPolicy = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [vehicleCategory, setVehicleCategory] = useState([])
  const [vehicleMake, setVehicleMake] = useState([])
  const [vehicleModel, setVehicleModel] = useState([])
  const [vehicleType, setVehicleType] = useState([])
  const [vehicleColor, setVehicleColor] = useState([])
  console.log(isLoading)

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-api-key': 987654,
        },
      }
      setIsLoading(true)

      const responses = await Promise.all([
        axios.get(API_BASE + 'vechile_category', config),
        axios.get(API_BASE + 'vechile_make', config),
        axios.get(API_BASE + 'vechile_model', config),
        axios.get(API_BASE + 'vechile_type', config),
        axios.get(API_BASE + 'vechile_color', config),
      ])

      setVehicleCategory(responses[0].data.result)
      setVehicleMake(responses[1].data.result)
      setVehicleModel(responses[2].data.result)
      setVehicleType(responses[3].data.result)
      setVehicleColor(responses[4].data.result)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData() // <- This might cause the re-render loop
  }, [])

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'x-api-key': 987654,
  //     },
  //   }
  //   axios
  //     .get(API_BASE + 'vechile_category', config)
  //     .then((res) => {
  //       setVehicleCategory(res.data.result)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  const uploadValues = useFormik({
    initialValues: {
      insured_name: '',
      contact_address: '',
      amount: '',
      email: '',
      phonenumber: '',
      engine_no: '',
      chasis_no: '',
      year_of_make: '',
      registration_number: '',
      engine_capacity: '',
      vehicle_category_id: '',
      vehicle_type_id: '',
      vehicle_make_id: '',
      vehicle_model_id: '',
      vehicle_color_id: '',
      user_type_id: 1,
    },
    validationSchema: {},
    onSubmit: async () => {
      setIsLoading(true)

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-api-key': 987654,
        },
      }

      try {
        const response = await axios.post(
          'https://mosquepay.org/insurance_api/v1/api/hilail_third_party_payment',
          qs.stringify(uploadValues),
          config
        )
        if (response.data.status_code === '0') {
          if (response.data.link) {
            window.location.href = response.data.link // Redirect to the received link
          } else {
            console.error('No link found in the response')
          }
        } else {
          console.error('Failed to fetch data')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }

      setIsLoading(false)
    },
  })

  return (
    <div>
      <div className="text-left">
        <div className="flex items-center mb-5 space-x-5">
          <BackButton />
          <h3 className="flex text-2xl font-bold text-left">
            Buy a new policy
          </h3>
        </div>
        <form onSubmit={uploadValues.handleSubmit} autoComplete="off">
          {/* onSubmit={userValue.handleSubmit} autoComplete="off" */}
          <div className="grid gap-3 text-left">
            <InputField type="text" label="Vehicle plate number" />
            <InputField type="text" label="Insurer Name" />
            <InputField type="text" label="Contact Address" />
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Category
              </label>
              <select
                // value={value}
                // name={name}
                // onChange={onChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleCategory.map((option, index) => (
                  <option key={index}>{option.category}</option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Model
              </label>
              <select
                // value={value}
                // name={name}
                // onChange={onChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleModel.map((option, index) => (
                  <option key={index}>{option.model}</option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Make
              </label>
              <select
                // value={value}
                // name={name}
                // onChange={onChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleMake.map((option, index) => (
                  <option key={index}>{option.make}</option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Color
              </label>
              <select
                // value={value}
                // name={name}
                // onChange={onChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleColor.map((option, index) => (
                  <option key={index}>{option.color}</option>
                ))}
              </select>
            </div>
            <InputField type="number" label="Engine Number" />
            <InputField type="number" label="Chasis Number" />
            <InputField type="number" label="Registration Number" />
            <InputField type="text" label="Engine capacity" />
            <InputField type="text" label="Year of Make" />
            <InputField type="number" label="Vehicle Amount" />
            <InputField type="text" label="Company name" />
            <InputField type="number" label="Phone number" />
            <InputField type="email" label="Email address" />
          </div>
          <button
            type="submit"
            className="w-40 px-4 py-3 mt-5 text-sm font-medium text-white rounded bg-dark"
            disabled={isLoading}
          >
            Make payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default BuyPolicy
