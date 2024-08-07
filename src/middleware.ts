import { auth } from '@shared/services/auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const middleware = auth(function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/monitoring')) {
    const orgId = request.nextUrl.searchParams.get('o');
    const projectId = request.nextUrl.searchParams.get('p');

    return NextResponse.rewrite(
      new URL(`https://o${orgId}.ingest.sentry.io/api/${projectId}/envelope/?hsts=0`)
    );
  }
});
