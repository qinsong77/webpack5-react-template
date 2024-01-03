import { useQuery } from '@tanstack/react-query'

import { findPetsByStatus } from '@/service/apis/PetstoreService'

export const Profile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/v3/pet/findByStatus'],
    queryFn: () => findPetsByStatus({ status: 'sold' }),
  })
  return (
    <div>
      this is Profile
      {isLoading ? (
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
