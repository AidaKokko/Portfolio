import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const filePath = path.join(publicDir, 'aida-favicon.ico');
    
    console.log('Current working directory:', process.cwd());
    console.log('Public directory path:', publicDir);
    console.log('Favicon file path:', filePath);
    
    // Check if public directory exists
    if (!fs.existsSync(publicDir)) {
      console.error('Public directory not found at:', publicDir);
      return new NextResponse('Public directory not found', { status: 404 });
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('Favicon file not found at:', filePath);
      return new NextResponse('Favicon not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    console.log('Successfully read favicon file, size:', fileBuffer.length);

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