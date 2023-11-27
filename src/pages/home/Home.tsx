import logo from '@/assets/logo.svg'

export const Home = () => {
  return (
    <div>
      <article className="flex min-h-full flex-col items-center justify-center text-center text-gray-950">
        <img
          src={logo}
          className="pointer-events-none h-40 animate-spin-slow"
          alt="logo"
        />
        <p className="mt-4 text-xl">
          Edit <code className="text-blue-500">src/Home.tsx</code> and save to
          reload.
        </p>
        <a
          className="mt-4 font-bold text-blue-500 hover:text-blue-700"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </article>
    </div>
  )
}
