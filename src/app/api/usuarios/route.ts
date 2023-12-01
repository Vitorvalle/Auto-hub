import Anuncio from '@/models/usuarios';
import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { filtrar } from '@/components/searchBox/searchBox';
import Usuario from '@/models/usuarios';

export async function POST(req: Request) {
    const {nome, email, senha} =  await req.json();
    await connectDb();
    await Usuario.create({nome, email, senha})
    return NextResponse.json({message: "Usuario cadastrado"}, {status: 201});
}

export async function GET(){
    await connectDb();
    const usuarios = await Usuario.find();
    return NextResponse.json({usuarios});
}

export async function DELETE(req: Request){
    const id = Request.nextUrl.searchParams.get("id");
    await connectDb();
    await Usuario.findByIdAndDelete(id);
    return NextResponse.json({message: "Usuario deletado"}, {status: 200});
}