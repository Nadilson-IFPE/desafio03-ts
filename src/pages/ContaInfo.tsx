import { Box, Center, color, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../api"
import { Card } from "../components/Card"
import { ContaInfoCard } from "../components/ContaInfoCard"

interface UserData {
    email: string
    name: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    return (
        <>
            <Center>
                <Box padding="25px" width={'50%'}>
                    <ContaInfoCard >
                        <Center>
                            <Text fontSize='3xl' fontWeight='bold' marginBottom={10}>
                                Informações da conta
                            </Text>
                        </Center>
                        <Link to='/conta/1'>
                            <Text fontSize='xl'>
                                {`Titular da conta: ${userData?.name}`}
                            </Text>
                            <Text marginBottom={10}>
                                {`E-mail do titular da conta: ${userData?.email}`}
                            </Text>
                        </Link>
                        <Link to='/conta/1' >
                            Ir para a conta
                        </Link>
                    </ContaInfoCard>
                </Box>
            </Center>
        </>
    )
}

export default ContaInfo
