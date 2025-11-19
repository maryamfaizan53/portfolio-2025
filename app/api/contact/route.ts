import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #CF0F47 0%, #B03052 100%); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
          <h2 style="color: white; margin: 0;">New Portfolio Contact</h2>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-left: 4px solid #CF0F47; border-radius: 4px; margin-top: 10px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>

        <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; font-size: 12px; color: #666;">
          <p>This message was sent from your portfolio website.</p>
        </div>
      </div>
    `

    console.log('[CONTACT FORM]', { name, email, message, timestamp: new Date() })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received! I will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT ERROR]', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}
