import { Box, Center, Input, Text } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Email ou senha inválidos!')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')

    }

    return (
        <Box padding="25px">
            <Card>
                <Center marginBottom={5} fontWeight="bold">
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="Informe seu e-mail..." value={email} onChange={(event) => setEmail(event.target.value)} marginBottom={5} />
                <Input type="password" value={password} placeholder="Informe sua senha..." onChange={(event) => setPassword(event.target.value)} marginBottom={5} />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
            </Card>
            <Center>
                <Box>
                    <Text fontWeight={"bold"} align="center" marginTop={10} marginBottom={10}>Para testes</Text>
                    <Text>Login: nadilson@dio.bank</Text>
                    <Text>Senha: 123456</Text>
                    <Text marginTop={5}>Você pode testar a validação digitando dados errados.</Text>
                </Box>
            </Center>
        </Box>
    );
}

export default Home;
