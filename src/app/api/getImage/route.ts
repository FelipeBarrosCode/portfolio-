
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";




export async function GET(request:NextRequest){

    const content = await axios.get("https://api.github.com/users/FelipeBarrosCode")

    

    return NextResponse.json({profileUrl:content.data.avatar_url})

    


}