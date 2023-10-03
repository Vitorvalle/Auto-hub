import Header from '../../components/header/header'

export default function SignIn(props: any){
    return (
        <section className="grid w-[1440px] h-[1192px] absolute left-0 right-0 top-[0px] bottom-[106px]"> 
        {Header(props)}     <div className="w-[1440px] h-[237px] absolute left-0 right-0 top-0 bottom-[955px]">
      </div>
      <div className="bg-[rgb(206,206,206)] rounded-xl outline outline-[rgb(0,123,211)] outline-1 outline-offset-[-1px] w-[784px] h-[749px] absolute left-[328px] right-[328px] top-[79px] bottom-[364px]" />
      <div className="bg-[rgb(0,123,211)] rounded-[12px_12px_0px_0px] w-[784px] h-[73px] absolute left-[328px] right-[328px] top-[79px] bottom-[1040px]" />
      <h2 className="flex items-center w-[286px] h-6 absolute left-[580px] right-[574px] top-[106px] bottom-[1062px]">
        <span className="font-normal text-[24px] leading-none font-Roboto text-black tracking-[0.15px]">
          <span className="text-white">Já tem uma conta? </span>
          <span className="font-bold text-[rgb(255,245,245)]">Entrar</span>
          <span className="text-white"> </span>
        </span>
      </h2>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[469px] h-16 absolute left-[486px] right-[485px] top-[251px] bottom-[885px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[403px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[121px] h-6 absolute left-[494px] right-[825px] top-56 bottom-[944px]">
        E-mail
      </h5>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[469px] h-16 absolute left-[486px] right-[485px] top-[356px] bottom-[780px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[403px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[121px] h-6 absolute left-[494px] right-[825px] top-[329px] bottom-[839px]">
        Nome completo
      </h5>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[469px] h-16 absolute left-[486px] right-[485px] top-[461px] bottom-[675px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[403px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[121px] h-6 absolute left-[494px] right-[825px] top-[434px] bottom-[734px]">
        Senha
      </h5>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[225px] h-16 absolute left-[486px] right-[729px] top-[671px] bottom-[465px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[159px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[117px] h-6 absolute left-[494px] right-[829px] top-[644px] bottom-[524px]">
        Sexo
      </h5>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[225px] h-16 absolute left-[730px] right-[485px] top-[671px] bottom-[465px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[159px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[117px] h-6 absolute left-[738px] right-[585px] top-[644px] bottom-[524px]">
        Data Nasc.
      </h5>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[469px] h-16 absolute left-[486px] right-[485px] top-[566px] bottom-[570px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[403px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[134px] h-6 absolute left-[494px] right-[812px] top-[539px] bottom-[629px]">
        Confirmar senha
      </h5>
      <div className="flex items-center font-normal text-[11px] leading-[2.18] font-Nunito text-black tracking-[0.15px] w-[422px] h-6 absolute left-[533px] right-[485px] top-[515px] bottom-[653px]">
        Senha precisa conter letras maiusculas, minusculas, numeros e caracteres especiais
      </div>
      <div className="grid rounded outline outline-[rgba(0,0,0,0.227)] outline-1 outline-offset-[-1px] w-[469px] h-16 absolute left-[486px] right-[485px] top-[566px] bottom-[570px]">
        <div className="bg-white w-[54px] h-0.5 grow mr-[403px] mb-[54px] ml-3" />
      </div>
      <h5 className="flex items-center font-normal text-base font-Nunito text-black tracking-[0.15px] w-[134px] h-6 absolute left-[494px] right-[812px] top-[539px] bottom-[629px]">
        Confirmar senha
      </h5>
      <div className="flex items-center font-normal text-[11px] leading-[2.18] font-Nunito text-black tracking-[0.15px] w-[422px] h-6 absolute left-[533px] right-[485px] top-[515px] bottom-[653px]">
        Senha precisa conter letras maiusculas, minusculas, numeros e caracteres especiais
      </div>
      <div className="grid bg-[rgb(63,63,63)] rounded w-[469px] h-[54px] absolute left-[486px] right-[485px] top-[749px] bottom-[389px]">
        <h5 className="font-medium text-[15px] leading-[1.73] font-Roboto text-white tracking-[0.46px] w-[91px] h-[26px] grow my-3.5 mx-[189px]">
          Cadastrar
        </h5>
      </div>
      <h1 className="font-bold text-[32px] leading-[0.75] font-Nunito text-black tracking-[0.15px] w-[404px] h-6 absolute left-[518px] right-[518px] top-44 bottom-[992px]">
        Digite seus dados pessoais
      </h1>
    </section>
    )
}