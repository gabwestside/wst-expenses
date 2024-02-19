import React from 'react'
import { Form, NavLink } from 'react-router-dom'

// outside lib
import { TrashIcon } from '@heroicons/react/24/solid';

// assets
import logoMark from '../assets/logomark.svg'

interface NavProps {
  userName: string | null
}

export const Nav: React.FC<NavProps> = ({ userName }) => {
  return (
    <nav>
      <NavLink 
        to='/'
        aria-label='Vá para o Inicio'
      >
        <img src={logoMark} alt='navLogo' height={30} width={30} />
        <span>Despesas</span>
      </NavLink>
      {
        userName && (
          <Form 
            method='post'
            action='logout'
            onSubmit={(event) => {
              if (!confirm("Excluir usuário e todos os dados?"))
              {
                event.preventDefault()
              }
            }}
          >
            <button type='submit' className='btn btn--warning'>
              <span>Excluir Usuário</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        )
      }
    </nav>
  )
}
