import { Suspense } from 'react'
import { Await, defer, useAsyncValue, useLoaderData } from 'react-router-dom'

import { Spinner } from '@/components/spinner'
import { getPackageLocation, Pos } from '@/service/apis/customer'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export async function loader({ params }) {
  const packageLocationPromise = getPackageLocation(params.packageId)

  return defer({
    res: packageLocationPromise,
  })
}
export function PackageLoaderDeferRoute() {
  const data = useLoaderData() as { res: Pos }

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
        <Await
          resolve={data?.res}
          errorElement={<p>Error loading package location!</p>}
        >
          <PackageLocation />
        </Await>
      </Suspense>
    </main>
  )
}

function PackageLocation() {
  const packageLocation = useAsyncValue() as Pos
  return (
    <p>
      Your package is at {packageLocation.latitude} lat and{' '}
      {packageLocation.longitude} long.
    </p>
  )
}
