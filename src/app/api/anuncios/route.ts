import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiRequest, NextApiResponse } from 'next';


export async function GET(req:NextApiRequest, res: NextApiResponse) {
    await connectDb();
    const {query} = req;
    console.log(req)
    const anuncios = await Anuncio.find();
    return NextResponse.json({anuncios})
}