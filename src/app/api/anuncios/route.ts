import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';


export async function GET() {
    const db = await connectDb();
    const anuncios = await Anuncio.find({})
    return NextResponse.json({anuncios})
}