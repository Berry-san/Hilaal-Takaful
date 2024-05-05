import InputField from '@/components/InputField'
import Button from '@/components/Button'
import Card from '@/components/Card'
import BackButton from '@/components/back-button'

const RenewPolicy = () => {
  return (
    <>
      <section className="border-b border-slate-300">
        <div className="flex items-center mb-5 space-x-5">
          <BackButton />
          <h3 className="flex text-2xl font-bold text-left">
            Renew your policy
          </h3>
        </div>
        <p className="mb-5 font-bold">
          Retrieve your vehicle details with your phone number
        </p>
        <form className="flex flex-col pb-10 space-y-2">
          <label>Phone number</label>
          <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row ">
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md md:w-1/3 focus:outline-none"
              placeholder="Enter details..."
            />
            <Button text="Retrive details" />
          </div>
        </form>
      </section>
      <section className="pt-10">
        <Card
          vehicleMake="Toyota"
          vehiclePlateNumber="REDEEED"
          lastPolicy="2022"
        />
      </section>
    </>
  )
}

export default RenewPolicy
