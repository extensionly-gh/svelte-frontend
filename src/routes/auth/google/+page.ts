import { browser } from "$app/environment"
import { signIn } from "@auth/sveltekit/client"
import type { PageLoad } from "./$types";

export const load: PageLoad = (async (page) => {
  if (browser) {
    if (!page.url.searchParams.get('close')) {
      signIn('google', { callbackUrl: '/auth/google?close=true' })
    } else {
      window.opener.location.reload()
      window.close()
    }
  }
  return page;
})