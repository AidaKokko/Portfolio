import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'aida-favicon.ico');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('Favicon file not found at:', filePath);
      return new NextResponse('Favicon not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse('Error serving favicon', { status: 500 });
  }
} 