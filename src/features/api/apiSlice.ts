import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

/**
 * Serve as an single source of truth for state to
 * on server for data reliability
 * 
 * @returns {CreateApi}
 * @readonly
 */
export const apiSlice = createApi({
  /**
   * Slice namespace which we'll refer to in our codebase
   * 
   * @param {string}
   */
  reducerPath: "api",
  /**
   * Starting point of further API calls
   * 
   * @param {BaseQueryFn}
   */
  baseQuery: fetchBaseQuery({
    /**
     * Base API URI
     * 
     * @param {string}
     */
    baseUrl: "https://reqres.in/api"
  }),
  /**
   * Contain Endpoints of API to call
   * 
   * @param {EndpointBuilder}
   */
  endpoints: builder => ({
    /**
     * Definite Query kind of request to fetch all users
     * 
     * @param {query}
     */
    getUsers: builder.query<any, void>({
      /**
       * Query path added to root baseQuery URL
       * 
       * @param {Function}
       * @returns {string}
      */
      query: () => "/users",
      /**
       * Transform incoming response to fit our typing need
       * 
       * @param {transformResponse}
       * @argument {BaseQueryResult} 
      */
      transformResponse: (rawResult: { data: any }, meta) => {
        return rawResult.data
      }
    })
  })
})

/**
 * Thanks to RTKQ here are our auto-generated hooks
 * for different states of API slice invocaction
 * 
 * @returns {UseQuery}
 */
export const {
  useGetUsersQuery
} = apiSlice
