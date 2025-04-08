const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function GET() {
  try {
    const response = await fetch(API_URL);
    console.log('API Response:', response.data);
    return new Response('API Request sent successfully.', { status: 200 });
  } catch (error) {
    console.error('Error:', error.message);
    return new Response('Failed to send API Request.', { status: 500 });
  }
}
