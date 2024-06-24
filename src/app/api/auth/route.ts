import prisma from "../../../lib/prisma"
// import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { username , email , password } = await req.json()
        const newUser = await prisma.user.create({
            data: {
              username , email , password
            }
          })

        return NextResponse.json({newUser}, { status: 200 })

    } catch(error) {
        return NextResponse.json({ error: 'Something went wrong!' }, { status: 500 })
    }
}


