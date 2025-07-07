import type { UserModule } from '~/types'
import ElementPlus from 'element-plus'

export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return
  app.use(ElementPlus, { size: 'small', zIndex: 3000 })
}
