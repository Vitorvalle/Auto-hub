import connectDb from '@/utils/dbConfig';
import {NextResponse } from 'next/server';
import Anuncio from '@/models/anuncio';


export async function GET() {
    console.log("=>>> get")
    // return NextResponse.json({anuncios:[{a:"b"}]})
    const db = await connectDb();
    const anuncios = await Anuncio.find({})
    console.log( {anuncios})
    return NextResponse.json({anuncios})
}