import Image from 'next/image';
import Link from 'next/link';

import {
  PiDiscordLogoBold,
  PiInstagramLogoBold,
  PiTwitterLogoBold,
  PiYoutubeLogoBold,
} from 'react-icons/pi';

export function Footer() {
  return (
    <footer>
      <div className="bg-dark-100">
        <div className="p-[32px] lg:p-[64px]">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-10">
            <div className="flex flex-col gap-4 max-w-[450px]">
              <Link href="/" aria-label="MushBet">
                <Image src="/logo.png" width={180} height={180} alt="MushBet" />
              </Link>
              <p className="text-[14px] text-[#8D8DAC]">
                Descubra a emoção das apostas online na mush.bet! Oferecemos uma
                plataforma confiável e segura para entusiastas de jogos de aposta
                explorarem suas habilidades. Com uma ampla variedade de opções de apostas,
                desde esportes até jogos de cassino, você encontrará tudo o que precisa em
                um só lugar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
              <div className="flex flex-col gap-2">
                <h1 className="text-[18px] text-[#e5e5e5]">Empresa</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      aria-label="Sobre-nos"
                    >
                      Sobre-nos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      aria-label="Licença"
                    >
                      Licença
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      aria-label="Contato"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[18px] text-[#e5e5e5]">Suporte</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="Termos de Serviço"
                    >
                      Termos de Serviço
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="Política de Privacidade"
                    >
                      Política de Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="Política de Cookies"
                    >
                      Política de Cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="Regras do Jogo"
                    >
                      Regras do Jogo
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[18px] text-[#e5e5e5]">Suporte</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="Contato"
                    >
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="Suporte"
                    >
                      Suporte
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[14px] text-secondary-100 hover:underline"
                      arial-label="FAQ"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="bg-[#74757C] opacity-[0.3] h-[1px] w-full mt-10 mb-5" />
          <div className="flex flex-col md:flex-row justify-between items-center pt-[25px] gap-5 md:gap-0">
            <p className="text-[12px] lg:text-[14px] text-[#8D8DAC]">
              Copyright © {new Date().getFullYear()} AlphaBet - Todos os direitos
              reservados.
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/" className="text-white" arial-label="Discord">
                  <PiDiscordLogoBold size={18} />
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white" arial-label="Twitter">
                  <PiTwitterLogoBold size={18} />
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white" arial-label="Youtube">
                  <PiYoutubeLogoBold size={18} />
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white" arial-label="Instagram">
                  <PiInstagramLogoBold size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
