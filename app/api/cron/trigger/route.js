export async function GET() {
  console.log("Running cron task!");

  const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT);
  const data = await response.json();

  console.log("Fetched data:", data);

  return new Response("Cron job executed successfully!", { status: 200 });
}
