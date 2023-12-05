import connectDb from '@/utils/dbConfig';
import { NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiResponse } from 'next';

const sId = ["6557b950e4c62572c89dd949","6557b981e4c62572c89dd95b"];

export async function GET(req:any, res: NextApiResponse) {
    await connectDb();
    const anuncios = await Anuncio.find(
        {_id: {$in: sId}}); 
    return NextResponse.json({anuncios})
}