import { Categories } from "@/app/models/category.model";
import { Constants } from "@/app/utils/constants";

export async function POST() {
    const { categories } = Constants;
    const categoriesToSave = categories.map(async ({name, label}) => {
        const categoryToSave = new Categories({ name, label });
        await categoryToSave.save();
    });
    try {
        await Promise.all(categoriesToSave);
        return new Response('ALL_CATEGORIES_SAVED', { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response('FAILED_TO_SAVE_CATEGORIES', { status: 500 });
    }
}

export async function DELETE() {
    try {
        await Categories.deleteMany();
        return new Response('DELETED_ALL_CATEGORIES', { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response('FAILED_TO_DELETE', { status: 500 });
    }
}