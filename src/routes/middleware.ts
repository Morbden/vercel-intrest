import type { IntRequest, IntResponse, MiddlewareNext } from '@vulppi/intrest'

export async function middleware(
  {}: IntRequest,
  next: MiddlewareNext,
): Promise<IntResponse> {
  const res = await next()
  res.headers = {
    'Cache-Control': 's-max-age=1, stale-while-revalidate',
    ...res.headers,
  }
  return next()
}
