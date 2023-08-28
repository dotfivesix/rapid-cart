import { establishDbConnection } from "@/app/db/conn";
import { Products } from "@/app/models/product.model";
import { NextResponse } from "next/server";

establishDbConnection();

// product/all
export async function GET() {
    try {
        const products = await Products.find();
        return NextResponse.json(products);
    } catch (error) {
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
}