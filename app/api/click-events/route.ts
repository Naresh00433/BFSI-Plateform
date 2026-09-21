import { NextRequest } from "next/server";

import { ClickEntityType } from "@prisma/client";

import { ApiResponse } from "@/lib/api-response";

import { ClickEventService } from "@/features/click-events/services/click-event.service";

import { createClickEventSchema } from "@/features/click-events/validations/click-event.schema";

const clickEventService = new ClickEventService();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = createClickEventSchema.parse(body);

    /*
     * Get request information.
     *
     * These are optional because different
     * hosting/proxy environments expose them differently.
     */

    const forwardedFor = request.headers.get("x-forwarded-for");

    const ipAddress =
      data.ipAddress ||
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const userAgent =
      data.userAgent ||
      request.headers.get("user-agent") ||
      undefined;

    const clickEvent = await clickEventService.create({
      ...data,
      ipAddress,
      userAgent,
    });

    return ApiResponse.success(
      clickEvent,
      "Click event recorded successfully."
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong.";

    return ApiResponse.error(message);
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page") || 1);

    const limit = Number(searchParams.get("limit") || 20);

    const entityType =
      searchParams.get("entityType") || undefined;

    const entityId =
      searchParams.get("entityId") || undefined;

    const userId =
      searchParams.get("userId") || undefined;

    const sortOrder =
      (searchParams.get("sortOrder") as "asc" | "desc" | undefined) ||
      "desc";

    const result = await clickEventService.findAll({
      page,
      limit,

      entityType: entityType as
        | ClickEntityType
        | undefined,

      entityId,

      userId,

      sortOrder,
    });

    return ApiResponse.success(result);
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong.";

    return ApiResponse.error(message);
  }
}