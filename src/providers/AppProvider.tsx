// import { FC, PropsWithChildren, Suspense } from 'react'
// import { router } from '@/routes'
// import { RouterProvider } from 'react-router-dom'
//
// const ErrorFallback = () => {
//   return (
//     <div
//       className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
//       role="alert"
//     >
//       <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
//       <button
//         className="mt-4"
//         onClick={() => window.location.assign(window.location.origin)}
//       >
//         Refresh
//       </button>
//     </div>
//   )
// }
//
// export const AppProvider: FC = () => {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex items-center justify-center w-screen h-screen">
//           {/*<Spinner size="xl" />*/}
//         </div>
//       }
//     >
//       <RouterProvider router={router} />
//     </Suspense>
//   )
// }

export {}
