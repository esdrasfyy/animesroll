import './index.css';
import { FaFileContract, FaUserShield } from 'react-icons/fa';
function Footer() {
  return (
    <footer>
      <div className="containerr">
        <p>
          <em>
            Todos links e arquivos publicados no site AnimesROLL estão
            hospedados na própria Internet, somente indicamos onde se encontra,
            não hospedamos nenhum arquivo ou programas que seja de distribuição
            ilegal. Os arquivos protegidos por qualquer tipo de lei estão
            disponíveis no site apenas para conhecimento do mesmo. A aquisição
            desses arquivos e de única e exclusiva responsabilidade do usuário.
            Nenhum membro da equipe do site se responsabiliza sobre os arquivos
            nem com sua utilização por parte do usuário.
          </em>
        </p>

        <aside>
          <ul>
            <li>
              <p>AnimesROLL © 2020. Site desenvolvido com ❤️</p>
            </li>
            <li>
              <FaFileContract />
              <a href="https://www.anroll.net/termos">
                Termos de Uso •  
              </a> 
               <FaUserShield />
              <a href="https://www.anroll.net/politica-privacidade">
                Política de Privacidade
              </a>
            </li>
            <li>
              <span>&#60;/&#62;</span> Stacks for devs
            </li>
            <li>
              <p>ReactJS + NextJS + TypeScript & NodeJS + Express</p>
            </li>
            <li>
              <a href="https://discord.com/invite/XtVEkcR">Discord</a>
            </li>
            <li>
              <a href="https://www.facebook.com/animesroll1">Facebook</a>
            </li>
            <li>
              <p>
                ESTE SITE É APENAS UM CLONE DO ORIGINAL
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
