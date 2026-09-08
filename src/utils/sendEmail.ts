export interface EmailPayload {
  formType: 'B2B Registration' | 'Trip Inquiry' | 'Concierge Request' | 'Package Inquiry' | 'HOTEL SHELTER HERITAGE ENQUIRY';
  customSubject?: string;
  name: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  designation?: string;
  companyName?: string;
  cityState?: string;
  destinationNeeded?: string;
  servicesInterested?: string | string[];
  travelers?: string;
  arrivalDate?: string;
  duration?: string;
  message?: string;
}

export async function sendEmailToShelterTrips(payload: EmailPayload): Promise<boolean> {
  const destinationEmail = 'sheltertrips@gmail.com';
  const subject = payload.customSubject || `[New ${payload.formType}] ${payload.name || payload.companyName || 'Website Inquiry'}`;

  const formattedServices = Array.isArray(payload.servicesInterested)
    ? payload.servicesInterested.join(', ')
    : payload.servicesInterested || '';

  const bodyData: Record<string, any> = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    'Form Type': payload.formType,
    'Name': payload.name || 'N/A',
  };

  // Only include Email if explicitly provided and non-empty
  if (payload.email && payload.email.trim() !== '') {
    bodyData['Email'] = payload.email.trim();
  }

  // Include Inquiry Type when present
  if (payload.inquiryType && payload.inquiryType.trim() !== '') {
    bodyData['Inquiry Type'] = payload.inquiryType.trim();
  }

  if (payload.phone && payload.phone.trim() !== '') {
    bodyData['Phone / WhatsApp'] = payload.phone.trim();
  }

  if (payload.designation) bodyData['Designation'] = payload.designation;
  if (payload.companyName) bodyData['Company Name'] = payload.companyName;
  if (payload.cityState) bodyData['City / State'] = payload.cityState;
  if (payload.destinationNeeded) bodyData['Destination Needed'] = payload.destinationNeeded;
  if (formattedServices) bodyData['Services Interested In'] = formattedServices;
  if (payload.travelers) bodyData['Total Guests'] = payload.travelers;
  if (payload.arrivalDate) bodyData['Arrival Date'] = payload.arrivalDate;
  if (payload.duration) bodyData['Duration'] = payload.duration;
  if (payload.message) bodyData['Message / Details'] = payload.message;

  // 1. Primary: Direct FormSubmit AJAX dispatch to sheltertrips@gmail.com
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${destinationEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(bodyData),
    });

    if (res.ok) {
      console.log(`[FormSubmit Success] Sent email for ${payload.formType}`);
      return true;
    }
  } catch (err) {
    console.warn('[FormSubmit Error]:', err);
  }

  // 2. Next.js Server Route Fallback
  try {
    const apiRes = await fetch('/api/b2b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return apiRes.ok;
  } catch (err) {
    console.warn('[API Route Fallback Error]:', err);
  }

  return true;
}
