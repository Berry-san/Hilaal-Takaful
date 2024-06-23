import Modal from './modal'
const Terms = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-center capitalize">
          Terms and Conditions
        </h2>
        <p>
          I understand that failure to take reasonable care in answering the
          questions may result in avoidance of my contract of takaful, refusal
          or reduction of my claim(s), change of terms or termination of my
          contract of takaful.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            I have read and understand the contents of the application,
            including all notices therein
          </li>
          <li>
            I agree to participate in this General Takaful scheme based on the
            principle of Tabarru’ (donation) for the purposes of mutual support
            of other participants and with this contribution, I am entitled to
            the Takaful cover expressed in the terms and conditions of this
            Takaful contract.
          </li>
          <li>
            I/We hereby agree that based on the principle of agency with fees
            (Al-Wakalah Bil Ujrah) and other related rulings of Advisory council
            of expert, the Takaful contribution that I/We hereby undertake to
            pay to HILAL Takaful Nigeria be deducted for HILAL Takaful Nigeria
            to pay the agency commission and other management expenses at the
            rate of 50% and the balance thereof be credited into the Participant
            Risk Fund (PRF) for HILAL Takaful Nigeria to manage the various
            schemes of takaful under its General Takaful business including
            investment of the said Fund in the manner deemed fit by HILAL
            Takaful Nigeria and, in consideration thereof.
          </li>
          <li>
            I/We be entitled to share the net profit (Surplus) of the Fund if
            The Operator is to manage the fund, including its investment, in a
            manner deemed fit by the operator and in line with Shariah approved
            guidelines, in accordance with the principle of Al-Mudharabah, in
            consideration thereof, the net Profit (Surplus) shall be
            distributable at 40% to Hilal Takaful and 50% to the Participants
            Risk Fund (PRF) and 10% will be retain as reserved subject to
            Actuary recommendation, Advisory Council of Experts (ACE)
            endorsement and approval of the NAICOM.
          </li>
          <li>
            I/We, to the best of my/our knowledge hereby confirm that the
            statements contained in this proposal form are true and correct and,{' '}
          </li>
          <li>
            I/We, have not concealed, misrepresented or misstated any material
            fact,
          </li>
          <li>
            I/We, agree that the statements and declaration contained in this
            proposal form shall be the contract of Takaful Cover with HILAL
            Takaful Nigeria Limited and are deemed to be incorporated in the
            contract,
          </li>
          <li>
            I further agree that if the surplus or any sum payable is less than
            Five Hundred Nigeria Naira (₦500.00), it will be credited into
            charity fund which will be utilized as ‘Sadaqah Jariah’ on behalf of
            the participants. I agree that HILAL General Takaful share my
            Personal Data within the HILAL Group and selected third parties, as
            HILAL General Takaful deems fit, and I may receive marketing
            communication from HILAL General Takaful or from these other third
            parties about products and services that may be interest to me
          </li>
        </ul>
      </div>
    </Modal>
  )
}

export default Terms
