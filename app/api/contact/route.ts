import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds allowed length' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('[CONTACT] RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact me directly at maryam.faizanmianoor@gmail.com' },
        { status: 503 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const escapedName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const escapedMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;')

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'maryam.faizanmianoor@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${escapedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #CF0F47 0%, #B03052 100%); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0;">New Portfolio Contact</h2>
          </div>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${escapedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #CF0F47; border-radius: 4px; margin-top: 10px;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapedMessage}</p>
            </div>
          </div>
          <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; font-size: 12px; color: #666;">
            <p>Sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Message received! I will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT ERROR]', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}
