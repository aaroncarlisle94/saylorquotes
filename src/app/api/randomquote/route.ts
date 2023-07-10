import { NextResponse } from "next/server";
import getRandomQuote from "@/lib/getRandomQuote";

export async function GET(request: Request) {
  const quotes = await getRandomQuote();
  return NextResponse.json(quotes);
}
