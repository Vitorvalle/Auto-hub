import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiRequest, NextApiResponse } from 'next';
import { filtrar } from '@/components/searchBox/searchBox';


export async function GET(req:NextApiRequest, res: NextApiResponse) {
    await connectDb();
    console.log(req.query)
    const anuncios = await Anuncio.find();
    return NextResponse.json({anuncios})
}

/*export async function handler(req:NextApiRequest, res: NextApiResponse){
    if (req.method === 'GET'){
    await connectDb();
    console.log(req.query)
    const anuncios = await Anuncio.find();
    return NextResponse.json({anuncios})
    }
}*/