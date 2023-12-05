import Anuncio from '@/models/usuarios';
import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { filtrar } from '@/components/searchBox/searchBox';
import Usuario from '@/models/usuarios';
import bcrypt, { hash } from "bcrypt";

export async function POST(req: any, res: any) {
    const {nome, email, senha} =  await req.json();

    const passwordHash = await hash(senha, 8);

    await connectDb();
    await Usuario.create({nome, email, senha: passwordHash,})
    return NextResponse.json({message: "Usuario cadastrado"}, {status: 201});
}

export async function GET(res: any){
    await connectDb();
    const usuarios = await Usuario.find();
    return NextResponse.json({usuarios});

    if (!Usuario) {
        res.status(404).json({message: "Nenhum usuário encontrado"});
        return;
    }

}

export async function DELETE( req: any, res: any){
    const id = req.url.split("?")[1];
    console.log(id);
    await connectDb();
    await Usuario.findByIdAndDelete(id);
    return NextResponse.json({message: "Usuario deletado"}, {status: 200});

    if (!Usuario) {
        res.status(404).json({message: "usuário não encontrado"});
        return;
    }
}

export async function PUT(req: any, res: any){
    const id = req.url.split("?")[1];
    console.log(id);
    await connectDb();
    const update = await req.json();
    console.log(JSON.stringify(update));
    await Usuario.findByIdAndUpdate(id, update);
    return NextResponse.json({message: "Usuario alterado"}, {status: 200});

    if (!Usuario) {
        res.status(404).json({message: "usuário não encontrado"});
        return;
    }

    res.status(200).json({ msg: "Usuário atualziado"})
}