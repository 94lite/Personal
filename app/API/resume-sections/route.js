import { NextResponse } from "next/server";
import { getResume } from "@/app/Constants/resume";

export const GET = async (request) => {
  const resume = getResume();
  let response = NextResponse.json(
    Object.keys(resume)
  );
  return response;
};
