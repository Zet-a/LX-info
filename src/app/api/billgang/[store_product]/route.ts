import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: { store_product:string}}) {
    return NextResponse.json({
        a: "real"
    })
}