import { NextResponse } from "next/server";
import { getLinks } from "@/Constants/links";

export const GET = async (
  request,
  { params: { platform } }
) => {
  const links = getLinks();
  let response = NextResponse.json(links[platform]);
  return response;
};
