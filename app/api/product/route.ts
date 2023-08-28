import { establishDbConnection } from "@/app/db/conn";
import { Categories } from "@/app/models/category.model";
import { Products } from "@/app/models/product.model";
import { Generate } from "@/app/utils/generate";
import { NextResponse } from "next/server";

establishDbConnection();

// product?id=<id>
export async function GET(request: Request) {
    try {
        const id = new URL(request.url).searchParams.get('id');
        const product = await Products.findOne({ id });
        if (!product) return new Response('NOT_FOUND', { status: 404 });
        return NextResponse.json(product);
    } catch (error) {
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
}

// product { title, description, sellerId, categoryId, price, stocks, faqs }
export async function POST(request: Request) {
    const body = await request.json();
    const newCategory = new Products({
        id: Generate.key(),
    });
    try {
        await newCategory.save();
        return new Response('OK',{ status: 200 });
    } catch(error) {
        if (error.kind === 'regexp')
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const id = new URL(request.url).searchParams.get('id');
        await Categories.findOneAndDelete({ id });
        return new Response('DELETED', { status: 200 });
    } catch (error) {
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
}