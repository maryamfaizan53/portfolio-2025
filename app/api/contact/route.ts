import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it and return a success response.
    console.log('New contact form submission:', { name, email, message })

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' })
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 })
  }
}