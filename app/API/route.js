import { NextResponse } from 'next/server'

export const GET = async (request) => {
  let response = NextResponse.json({
    data: "hello world"
  });
  return response;
};