import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import logoImg from '../../../assets/github-logo.svg'
import { Header, Logo, RepositoryInfo } from './style'

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    
    return (
        <>
            <Header>
                <Logo src={logoImg} alt="Github Explorer"></Logo>
                <Link to="/dashboard"><FiChevronLeft size={16}/>Voltar</Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/42220808?v=4"/>
                    <div>
                        <strong>lugarcia94</strong>
                        <p>descrição</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>                                        
                </ul>
            </RepositoryInfo>
        </>
    )


}

export default Repository;
