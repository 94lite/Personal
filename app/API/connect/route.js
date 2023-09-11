import { NextResponse } from "next/server";
import { getLinks } from "@/Constants/links";

export const GET = async (request) => {
  const links = getLinks();
  let response = NextResponse.json(links);
  return response;
};
