import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/db/index';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { name, time, location, description } = formData;

    const event = await prisma.event.create({
      data: {
        name,
        time,
        location,
        description,
        organizerId: 1, // Replace with actual organizer ID logic
      },
    });

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create event' },
      { status: 500 }
    );
  }
}
