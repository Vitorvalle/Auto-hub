import connectDb from '@/utils/dbConfig';
import { NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';
import { NextApiResponse } from 'next';



export async function GET(req:any, res: NextApiResponse) {
    const params = JSON.parse(Buffer.from(req.url.split("?")[1],'base64').toString('utf-8'))
    await connectDb();
    const anuncios = await Anuncio.find(
        {veiculo: {$regex: params.marca + " " + params.modelo, $options: 'i'},
        ano: {$gte: params.anoMin, $lte: params.anoMax},
        price: {$gte: params.precoMin, $lte: params.precoMax},
        km: {$gte: params.kmMin, $lte: params.kmMax}});
    return NextResponse.json({anuncios})
}