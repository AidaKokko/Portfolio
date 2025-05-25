import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request: Request) {
  try {
    const filePath = join(process.cwd(), 'public', 'files', 'Aida Kokko-CV.pdf');
    const fileBuffer = readFileSync(filePath);

    // Check if the request is from a mobile device
    const userAgent = request.headers.get('user-agent') || '';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    // Set different headers based on device type
    const headers = {
      'Content-Type': 'application/pdf',
      'Content-Disposition': isMobile 
        ? 'attachment; filename="Aida Kokko-CV.pdf"'
        : 'inline; filename="Aida Kokko-CV.pdf"',
      'Cache-Control': 'no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    };

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error('Error serving CV:', error);
    return new NextResponse('Error serving CV', { status: 500 });
  }
} 