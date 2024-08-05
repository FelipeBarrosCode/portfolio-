
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";




export async function GET(request:NextRequest){

    const content = await axios.get("https://api.github.com/users/FelipeBarrosCode/repos")

    let arrWithContents: Array<object> = []
    content.data.map((value: {
        description: string; name: string;  html_url:string, homepage:string| null
},_index: any,)=>{

        console.log(_index)

        
        if(value.name.charAt(value.name.length-1) == "-"){
            arrWithContents.push({name:value.name,
                description:value.description,
                url:value.html_url,
                homepage:value.homepage
            })
        }




    })

    return NextResponse.json(arrWithContents)

    


}