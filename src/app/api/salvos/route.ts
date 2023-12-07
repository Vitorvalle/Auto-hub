import connectDb from '@/utils/dbConfig';
import { NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiResponse } from 'next';


export async function GET(req:any, res: NextApiResponse) {
 /*   const params = req.url.split('?')
    console.log(req)*/

    const salvos = ["6557b981e4c62572c89dd95b","6557b950e4c62572c89dd949"]
    await connectDb();
    const anuncios = await Anuncio.find(
        {_id: {$in: salvos}}); 
    return NextResponse.json({anuncios})
}