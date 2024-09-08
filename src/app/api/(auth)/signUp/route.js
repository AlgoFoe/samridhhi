import { NextResponse } from 'next/server'
import { Users } from '@/models/user'
import { ConnectDB } from '@/lib/db';

const bcrypt = require("bcryptjs");
const { customAlphabet } = require("nanoid")

ConnectDB()

export async function POST(req, res) {
    try {
        const request = await req.json(); 
        const salt = await bcrypt.genSalt(process.env.NEXT_PUBLIC_SALT_KEY);
        const data = {
            "userId": Number(customAlphabet("0123456789",8)),
            "name": request.name,
            "aadhar": request.aadhar,
            "address": request.address,
            "verified": false,
            "banned": false,
            "reported": 0,
            "orders": [],
            "totalSold": 0,
            "totalBought": 0,
            "cart": [],
            "listedProducts": [],
            "reviews": [],
            "avgRating": -1,
            "profileImageUrl": request.profileImageUrl,
            "mobileNumber": request.mobileNumber,
            "password": await bcrypt.hash(request.password,salt),
        }
        const res = await Users.create(data)
        return NextResponse.json({
            message: "User created",
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error creating user",
        },{
            status:500
        })
    }
}