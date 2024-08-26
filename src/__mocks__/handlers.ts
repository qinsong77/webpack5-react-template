import { delay, graphql, http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings',
          },
          {
            title: 'The Matrix',
          },
          {
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  }),
  http.get('/movie/list', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            id: '6c6dba95-e027-4fe2-acab-e8c155a7f0ff',
            title: 'The Lord of The Rings',
          },
          {
            id: 'a2ae7712-75a7-47bb-82a9-8ed668e00fe3',
            title: 'The Matrix',
          },
          {
            id: '916fa462-3903-4656-9e76-3f182b37c56f',
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  }),

  http.get('/api/customer/getPackageLocation', async ({ params }) => {
    await delay(3 * 1000)
    return HttpResponse.json({
      id: params.id,
      latitude: Math.ceil(Math.random() * 100 + Math.random() * 80),
      longitude: Math.ceil(Math.random() * 100 + Math.random() * 80),
    })
  }),

  // mine
  http.get('/api/v3/pet/findByStatus', async ({ params }) => {
    const { status } = params
    console.log('/api/v3/pet/findByStatus:' + status)
    await delay(2000)
    return HttpResponse.json([
      {
        id: 10,
        name: 'doggie',
        category: {
          id: 1,
          name: 'Dogs',
        },
        photoUrls: ['string'],
        tags: [
          {
            id: 0,
            name: 'string',
          },
        ],
        status: 'available',
      },
    ])
  }),
  http.options(
    'https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods',
    () => {
      return new Response(null, {
        status: 200,
        headers: {
          Allow: 'GET,HEAD,POST',
        },
      })
    }
  ),
  http.get(
    'https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods',
    async () => {
      await delay()
      return HttpResponse.json([
        {
          name: 'apple',
          countryCode: 'AU',
          id: '1',
        },
        {
          name: 'google',
          countryCode: 'AU',
          id: '2',
        },
      ])
    }
  ),
]
