import { useRequest } from 'ahooks'

import { findPetsByStatus } from '@/services/apis/PetstoreService,'

export const Dashboard = () => {
  const { data } = useRequest(() => findPetsByStatus({ status: 'available' }))
  console.log(data)
  return <div>this is Dashboard</div>
}
