import reactLogo from '@/assets/logo.svg'
import webpackLogo from '@/assets/webpack-logo.svg'

import PageIllustration from './page-illustration'

const ImageLogo = () => {
  return (
    <div
      className="mb-6 flex justify-center"
      data-aos="fade-up"
    >
      <a
        href="https://vitejs.dev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={webpackLogo}
          className="h-32 p-3 drop-shadow-lg filter transition hover:drop-shadow-2xl"
          alt="Vite logo"
        />
      </a>
      <a
        href="https://react.dev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={reactLogo}
          className="logo-spin h-32 animate-spin p-3 drop-shadow-lg filter transition hover:drop-shadow-2xl"
          alt="React logo"
        />
      </a>
    </div>
  )
}

export default function Hero() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Illustration behind hero content */}
        <PageIllustration />
        {/* Hero content */}
        <div className="relative pb-10 pt-16 md:pb-16 md:pt-20">
          {/* Section header */}
          <ImageLogo />
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="mb-8 text-2xl"
              data-aos="fade-up"
            >
              Landing template for startups
            </h1>
            <p
              className="mb-8 text-lg italic text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a
                  className="btn mb-4 w-full bg-purple-600 text-white hover:bg-purple-700 sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  Start free trial
                </a>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  className="btn w-full bg-gray-700 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
