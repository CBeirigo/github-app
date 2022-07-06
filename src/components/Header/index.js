import React, { useState } from 'react'
import useGithub from '../../hooks/GithubHooks'
import * as S from './styled'


function Header() {
    const { getUser } = useGithub()
    const [usernameForSearch, setUsernameForSearch] = useState()
    const submitGetUser = () => {
      if(!usernameForSearch) return
      return getUser(usernameForSearch)
    }
  return (
    <header>
        <S.Wrapper>
            <input type='text' placeholder='Digite o username para pesquisa..' onChange={(event) => setUsernameForSearch(event.target.value)}/>
            <button type='submit' onClick={submitGetUser}>buscar</button>
        </S.Wrapper>
    </header>
  )
}

export default Header