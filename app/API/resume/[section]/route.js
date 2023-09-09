import { NextResponse } from "next/server";
import { getResume } from "@/app/Constants/resume";

export const GET = async (
  request,
  { params: { section } }
) => {
  const resume = getResume();
  let response = NextResponse.json(resume[section]);
  return response;
};
