import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import axios from 'axios'

import { findPetsByStatus } from '@/services/apis/PetstoreService,'

export const Profile = () => {
  const { data, loading, error } = useRequest(() =>
    findPetsByStatus({ status: 'sold' })
  )
  const [val, setVal] = useState<unknown>()
  useEffect(() => {
    const test = async () => {
      const response = await axios('https://api.example.com/user')
      console.log(response)
      setVal(response)
    }
    test()
  }, [])
  console.log(data)
  console.log(loading)
  console.log(error)
  return (
    <div>
      this is Profile
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <div>
          {/*<p>approved: {data?.approved}</p>*/}
          {/*<p>delivered: {data?.delivered}</p>*/}
        </div>
      )}
      <p>{JSON.stringify(val)}</p>
    </div>
  )
}
