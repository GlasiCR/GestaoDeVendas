import * as S from "./styles"
import Login from "../../images/screenLogin.jpeg"
import EyeOffLine from "../../images/eyeOffLine.png"
import Loading from "../../images/gif/loading.gif"
import ButtonDefault from "../../components/buttonDefault"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import CheckboxInput from "../../components/checkboxInput"
import { color } from "../../theme/constants"

type dataLogin = {
    email: string,
    senha: string,
}

export default function LoginScreen(){
    const [viewPassword, setViewPassword] = useState(true)
    const [dataLogin, setDataLogin] = useState<dataLogin>({
        email: "",
        senha: "",
    })
    const [gifLoading, setGifLoading] = useState(false)
    
    const userAuth = useContext(UserContext )
    const navigate = useNavigate() 
    
    function changeTypePassword(){
        setViewPassword((prev) => !prev)
    }
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setDataLogin({...dataLogin, [event?.target.name]: event.target.value})
        console.log(dataLogin)
    }

    async function login(){
        if(!dataLogin.email || !dataLogin.senha){
            console.log("todos os campos deve estar preenchidos")
            return 
        } 
        try{
            setGifLoading(true)
            await userAuth.login(dataLogin.email, dataLogin.senha)
            navigate('dashboard')
        }
        catch(err){
            console.log("dados inválidos")
        }         
    }

    return(
        <S.MainLogin>
            <S.SectionLogin>
                <S.ContainerLogin>
                    <S.TextWelcome>Seja bem vindo!</S.TextWelcome>
                    <S.TextCallAction>Realize seu Login</S.TextCallAction>
                    <S.ContainerForm>
                        <S.Fieldset>
                            <S.Legend>E-mail</S.Legend>
                            <S.Input onChange={handleChange} name="email" type="email" placeholder="Insira seu e-mail" required/>
                        </S.Fieldset>
                        <S.Fieldset>
                            <S.Legend>Senha</S.Legend>
                            <S.Input onChange={handleChange} name="senha" type={viewPassword ? "password" : "text"} placeholder="Insira sua senha"required/>
                            <S.BtnLogin type="button"><img onClick={changeTypePassword} src={EyeOffLine}/></S.BtnLogin>
                        </S.Fieldset>
                    
                    <S.DivBelowForm>
                        <CheckboxInput 
                            nameId="rememberMe"
                            textLabel="Lembrar-me"
                            typeInput='checkbox'
                        />
                        <S.TextRememberPassword>Esqueci minha senha</S.TextRememberPassword>
                    </S.DivBelowForm>
                    <ButtonDefault 
                        textButton={!gifLoading ? "Entrar": ""}
                        borderRadius="16px"
                        width="100%"
                        padding="25px"
                        onClick={login}
                        disabled={gifLoading}
                        backgroundColor={!gifLoading ? `${color.primary}`: "transparent"}
                    >
                        {gifLoading && <img src={Loading} alt="Carregando" />}
                    </ButtonDefault>
                    </S.ContainerForm>
                </S.ContainerLogin>    
            </S.SectionLogin>
            <S.ImgLogin src={Login} />
        </S.MainLogin>
    )
}