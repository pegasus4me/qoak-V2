import {PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const saltRound:number = 20
const prisma  = new PrismaClient();

export async function POST(req : Request) {
    
    if(req.method !== "POST") {
        return NextResponse.json({statut : "only post call allowed"});
    }
    
    try {
        const request = await req.json();
        const {email, password, name, confirmPassword} = request;

       const checkifUserExist = await prisma.user.findUnique({
           where: {
            email
           }
       })
       if(checkifUserExist) return NextResponse.json({statut : "user already exist"});
       if(password !== confirmPassword) return NextResponse.json({statut : "password not match"});
       
       const hashedPassword = await bcrypt.hash(password, saltRound);


        const addUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                hashedPassword: hashedPassword
            }
        });
        return NextResponse.json({statut : "user created succesfully", user : addUser});

    } catch (error) {
        return NextResponse.json({statut : "error", error : error});
    }
}