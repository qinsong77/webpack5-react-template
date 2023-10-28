import { createRequest } from '../axios'

/**
 * Add a new pet to the store
 */
export const addPet = createRequest<
  {
    requestBody: Pet
  },
  Pet
>('addPet', ({ requestBody }) => ({
  url: `/api/v3/pet`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}))

/**
 * Create user
 */
export const createUser = createRequest<{
  requestBody?: User
}>('createUser', ({ requestBody }) => ({
  url: `/api/v3/user`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}))

/**
 * Creates list of users with given input array
 */
export const createUsersWithListInput = createRequest<
  {
    requestBody?: User[]
  },
  User
>('createUsersWithListInput', ({ requestBody }) => ({
  url: `/api/v3/user/createWithList`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}))

/**
 * Delete purchase order by ID
 */
export const deleteOrder = createRequest<{
  orderId: number
}>('deleteOrder', ({ orderId }) => ({
  url: `/api/v3/store/order/${orderId}`,
  method: 'DELETE',
}))

/**
 * Deletes a pet
 */
export const deletePet = createRequest<{
  petId: number
}>('deletePet', ({ petId }) => ({
  url: `/api/v3/pet/${petId}`,
  method: 'DELETE',
}))

/**
 * Delete user
 */
export const deleteUser = createRequest<{
  username: string
}>('deleteUser', ({ username }) => ({
  url: `/api/v3/user/${username}`,
  method: 'DELETE',
}))

/**
 * Finds Pets by status
 */
export const findPetsByStatus = createRequest<
  {
    status?: keyof typeof FindPetsByStatusStatus
  },
  Pet[]
>('findPetsByStatus', ({ status }) => ({
  url: `/api/v3/pet/findByStatus`,
  method: 'GET',
  params: {
    status,
  },
}))

/**
 * Finds Pets by tags
 */
export const findPetsByTags = createRequest<
  {
    tags?: string[]
  },
  Pet[]
>('findPetsByTags', ({ tags }) => ({
  url: `/api/v3/pet/findByTags`,
  method: 'GET',
  params: {
    tags,
  },
}))

/**
 * Returns pet inventories by status
 */
export const getInventory = createRequest<undefined, { [key: string]: number }>(
  'getInventory',
  () => ({
    url: `/api/v3/store/inventory`,
    method: 'GET',
  })
)

/**
 * Find purchase order by ID
 */
export const getOrderById = createRequest<
  {
    orderId: number
  },
  Order
>('getOrderById', ({ orderId }) => ({
  url: `/api/v3/store/order/${orderId}`,
  method: 'GET',
}))

/**
 * Find pet by ID
 */
export const getPetById = createRequest<
  {
    petId: number
  },
  Pet
>('getPetById', ({ petId }) => ({ url: `/api/v3/pet/${petId}`, method: 'GET' }))

/**
 * Get user by user name
 */
export const getUserByName = createRequest<
  {
    username: string
  },
  User
>('getUserByName', ({ username }) => ({
  url: `/api/v3/user/${username}`,
  method: 'GET',
}))

/**
 * Logs user into the system
 */
export const loginUser = createRequest<
  {
    password?: string
    username?: string
  },
  string
>('loginUser', ({ username, password }) => ({
  url: `/api/v3/user/login`,
  method: 'GET',
  params: {
    username,
    password,
  },
}))

/**
 * Logs out current logged in user session
 */
export const logoutUser = createRequest('logoutUser', () => ({
  url: `/api/v3/user/logout`,
  method: 'GET',
}))

/**
 * Place an order for a pet
 */
export const placeOrder = createRequest<
  {
    requestBody?: Order
  },
  Order
>('placeOrder', ({ requestBody }) => ({
  url: `/api/v3/store/order`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}))

/**
 * Update an existing pet
 */
export const updatePet = createRequest<
  {
    requestBody: Pet
  },
  Pet
>('updatePet', ({ requestBody }) => ({
  url: `/api/v3/pet`,
  method: 'PUT',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}))

/**
 * Updates a pet in the store with form data
 */
export const updatePetWithForm = createRequest<{
  name?: string
  petId: number
  status?: string
}>('updatePetWithForm', ({ petId, name, status }) => ({
  url: `/api/v3/pet/${petId}`,
  method: 'POST',
  params: {
    name,
    status,
  },
}))

/**
 * Update user
 */
export const updateUser = createRequest<{
  requestBody?: User
  username: string
}>('updateUser', ({ username, requestBody }) => ({
  url: `/api/v3/user/${username}`,
  method: 'PUT',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}))

/**
 * uploads an image
 */
export const uploadFile = createRequest<
  {
    additionalMetadata?: string
    petId: number
    requestBody?: Blob
  },
  ApiResponse
>('uploadFile', ({ petId, additionalMetadata, requestBody }) => ({
  url: `/api/v3/pet/${petId}/uploadImage`,
  method: 'POST',
  data: requestBody,
  params: {
    additionalMetadata,
  },
  headers: { 'Content-Type': 'application/octet-stream' },
}))

export interface Address {
  city?: string
  state?: string
  street?: string
  zip?: string
}

export interface ApiResponse {
  code?: number
  message?: string
  type?: string
}

export interface Category {
  id?: number
  name?: string
}

export interface Customer {
  address?: Address[]
  id?: number
  username?: string
}

export enum FindPetsByStatusStatus {
  'available' = 'available',
  'pending' = 'pending',
  'sold' = 'sold',
}

export interface Order {
  complete?: boolean
  id?: number
  petId?: number
  quantity?: number
  shipDate?: string
  status?: keyof typeof OrderStatus
}

export enum OrderStatus {
  'placed' = 'placed',
  'approved' = 'approved',
  'delivered' = 'delivered',
}

export interface Pet {
  category?: Category
  id?: number
  name: string
  photoUrls: string[]
  status?: keyof typeof PetStatus
  tags?: Tag[]
}

export enum PetStatus {
  'available' = 'available',
  'pending' = 'pending',
  'sold' = 'sold',
}

export interface Tag {
  id?: number
  name?: string
}

export interface User {
  email?: string
  firstName?: string
  id?: number
  lastName?: string
  password?: string
  phone?: string
  userStatus?: number
  username?: string
}
