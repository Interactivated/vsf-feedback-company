import { module } from './store'
import { createModule } from '@vue-storefront/core/lib/module'

const KEY = 'feedback-company'
export const FeedbackCompany = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module }] }
})
