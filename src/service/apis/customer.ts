import { createRequest } from '../axios'

export type Pos = {
  latitude: number
  longitude: number
}

export const getPackageLocation = createRequest<{ id: string }, Pos>(
  'getPackageLocation',
  ({ id }) => ({
    method: 'get',
    url: '/api/customer/getPackageLocation',
    params: {
      id,
    },
  })
)
