## Usage in theme

Open your theme  example `./src/themes/default/components/core/blocks/Header/Header.vue`

```
<template>
  ...
  </header>
    ...
        <div class="col-md-4 col-xs-2 end-xs">
             <div class="inline-flex right-icons">
                 <feedback-company/>
                 <search-icon class="p15 icon hidden-xs pointer" />
                 <wishlist-icon class="p15 icon hidden-xs pointer" />
                 <compare-icon class="p15 icon hidden-xs pointer" />
                 <microcart-icon class="p15 icon pointer" />
                 <account-icon class="p15 icon hidden-xs pointer" />
             </div>
        </div>
    ...
  </div>
</template>

<script>

import FeedbackCompany from '@interactivated/vsf-feedback-company/components/FeedbackCompany'

export default {
  name: 'Header',
  components: {
    ...
    FeedbackCompany
  }
}
```

## Registration the FeedbackCompany module

Add script import to `./src/modules/index.ts`
```

...
import { GoogleAnalytics } from './google-analytics';
import { FeedbackCompany } from '@interactivated/vsf-feedback-company'

export const registerModules: VueStorefrontModule[] = [
  ...
  GoogleAnalytics,
  FeedbackCompany
]


yarn install -> yarn dev
```

## Feedback Company  API extension
```
Install extension to vue-storefront-api:`

$ cp -fr src/modules/vsf-feedback-company/api/feedback-company ../vue-storefront-api/src/api/extensions/

or

$ cp -fr src/modules/vsf-feedback-company/api/feedback-company ../api/src/api/extensions/

Go to api config ./vue-storefront-api/config/local.json and register the Feedback Company Api extension:

"registeredExtensions": [
    ...
    "feedback-company"
]

yarn install -> yarn dev
```
