import { useEffect, useState } from 'react'
import axios from 'axios'

import { PaymentMethod } from '../models/PaymentMethod'
import { RemotePaymentMethod } from '../types'

const payInCash = new PaymentMethod({ name: 'cash' })

const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return []
  }

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  )
  extended.push(payInCash)

  return extended
}

const fetchPaymentMethods = async () => {
  const methods: RemotePaymentMethod[] = (
    await axios.get(
      'https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods?countryCode=AU'
    )
  )?.data

  console.log(methods)
  return convertPaymentMethods(methods)
}

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])

  useEffect(() => {
    fetchPaymentMethods().then((methods) => setPaymentMethods(methods))
  }, [])

  return {
    paymentMethods,
  }
}
