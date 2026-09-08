import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, travelers, arrivalDate, duration, message, email, inquiryType, customSubject } = data;

    const targetEmail = process.env.CONTACT_DESTINATION_EMAIL || 'sheltertrips@gmail.com';
    const emailSubject = customSubject || 'Booking Form Inquiry';

    const bodyObj: Record<string, any> = {
      _subject: emailSubject,
      _template: 'table',
      _captcha: 'false',
      'Name': name || 'N/A',
      'Phone / WhatsApp': phone || 'N/A',
    };

    if (email && email.trim() !== '') {
      bodyObj['Email'] = email.trim();
    }

    if (inquiryType && inquiryType.trim() !== '') {
      bodyObj['Inquiry Type'] = inquiryType.trim();
    }

    bodyObj['Total Guests'] = travelers || 'N/A';
    bodyObj['Arrival Date'] = arrivalDate || 'N/A';
    bodyObj['Duration'] = duration || 'N/A';
    bodyObj['Message'] = message || 'N/A';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      });

      if (response.ok) {
        console.log(`[Contact Enquiry] Email dispatched successfully to ${targetEmail}`);
        return NextResponse.json({ success: true, message: 'Enquiry email sent successfully.' });
      }
    } catch (err) {
      console.warn('[Contact Enquiry] Dispatch fallback trigger:', err);
    }

    return NextResponse.json({ success: true, message: 'Enquiry received.' });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enquiry.' },
      { status: 500 }
    );
  }
}
