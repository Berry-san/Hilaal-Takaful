'use client'

import Button from './Button'
import { useRouter } from 'next/navigation'

const Card = ({ vehiclePlateNumber, vehicleMake, lastPolicy, id }) => {
  const router = useRouter()
  const handleRenewPolicyClick = () => {
    router.push(`/renew-policy/${id}`)
  }
  return (
    <div className="p-5 space-y-3 bg-white border rounded border-slate-200 text-bold">
      <p className="">
        Vehicle Plate Number:{' '}
        <span className="text-slate-400">{vehiclePlateNumber}</span>
      </p>
      <p className="">
        Vehicle Make: <span className="text-slate-400">{vehicleMake}</span>
      </p>
      <p className="">
        Last Policy: <span className="text-slate-400">{lastPolicy}</span>
      </p>

      <div className="flex justify-end">
        <Button
          text="Renew Policy"
          image="/assets/icons/reload.svg"
          onClick={handleRenewPolicyClick}
        />
      </div>
    </div>
  )
}

export default Card
