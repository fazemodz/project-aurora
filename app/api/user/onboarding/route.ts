import { NextResponse } from "next/server";
import prisma from "@app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
// this route handles the update of the username
// if the user decided to change it during the onboarding process
export async function POST(req: Request){
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const {newUsername} = body;
    const oldUsername = currentUser?.name;
    // error handling cuz i care now i guess
    if(!currentUser) return NextResponse.redirect("/login");
    if(oldUsername && newUsername == null) return NextResponse.error();
    if(oldUsername || newUsername == null) return NextResponse.error();
    if(newUsername == oldUsername) return null;
    // update the username
    await prisma.user.update({
        where: {
            name: currentUser.name
        },
        data: {
            name: newUsername
        }
    });
}