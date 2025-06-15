import { createAutomations, getAllAutomations } from "@/action/automations";
import { NextResponse } from "next/server";

export async function GET() {
    try{
       const automations = await getAllAutomations()
       return NextResponse.json({
         status:200,
         data:automations
       })
    }catch(err:any){
       return NextResponse.json({
        status:200,
        error:err.message || "Internal server error"
       })
    }
}

export async function POST() {
   try{
      const automation = await createAutomations()
      return NextResponse.json({
         status:200,
         data:automation
      })
   }catch(err:any){
      return NextResponse.json({
         status:200,
         error:err.message || "Internal server error"
      })
   }
}