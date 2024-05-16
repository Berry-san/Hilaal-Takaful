'use client'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { API_BASE } from '@/middleware/API_BASE'
import axios from 'axios'
import { useFormik } from 'formik'
import qs from 'qs'
import BackButton from '@/components/back-button'
import InputField from '@/components/InputField'
import * as Yup from 'yup'

const ConfirmDetails = ({ params }) => {
  const { policy } = useSelector((state) => state.policy)
  const { id } = params

  const confirmPolicy = policy?.find((user) => id === user.id)

  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  // const [isChecked, setIsChecked] = useState(false)
  const [vehicleCategory, setVehicleCategory] = useState([])
  const [vehicleMake, setVehicleMake] = useState([])
  const [vehicleModel, setVehicleModel] = useState([])
  const [vehicleType, setVehicleType] = useState([])
  const [vehicleColor, setVehicleColor] = useState([])

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-api-key': 987654,
        },
      }
      setIsFetching(true)

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
      setIsFetching(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setIsFetching(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const validationSchema = Yup.object().shape({
    isChecked: Yup.boolean().oneOf(
      [true],
      'You must verify that these details belong to you.'
    ),
  })

  const {
    insured_name,
    contact_address,
    amount,
    email,
    phonenumber,
    engine_no,
    chasis_no,
    year_of_make,
    registration_number,
    engine_capacity,
    vehicle_category_id,
    vehicle_type_id,
    vehicle_make_id,
    vehicle_model_id,
    vehicle_color_id,
    user_type_id,
  } = confirmPolicy

  const uploadValues = useFormik({
    initialValues: {
      insured_name,
      contact_address,
      amount,
      email,
      phonenumber,
      engine_no,
      chasis_no,
      year_of_make,
      registration_number,
      engine_capacity,
      vehicle_category_id,
      vehicle_type_id,
      vehicle_make_id,
      vehicle_model_id,
      vehicle_color_id,
      user_type_id,
      isChecked: false,
    },
    validationSchema: validationSchema,
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
          qs.stringify(uploadValues.values),
          config
        )
        if (response.data.status_code === '0') {
          if (response.data.link) {
            localStorage.setItem(
              'apiResponse',
              JSON.stringify(response.data.result[0])
            )
            window.location.href = response.data.link
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
          <h3 className="flex text-2xl font-bold text-left">Confirm Details</h3>
        </div>
        <form onSubmit={uploadValues.handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 gap-3 text-left md:grid-cols-2 lg:grid-cols-3">
            <InputField
              type="text"
              label="Insurer Name"
              id="insured_name"
              value={uploadValues.values.insured_name}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.insured_name}
              errors={uploadValues.errors.insured_name}
            />
            <InputField
              type="text"
              label="Contact Address"
              id="contact_address"
              value={uploadValues.values.contact_address}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.contact_address}
              errors={uploadValues.errors.contact_address}
            />
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Category
              </label>
              <select
                value={uploadValues.values.vehicle_category_id}
                name="vehicle_category_id"
                onChange={uploadValues.handleChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleCategory.map((option) => (
                  <option
                    key={option.vehicle_category_id}
                    value={option.vehicle_category_id}
                  >
                    {option.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Model
              </label>
              <select
                value={uploadValues.values.vehicle_model_id}
                name="vehicle_model_id"
                onChange={uploadValues.handleChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleModel.map((option) => (
                  <option
                    key={option.vehicle_model_id}
                    value={option.vehicle_model_id}
                  >
                    {option.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Make
              </label>
              <select
                value={uploadValues.values.vehicle_make_id}
                name="vehicle_make_id"
                onChange={uploadValues.handleChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleMake.map((option) => (
                  <option
                    key={option.vehicle_make_id}
                    value={option.vehicle_make_id}
                  >
                    {option.make}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm font-medium">
                Vehicle Color
              </label>
              <select
                value={uploadValues.values.vehicle_color_id}
                name="vehicle_color_id"
                onChange={uploadValues.handleChange}
                className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
              >
                <option>--</option>
                {vehicleColor.map((option) => (
                  <option
                    key={option.vehicle_color_id}
                    value={option.vehicle_color_id}
                  >
                    {option.color}
                  </option>
                ))}
              </select>
            </div>
            <InputField
              type="number"
              label="Engine Number"
              id="engine_no"
              value={uploadValues.values.engine_no}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.engine_no}
              errors={uploadValues.errors.engine_no}
            />
            <InputField
              type="number"
              label="Chasis Number"
              id="chasis_no"
              value={uploadValues.values.chasis_no}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.chasis_no}
              errors={uploadValues.errors.chasis_no}
            />
            <InputField
              type="number"
              label="Registration Number"
              id="registration_number"
              value={uploadValues.values.registration_number}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.registration_number}
              errors={uploadValues.errors.registration_number}
            />
            <InputField
              type="text"
              label="Engine capacity"
              id="engine_capacity"
              value={uploadValues.values.engine_capacity}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.engine_capacity}
              errors={uploadValues.errors.engine_capacity}
            />
            <InputField
              type="text"
              label="Year of Make"
              id="year_of_make"
              value={uploadValues.values.year_of_make}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.year_of_make}
              errors={uploadValues.errors.year_of_make}
            />
            <InputField
              type="number"
              label="Vehicle Amount"
              id="amount"
              value={uploadValues.values.amount}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.amount}
              errors={uploadValues.errors.amount}
            />
            {/* <InputField type="text" label="Company name" /> */}
            <InputField
              type="number"
              label="Phone number"
              id="phonenumber"
              value={uploadValues.values.phonenumber}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.phonenumber}
              errors={uploadValues.errors.phonenumber}
            />
            <InputField
              type="email"
              label="Email address"
              id="email"
              value={uploadValues.values.email}
              onChange={uploadValues.handleChange}
              onBlur={uploadValues.handleBlur}
              touched={uploadValues.touched.email}
              errors={uploadValues.errors.email}
            />
          </div>
          <div>
            <label className="flex items-center mt-3">
              <input
                type="checkbox"
                id="isChecked"
                checked={uploadValues.values.isChecked}
                onChange={uploadValues.handleChange}
                onBlur={uploadValues.handleBlur}
                error={
                  uploadValues.touched.isChecked &&
                  uploadValues.errors.isChecked
                }
              />
              <span className="ml-2">
                I verify that these details belong to me.
              </span>
            </label>
            {uploadValues.touched.isChecked && uploadValues.errors.isChecked ? (
              <p className="mt-1 text-xs font-medium text-red-500">
                {uploadValues.errors.isChecked}
              </p>
            ) : null}
          </div>
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="flex items-center justify-center w-40 px-4 py-3 mt-5 text-sm font-medium text-center text-white rounded bg-dark"
              disabled={isLoading}
            >
              {isLoading ? <p>Loading...</p> : 'Make payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConfirmDetails
