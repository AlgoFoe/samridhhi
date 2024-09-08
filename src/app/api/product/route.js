// import { Products } from "../../../models/product"
// import { Users } from "../../../models/user"

// export async function POST(req, res) {
//     try {
//         const request = await req.json()
//         const data = {
//             "productId": "",
//             "name": request.name,
//             "seller": request.seller,
//             "imgUrl": request.imgUrl,
//             "price": request.price,
//             "description": request.description,
//             "category": request.category,
//             "sold": request.sold
//         }
//         const product = await Products.create(data)
//         const user = await Users.findOneAndUpdate(
//             { userId: request.userId },
//             { $push: { listedProducts: data } }
//         )
//         return NextResponse.json({
//             message: "Products Added Successfully",
//         }, {
//             status: 200
//         })
//     } catch (error) {
//         return NextResponse.json({
//             message: "Error Adding Product",
//         }, {
//             status: 500
//         })
//     }
// }


// export async function GET(req, res) {
//     try {
//         const res = await Products.find({})
//         return NextResponse.json({
//             message: "Products Found Successfully",
//             products: res
//         }, {
//             status: 200
//         })
//     } catch (error) {
//         return NextResponse.json({
//             message: "Error Finding Products",
//         }, {
//             status: 500
//         })
//     }
// }