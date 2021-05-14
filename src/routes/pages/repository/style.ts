import styled, {css} from 'styled-components'

export const Logo = styled.img `
    width: 50px;
`

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color .2s;

        &:hover {
            color: #000;
        }

        svg {
            margin-right: 5px;
        }
    }
`

export const RepositoryInfo = styled