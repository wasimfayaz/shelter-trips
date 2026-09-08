import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      fullName,
      designation,
      companyName,
      phone,
      email,
      cityState,
      destinationNeeded,
      servicesInterested,
      message,
    } = data;

    const targetEmail = process.env.B2B_DESTINATION_EMAIL || 'sheltertrips@gmail.com';

    const formattedServices = Array.isArray(servicesInterested)
      ? servicesInterested.join(', ')
      : servicesInterested || 'None selected';

    const emailSubject = 'B2B Inquiry';

    // Dispatch payload to target email address via FormSubmit AJAX endpoint
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          'Full Name': fullName,
          'Designation': designation,
          'Company Name': companyName,
          'Phone / WhatsApp': phone,
          'Partner Email': email,
          'City / State': cityState,
          'Destination Needed': destinationNeeded,
          'Services Interested In': formattedServices,
          'Message / Requirements': message,
        }),
      });

      if (response.ok) {
        console.log(`[B2B Registration] Email dispatched successfully to ${targetEmail}`);
        return NextResponse.json({ success: true, message: 'Registration email sent successfully.' });
      }
    } catch (err) {
      console.warn('[B2B Registration] Remote dispatch fallback trigger:', err);
    }

    return NextResponse.json({
      success: true,
      message: 'Registration received successfully.',
    });
  } catch (error) {
    console.error('[B2B Registration API Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process registration.' },
      { status: 500 }
    );
  }
}
