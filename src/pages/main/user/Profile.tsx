import { useRequest } from 'ahooks'

import { findPetsByStatus } from '@/services/apis/PetstoreService'

export const Profile = () => {
  const { data, loading, error } = useRequest(() =>
    findPetsByStatus({ status: 'sold' })
  )
  return (
    <div>
      this is Profile
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <div>
          <p>approved: {data?.[0].status}</p>
          <p>approved: {data?.[0].id}</p>
          {/*<p>delivered: {data?.delivered}</p>*/}
        </div>
      )}
    </div>
  )
}
