import { establishDbConnection } from "@/app/db/conn";
import { Category } from "@/app/models/category.model";
import { Generate } from "@/app/utils/generate";
import { NextResponse } from "next/server";

establishDbConnection();

export async function GET() {
    try {
        const categories = await Category.find();
        return NextResponse.json(categories);
    } catch (error) {
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
    
}

export async function POST(request: Request) {
    const { name, label } = await request.json();
    const newCategory = new Category({
        id: Generate.key(),
        name, label
    });
    try {
        await newCategory.save();
        return new Response('OK',{ status: 200 });
    } catch(error) {
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const id = new URL(request.url).searchParams.get('id');
        await Category.findOneAndDelete({ id });
        return new Response('DELETED', { status: 200 });
    } catch (error) {
        console.error(error)
        return new NextResponse(error as string, { status: 500 })
    }
}