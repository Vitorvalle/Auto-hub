import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiRequest, NextApiResponse } from 'next';



export async function GET(req:any, res: NextApiResponse) {
    const params = JSON.parse(Buffer.from(req.url.split("?")[1],'base64').toString('utf-8'))
    await connectDb();
    const anuncios = await Anuncio.find({veiculo: {$regex: params.marca, $options: 'i'}});
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