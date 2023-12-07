import connectDb from '@/utils/dbConfig';
import { NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiResponse } from 'next';


export async function GET(req:any, res: NextApiResponse) {
    const params = req.url.split('?')
   // console.log(req)
    await connectDb();
    const anuncios = await Anuncio.find(
        {_id: {$in: params}}); 
    return NextResponse.json({anuncios})
}