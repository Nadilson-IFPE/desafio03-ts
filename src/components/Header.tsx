import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor='#1a3d05' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl' marginLeft={5} color='white'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>

  )
}
