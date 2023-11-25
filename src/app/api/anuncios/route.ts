import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';


export async function GET(req:NextRequest, res: NextResponse) {
    console.log(req.body)
    const db = await connectDb();
    const anuncios = await Anuncio.aggregate([
        { $match: { origem: "ML" } },
        { $sample: { size: 500 } },
        {
          $unionWith: {
            coll: "veiculos",
            pipeline: [
              { $match: { origem: "OLX" } },
              { $sample: { size: 500 } }
            ]
          }
        }
      ]);
    return NextResponse.json({anuncios})
}