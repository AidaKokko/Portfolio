import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'files', 'Aida Kokko-CV.pdf');
    const fileBuffer = readFileSync(filePath);
    return new NextResponse(fileBuffer);
  } catch (error) {
    console.error('Error serving CV:', error);
    return new NextResponse('Error serving CV', { status: 500 });
  }
} 