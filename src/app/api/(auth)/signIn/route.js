// import { NextResponse } from 'next/server'
// import { Users } from '../../../../models/user'
// import { ConnectDB } from '../../../../lib/db';

// const bcrypt = require("bcryptjs")

// ConnectDB()

// export async function POST(req, res) {
//     try {
//         const request = await req.json();
//         const res = await Users.findOne({
//             $or:[
//                 {mobile: request.data},
//                 {aadhar: request.data}
//             ]
//         })
//         if(!(await bcrypt.compare(res.password,request?.password||"")))throw new Error("Password Mismatch")
//         return NextResponse.json({
//             message: "Password Matched Successfully",
//         },{
//             status:200
//         })
//     } catch (error) {
//         return NextResponse.json({
//             message: "Error finding user",
//         },{
//             status:500
//         })
//     }
// }