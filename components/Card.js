import Button from './Button'

const Card = ({ vehiclePlateNumber, vehicleMake, lastPolicy }) => {
  return (
    <div className="p-5 space-y-3 bg-white border rounded md:w-1/3 border-slate-200 text-bold">
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
        <Button text="Renew Policy" image="/assets/icons/reload.svg" />
      </div>
    </div>
  )
}

export default Card
