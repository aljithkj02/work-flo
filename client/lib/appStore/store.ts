import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '@/lib/appStore/slices/global.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        global: globalReducer
    },
  })
}

export type AppStoreType = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStoreType['getState']>
export type AppDispatch = AppStoreType['dispatch']