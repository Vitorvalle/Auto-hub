import connectDb from '@/utils/dbConfig';
import {NextRequest, NextResponse } from 'next/server';
import Usuario from '@/models/usuarios';


export async function POST(req: any, res: any) {
    const {nome, email, senha} =  await req.json();

    await connectDb();
    await Usuario.create({nome, email, senha})
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