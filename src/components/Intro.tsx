import { Form } from 'react-router-dom'

// Outside Lib
import { UserPlusIcon } from '@heroicons/react/24/solid'

// assets
import illustration from '../assets/illustration.jpg'

export const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Tome Controle da <span className='accent'>Sua Grana</span>
        </h1>
        <p>
          O orçamento pessoal é o segredo para a liberdade financeira. Comece
          hoje a sua jornada.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='UserName'
            required
            placeholder='Qual é o seu nome?'
            aria-label='Seu Nome'
            autoCapitalize='given-name'
          />
          <button type='submit' className='btn btn--dark'>
            <span>Criar Conta</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt='Pessoa com dinheiro' width={600} />
    </div>
  )
}
