import { Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'

import { Spinner } from '@/components/spinner'
import { getPackageLocation, Pos } from '@/service/apis/customer'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export async function loader({ params }) {
  return getPackageLocation(params.packageId)
}
export function PackageLoaderRoute() {
  const packageLocation = useLoaderData() as Pos

  return (
    <main>
      <h1>Lets locate your package</h1>
      <Suspense
        fallback={
          <>
            <Spinner />
            <p>Loading package location...</p>
          </>
        }
      >
        <p>
          Your package is at {packageLocation.latitude} lat and{' '}
          {packageLocation.longitude} long.
        </p>
      </Suspense>
    </main>
  )
}
